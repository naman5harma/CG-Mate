Listen carefully this is the logic for calculating cgpa
# Function to calculate CGPA
def calculate_cgpa(semester, previous_cgpa=0, previous_semesters=0):
    if semester == 1:
        num_courses = int(input("Enter the number of courses this semester: "))
        total_credits = 0
        total_grade_points = 0

        for i in range(1, num_courses + 1):
            credits = int(input(f"Enter credits for Course {i}: "))
            grade = input(f"Enter grade (A, A-, B, ..., F) for Course {i}: ").upper()
            grade_points = 0
            
            if grade == 'A':
                grade_points = 10
            elif grade == 'A-':
                grade_points = 9
            elif grade == 'B':
                grade_points = 8
            elif grade == 'B-':
                grade_points = 7
            elif grade == 'C':
                grade_points = 6
            elif grade == 'C-':
                grade_points = 5
            elif grade == 'D':
                grade_points = 4
            elif grade == 'E' or grade == 'F':
                grade_points = 0

            total_credits += credits
            total_grade_points += credits * grade_points

        cgpa = total_grade_points / total_credits
        print(f"Your CGPA for Semester {semester} is: {cgpa:.2f}")

    else:
        sgpa = 0
        num_courses = int(input("Enter the number of courses this semester: "))
        total_credits = 0
        total_grade_points = 0

        for i in range(1, num_courses + 1):
            credits = int(input(f"Enter credits for Course {i}: "))
            grade = input(f"Enter grade (A, A-, B, ..., F) for Course {i}: ").upper()
            grade_points = 0
            
            if grade == 'A':
                grade_points = 10
            elif grade == 'A-':
                grade_points = 9
            elif grade == 'B':
                grade_points = 8
            elif grade == 'B-':
                grade_points = 7
            elif grade == 'C':
                grade_points = 6
            elif grade == 'C-':
                grade_points = 5
            elif grade == 'D':
                grade_points = 4
            elif grade == 'E' or grade == 'F':
                grade_points = 0

            total_credits += credits
            total_grade_points += credits * grade_points

        sgpa = total_grade_points / total_credits
        print(f"Your SGPA for Semester {semester} is: {sgpa:.2f}")

        total_semesters = current_semester
        cgpa = ((previous_semesters * previous_cgpa) + sgpa) / total_semesters
        print(f"Your CGPA till now is: {cgpa:.2f}")


# Main program
current_semester = int(input("Enter the current semester number: "))

if current_semester == 1:
    calculate_cgpa(1)
else:
    previous_cgpa = float(input("Enter your CGPA till the previous semester: "))
    calculate_cgpa(current_semester, previous_cgpa, current_semester - 1)