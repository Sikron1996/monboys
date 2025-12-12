const cursor=document.querySelector('.cursor');
window.addEventListener('mousemove',e=>{
cursor.style.left=e.clientX+'px';
cursor.style.top=e.clientY+'px';
});
const sections=document.querySelectorAll('.section');
const io=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.style.opacity=1;
e.target.style.transform='none';
}
})
},{threshold:.35});
sections.forEach(s=>{
s.style.opacity=0;
s.style.transform='translateY(30px)';
s.style.transition='1s';
io.observe(s);
});
