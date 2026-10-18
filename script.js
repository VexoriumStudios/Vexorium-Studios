document.getElementById('year').textContent = new Date().getFullYear();
const toggle=document.querySelector('.menu'), nav=document.getElementById('navlinks');
toggle.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open',!expanded)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
const email=(window.VEXORIUM_CONFIG?.supportEmail||'').trim();
if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){document.getElementById('contact-status').textContent=email;const link=document.getElementById('email-link');link.href='mailto:'+email;link.hidden=false;document.querySelector('.contact-note').hidden=true;}
