const sharebtn = document.querySelector('#btn');
const Modalll = document.querySelector('#Modal');
const Modall = document.querySelector('#Modal1');
const overlays = document.querySelector('.overlay');
const cbtn = document.querySelector('#closebtn');
const cbtn1 = document.querySelector('#closebtn1');

const p = document.querySelector('#btn1');

// Model Open fn;
sharebtn.addEventListener('click',function(){
    Modalll.setAttribute('style','display:block','scale:1');
});

// Model close fn;
cbtn.addEventListener('click',function(){
    Modalll.setAttribute('style','display:none','scale:0');
})


p.addEventListener('click',function(){
    Modal1.setAttribute('style','display:block','scale:1');
})

cbtn1.addEventListener('click',function(){
    Modall.setAttribute('style','display:none','scale:0');
})