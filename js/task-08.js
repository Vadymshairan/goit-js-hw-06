const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onSubmitBtn);

function onSubmitBtn(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Всі поля повинні бути заповнені.');
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
