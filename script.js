// minimal smooth reveal on scroll
const els=document.querySelectorAll('.about, .buttons');
const io=new IntersectionObserver(e=>{
e.forEach(x=>{
if(x.isIntersecting)x.target.style.opacity=1
})
},{threshold:.2});
els.forEach(el=>{
el.style.opacity=0;
el.style.transition='1s';
io.observe(el)
});
