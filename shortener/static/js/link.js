const input = document.querySelector('.deeplink__input');
const arrayInput = input.value.split('//')
if(input.value !== '') {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setTimeout(function () { window.location = input.value; }, 3000);
      const linkMobile = `intent://${arrayInput[1]}#Intent;package=com.wildberries.ru;scheme=https;S.browser_fallback_url=https://${arrayInput[1]};end;`
      console.log(linkMobile);
      window.location.href = linkMobile;
    } else {
      window.location.href = input.value;
    }
}