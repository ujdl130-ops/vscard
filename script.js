const copyPhoneButton = document.getElementById('copyPhoneButton');
const copyEmailButton = document.getElementById('copyEmailButton');
const phoneText = document.getElementById('phoneText');
const emailText = document.getElementById('emailText');
const notice = document.getElementById('notice');


copyPhoneButton.addEventListener('click', async () => {
  const phoneNumber = phoneText.textContent.trim();

  try {
    await navigator.clipboard.writeText(phoneNumber);
    notice.textContent = '전화번호가 복사되었습니다.';
  } catch (error) {
    notice.textContent = '복사에 실패했습니다. 번호를 직접 선택해서 복사해주세요.';
  }
});

copyEmailButton.addEventListener('click', async () => {
  const email = emailText.textContent.trim();

  try {
    await navigator.clipboard.writeText(email);
    notice.textContent = '이메일이 복사되었습니다.';
  } catch (error) {
    notice.textContent = '복사에 실패했습니다. 이메일을 직접 선택해서 복사해주세요.';
  }
});
