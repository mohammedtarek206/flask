document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const studentCode = document.getElementById('studentCode').value;
    const studentNumber = document.getElementById('studentNumber').value;
    const studentName = document.getElementById('studentName').value;
    const attendance = document.getElementById('attendance').value;
    const tests = document.getElementById('tests').value;
    
    const studentData = {
        'كود الطالب': studentCode,
        'رقم الطالب': studentNumber,
        'اسم الطالب رباعي': studentName,
        'تسجيل الحضور': attendance,
        'الاختبارات': tests
    };
    
    fetch('/add_student', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(studentData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        fetchStudents();
        document.getElementById('studentForm').reset();
    })
    .catch(error => console.error('Error:', error));
});

function fetchStudents() {
    fetch('/get_students')
    .then(response => response.json())
    .then(data => {
        const table = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
        table.innerHTML = ''; // Clear existing rows
        data.forEach(student => {
            const newRow = table.insertRow();
            newRow.insertCell(0).textContent = student['كود الطالب'];
            newRow.insertCell(1).textContent = student['رقم الطالب'];
            newRow.insertCell(2).textContent = student['اسم الطالب رباعي'];
            newRow.insertCell(3).textContent = student['تسجيل الحضور'];
            newRow.insertCell(4).textContent = student['الاختبارات'];
        });
    })
    .catch(error => console.error('Error:', error));
}

// Fetch students on page load
document.addEventListener('DOMContentLoaded', fetchStudents);
