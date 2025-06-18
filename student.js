function getStudents() {
    return JSON.parse(localStorage.getItem('students')) || [];
  }
  
  function saveStudent(student) {
    const students = getStudents();
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
  }
  