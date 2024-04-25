function validateLoginForm() {
  const email = document.querySelector('input[name="auth_email"]').value;
  const password = document.querySelector('input[name="auth_pass"]').value;
  
  if(email === '' || password === '') {
      alert('Заполните поле');
  } else {
  // continue with login process
      window.location.href = 'index.html';
  }
}

function validateRegistrForm() {
  window.location.href = 'http://127.0.0.1:5500/regist/regisrt.html';
}
const mysql = require('');

const connection = mysql.createConnection({
  host: 'your_host',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

connection.connect();

const user = {
  id: 1,
  email: 'example@example.com',
  password: 'password123',
  q1: true,
  q2: false,
  q3: true,
  q4: false,
  q5: true,
  q6: false,
  q7: true,
  q8: false,
  q9: true,
  q10: false
};

connection.query('INSERT INTO users SET ?', user, (error, results) => {
  if (error) {
    console.error(error);
  } else {
    console.log('New user added to the database.');
  }
});

connection.end();
