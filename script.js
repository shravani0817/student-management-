document.getElementById('studentForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const student = {
      name: document.getElementById('studentName').value,
      id: document.getElementById('studentID').value,
      class: document.getElementById('studentClass').value,
      grade: document.getElementById('studentGrade').value
    };
  
    saveStudent(student);
    alert('Student added successfully!');
    this.reset();
  });
  