document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentCode = document.getElementById('studentCode').value;
    const studentNumber = document.getElementById('studentNumber').value;
    const studentName = document.getElementById('studentName').value;
    const attendance = document.getElementById('attendance').value;
    const tests = document.getElementById('tests').value;

    const table = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = studentCode;
    newRow.insertCell(1).textContent = studentNumber;
    newRow.insertCell(2).textContent = studentName;
    newRow.insertCell(3).textContent = attendance;
    newRow.insertCell(4).textContent = tests;

    document.getElementById('studentForm').reset();
});
