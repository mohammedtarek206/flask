from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

def add_student_to_excel(student_data, file_name='students.xlsx'):
    try:
        df = pd.read_excel(file_name)
    except FileNotFoundError:
        df = pd.DataFrame(columns=['كود الطالب', 'رقم الطالب', 'اسم الطالب رباعي', 'تسجيل الحضور', 'الاختبارات'])
    
    df = pd.concat([df, pd.DataFrame([student_data])], ignore_index=True)
    df.to_excel(file_name, index=False)

@app.route('/add_student', methods=['POST'])
def add_student():
    student_data = request.json
    add_student_to_excel(student_data)
    return jsonify({"message": "تم تخزين البيانات في ملف اكسيل بنجاح."})

@app.route('/get_students', methods=['GET'])
def get_students():
    try:
        df = pd.read_excel('students.xlsx')
        students = df.to_dict(orient='records')
        return jsonify(students)
    except FileNotFoundError:
        return jsonify([])

if __name__ == '__main__':
    app.run(debug=True)
