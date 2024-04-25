function validateLoginForm() {
  const email = document.querySelector('input[name="auth_email"]').value;
  const password = document.querySelector('input[name="auth_pass"]').value;
  
  if(email === '' || password === '') {
      alert('Заполните поле');
  } else {
  // continue with login process
      window.location.href = 'http://127.0.0.1:5500/laba-test/index.html';
  }
}