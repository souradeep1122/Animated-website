let vid=document.querySelector('.vidtxt')
let Video=document.querySelector('.videobotm video')

vid.addEventListener('mouseover',function(){
    Video.style.opacity='1';

})
vid.addEventListener('mouseout',function(){
    Video.style.opacity='0';

})


const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});