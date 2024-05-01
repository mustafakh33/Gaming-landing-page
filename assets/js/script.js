 /* ============================== 
 ------------ #HEADER ------------ 
=================================*/
const header = document.getElementById("header-bottom");
window.addEventListener("scroll", ()=>{
  if(window.scrollY >= 250){
    header.classList.add("header-fixed");
    header.classList.remove("header-bottom");
  }
  else{
    header.classList.add("header-bottom");
    header.classList.remove("header-fixed")
  }
})
 /* ============================== 
 -------- #BACK TO TOP ----------- 
=================================*/
const btn = document.getElementById("top");
window.addEventListener("scroll", ()=>{
  if(window.scrollY >= 250){
    btn.classList.add("active");
  }
  else{
    btn.classList.remove("active")
  }
})
btn.addEventListener("click", ()=>{
  window.scrollTo({
    top:0,
    behavior: "smooth",
  })
})