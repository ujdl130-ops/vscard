const copyPhoneButton = document.getElementById('copyPhoneButton');
const copyEmailButton = document.getElementById('copyEmailButton');
const githubButton = document.getElementById('githubButton');
const phoneText = document.getElementById('phoneText');
const emailText = document.getElementById('emailText');
const notice = document.getElementById('notice');
const businessCard = document.querySelector('.business-card');
const cardRotator = document.getElementById('cardRotator');
const showBackButton = document.getElementById('showBackButton');
const showFrontButton = document.getElementById('showFrontButton');

function showNotice(message) {
  if (!notice) return;
  notice.textContent = message;
}

async function copyText(text, successMessage, failMessage) {
  if (!text) {
    showNotice('복사할 내용이 없습니다.');
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    showNotice(successMessage);
  } catch (error) {
    showNotice(failMessage);
  }
}

if (copyPhoneButton && phoneText) {
  copyPhoneButton.addEventListener('click', () => {
    const phoneNumber = phoneText.textContent.trim();

    copyText(
      phoneNumber,
      '전화번호가 복사되었습니다.',
      '복사에 실패했습니다. 번호를 직접 선택해서 복사해주세요.'
    );
  });
}

if (copyEmailButton && emailText) {
  copyEmailButton.addEventListener('click', () => {
    const email = emailText.textContent.trim();

    copyText(
      email,
      '이메일이 복사되었습니다.',
      '복사에 실패했습니다. 이메일을 직접 선택해서 복사해주세요.'
    );
  });
}

if (githubButton) {
  githubButton.addEventListener('click', () => {
    showNotice('Github 페이지로 이동합니다.');
  });
}

if (showBackButton && cardRotator) {
  showBackButton.addEventListener('click', () => {
    cardRotator.classList.add('is-flipped');
  });
}

if (showFrontButton && cardRotator) {
  showFrontButton.addEventListener('click', () => {
    cardRotator.classList.remove('is-flipped');
  });
}

if (businessCard) {
  businessCard.style.transition = 'transform 0.25s ease, box-shadow 0.25s ease';

  businessCard.addEventListener('mouseenter', () => {
    businessCard.style.transform = 'translateY(-12px)';
    businessCard.style.boxShadow = '0 34px 90px rgba(194, 155, 237, 0.28)';
  });

  businessCard.addEventListener('mouseleave', () => {
    businessCard.style.transform = 'translateY(0)';
    businessCard.style.boxShadow = '';
  });
}
