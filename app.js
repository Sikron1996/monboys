const CA = "0xa4105C0509bb414074fB1C850c046f8FdB847777";

const toastEl = document.getElementById("toast");
function toast(msg){
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  setTimeout(()=>toastEl.classList.remove("show"), 1100);
}

async function copyCA(){
  try{
    await navigator.clipboard.writeText(CA);
    toast("Copied!");
  }catch(e){
    const ta = document.createElement("textarea");
    ta.value = CA;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    toast("Copied!");
  }
}
document.getElementById("copyBtn").addEventListener("click", copyCA);
document.getElementById("year").textContent = String(new Date().getFullYear());

const burger = document.getElementById("burger");
const menu = document.getElementById("mobileMenu");
let open = false;
burger.addEventListener("click", () => {
  open = !open;
  menu.style.display = open ? "flex" : "none";
});
// close on link click
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", ()=>{
  open = false;
  menu.style.display = "none";
}));
menu.style.display = "none";
