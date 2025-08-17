AOS.init({ duration:900, once:true, easing:'ease-out-cubic' });

// navbar background on scroll
const nav = document.getElementById('nav');
function onScroll() {
  if (window.scrollY > 36) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
}
onScroll();
window.addEventListener('scroll', onScroll, { passive:true });

// small polish: hover lift on hero image when page ready
const img = document.querySelector('.hero-ill img');
if(img){
  img.addEventListener('mouseenter', ()=> img.style.transform = 'translateY(-6px) scale(1.02)');
  img.addEventListener('mouseleave', ()=> img.style.transform = 'translateY(6px) scale(1)');
}
