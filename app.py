import pandas as pd

# Function to add student data to an Excel file
def add_student_to_excel(student_data, file_name='students.xlsx'):
    try:
        # Try to read the existing Excel file
        df = pd.read_excel(file_name)
    except FileNotFoundError:
        # If the file does not exist, create a new DataFrame
        df = pd.DataFrame(columns=['كود الطالب', 'رقم الطالب', 'اسم الطالب رباعي', 'تسجيل الحضور', 'الاختبارات'])

    # Append the new student data to the DataFrame
    df = pd.concat([df, pd.DataFrame([student_data])], ignore_index=True)

    # Save the DataFrame to the Excel file
    df.to_excel(file_name, index=False)

# Example student data
student_data = {
    'كود الطالب': '001',
    'رقم الطالب': '1234567890',
    'اسم الطالب رباعي': 'محمد أحمد علي حسن',
    'تسجيل الحضور': 'حاضر',
    'الاختبارات': '85%'
}

# Add the student data to the Excel file
add_student_to_excel(student_data)

print("تم تخزين البيانات في ملف اكسيل بنجاح.")
