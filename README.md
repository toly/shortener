# shortener

``` html
<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <input class="deeplink__input" type="hidden" value="https://www.wildberries.ru/catalog/139314286/detail.aspx?targetUrl=MI">
        <script type="text/javascript" src="/js/link.js"></script>
    </body>
</html>
```

``` js
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
```