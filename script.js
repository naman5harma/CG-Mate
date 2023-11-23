document.addEventListener("DOMContentLoaded", function () {
  const semesterForm = document.getElementById("semesterInput");
  const courseInputs = document.getElementById("courseInputs");
  const courseList = document.getElementById("courseList");
  const outputDiv = document.getElementById("output");

  semesterForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const semester = parseInt(document.getElementById("semester").value);
    setupCourseInputs(semester);
  });

  function setupCourseInputs(semester) {
    semesterForm.style.display = "none";
    courseInputs.style.display = "block";
    courseList.innerHTML = "";

    for (let i = 1; i <= semester; i++) {
      const div = document.createElement("div");
      div.innerHTML = `
          <h3>Course ${i}</h3>
          <label for="credits_${i}">Enter credits for Course ${i}:</label>
          <input type="number" id="credits_${i}" name="credits_${i}" required min="1" max="6">
          <label for="grade_${i}">Select grade for Course ${i}:</label>
          <select id="grade_${i}" name="grade_${i}" required>
            <option value="">Select Grade</option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="C">C</option>
            <option value="C-">C-</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
          </select>
        `;
      courseList.appendChild(div);
    }
  }

  document
    .getElementById("courseForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      addCourse();
    });

  function addCourse() {
    const courseCount = courseList.childElementCount;
    const div = document.createElement("div");
    div.innerHTML = `
        <h3>Course ${courseCount + 1}</h3>
        <label for="credits_${courseCount + 1}">Enter credits for Course ${
      courseCount + 1
    }:</label>
        <input type="number" id="credits_${courseCount + 1}" name="credits_${
      courseCount + 1
    }" required>
        <label for="grade_${courseCount + 1}">Select grade for Course ${
      courseCount + 1
    }:</label>
        <select id="grade_${courseCount + 1}" name="grade_${
      courseCount + 1
    }" required>
          <option value="">Select Grade</option>
          <option value="A">A</option>
          <option value="A-">A-</option>
          <option value="B">B</option>
          <option value="B-">B-</option>
          <option value="C">C</option>
          <option value="C-">C-</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
      `;
    courseList.appendChild(div);
  }

  document
    .getElementById("calculateButton")
    .addEventListener("click", function () {
      calculateCGPA();
    });

  function calculateCGPA() {
    const forms = document.forms["courseForm"];
    console.log(forms);
    let totalCredits = 0;
    let totalGradePoints = 0;
    let numberOfCourses = forms.length / 2;

    for (let i = 0; i < numberOfCourses; i++) {
      const credits = parseInt(forms[i * 2].value);
      const grade = forms[i * 2 + 1].value.toUpperCase();

      console.log(`Course ${i + 1}: Credits - ${credits}, Grade - ${grade}`);

      if (isNaN(credits)) {
        console.error(
          `Invalid credits entered for course ${i + 1}: ${forms[i * 2].value}`
        );
        numberOfCourses = i; // Adjust the count of courses based on valid inputs
        break; // Exit the loop if an invalid input is encountered
      }

      let gradePoints = 0;
      switch (grade) {
        case "A":
          gradePoints = 10;
          break;
        case "A-":
          gradePoints = 9;
          break;
        case "B":
          gradePoints = 8;
          break;
        case "B-":
          gradePoints = 7;
          break;
        case "C":
          gradePoints = 6;
          break;
        case "C-":
          gradePoints = 5;
          break;
        case "D":
          gradePoints = 4;
          break;
        case "E":
          gradePoints = 0;
          break;
        case "F":
          gradePoints = 0;
          break;
      }
      // console.log(gradePoints);
      totalCredits += credits;
      totalGradePoints += credits * gradePoints;
      // console.log(totalCredits);
      console.log("h3", totalGradePoints / totalCredits);
    }

    console.log("Total Credits:", totalCredits);
    console.log("Total Grade Points:", totalGradePoints);

    if (totalCredits === 0) {
      console.log("Cannot divide by zero. No valid courses entered.");
      return; // Exiting function to avoid division by zero
    }

    const cgpa = totalGradePoints / totalCredits;
    console.log("CGPA:", cgpa);

    outputDiv.innerHTML = `<p>Your CGPA for Semester is: ${cgpa.toFixed(
      2
    )}</p>`;
  }
});
