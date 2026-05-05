const { students, getNextId } = require('../data/students');

exports.addStudent = (req, res) => {
  const { name, marks } = req.body;
  if (!name || name.trim() === '') 
    return res.status(400).json({ error: 'Name is required' });
  if (marks === undefined || marks < 0) 
    return res.status(400).json({ error: 'Marks must be >= 0' });

  const student = { id: getNextId(), name, marks };
  students.push(student);
  res.status(201).json(student);
};

exports.getAllStudents = (req, res) => {
  res.status(200).json(students);
};

exports.updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, marks } = req.body;
  const student = students.find(s => s.id === id);

  if (!student) 
    return res.status(404).json({ error: 'Student not found' });
  if (!name || name.trim() === '') 
    return res.status(400).json({ error: 'Name is required' });
  if (marks === undefined || marks < 0) 
    return res.status(400).json({ error: 'Marks must be >= 0' });

  student.name = name;
  student.marks = marks;
  res.status(200).json(student);
};

exports.deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) 
    return res.status(404).json({ error: 'Student not found' });

  const deleted = students.splice(index, 1);
  res.status(200).json({ message: 'Student deleted', student: deleted[0] });
};