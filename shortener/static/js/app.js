const listQuestions = document.querySelector('.faq__list');
const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__list')
listQuestions.addEventListener('click', (evt) => {
    target = evt.target.closest('.faq__question');
    const panel = target.nextElementSibling;
    if(target){
       const item = target.parentElement
       item.classList.toggle('active');
       if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
})

//header-link

const linksHeader = document.querySelectorAll('[data-link]')
linksHeader.forEach(link => {
    link.addEventListener('click', (evt) => {
        evt.preventDefault();
        const blockId = document.querySelector(link.dataset.link)
        heightBlockScroll = blockId.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight
        if(menu.classList.contains('active')) {
            menu.classList.remove('active')
            burger.classList.remove('active')
        }
        window.scrollTo({
            top: heightBlockScroll,
            behavior: "smooth"

        })
    })

})

//Copy link

const copyLinkButton = document.querySelector('.intro__copy-btn');
const deeplink = document.querySelector('.deeplink__link')


copyLinkButton.addEventListener('click', () => {
  deeplink.select();
  document.execCommand('copy')
  document.querySelector('.intro__copy-text').textContent = 'РЎСЃС‹Р»РєР° СЃРєРѕРїРёСЂРѕРІР°РЅР°!'
})

//api

const form = document.querySelector('form');
//РќР°С…РѕРґРёРј СЃСЃС‹Р»РєСѓ
const link = document.querySelector('.deeplink__link');

const paragraf = document.querySelector('.intro__paragraf');

const input = form.querySelector('.form__input');

const lableLink = form.querySelector('.form__label')

const buttonSubmit = form.querySelector('.form__button');

const settingsBlock = document.querySelector('.loade__gif');

const smallInput = lableLink.querySelector('small')



//РЎРѕР·РґР°РµРј Р°СЃСЃРёРЅС…СЂРѕРЅРЅСѓСЋ С„СѓРЅРєРёСЋ РґР»СЏ РїРѕР»СѓС‡РµРЅРёРµ РґР°РЅРЅС‹С… json С„Р°Р№Р»Р°
async  function getResponse() {
    let response = await fetch('view.json');
    let content = await response.json();

    link.value = `https://deeplink-pro.ru/link/${content.id}`

}




input.addEventListener('focus', () => {
   smallInput.classList.add('hidden')
  //  lableLink.classList.remove('error')
   buttonSubmit.removeAttribute("disabled")
});

const onErrorValid = () => {
    smallInput.classList.remove('hidden')
}


// form.addEventListener('submit', function (evt) {
//     evt.preventDefault();
//     const arrayInput = input.value.split('//');
//     if(arrayInput[0] == 'https:') {
//         const InpurIndex = arrayInput[1];
//         const arrayInputIndex = InpurIndex.split('/');
//         if(arrayInputIndex[0] == 'www.wildberries.ru'){
//             settingsBlock.classList.remove('hidden');
//             buttonSubmit.setAttribute("disabled","disabled")
//             const formData = new FormData(form);
//             fetch('create_link.php', {
//                 method: "POST",
//                 body:formData
//             }).then(response => response);
//                 setTimeout(() => {
//                     getResponse();
//                     form.reset();
//                     paragraf.classList.remove('hidden')
//                     settingsBlock.classList.add('hidden');
//                     }, 1000)
//                     smallInput.classList.add('hidden')
//         }
//         else {
//             onErrorValid()
//         }
//
//     } else {
//         onErrorValid()
//     }
//
// });


//Burger



burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})