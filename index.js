const express = require('express');
const app = express();
const studentRoutes = require('./src/routes/studentRoutes');

app.use(express.json());
app.use('/students', studentRoutes);


app.get('/', (req, res) => {
  res.json({
    message: 'Student Management API is running!',
    routes: {
      getAllStudents: 'GET /students',
      addStudent: 'POST /students',
      updateStudent: 'PUT /students/:id',
      deleteStudent: 'DELETE /students/:id'
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});