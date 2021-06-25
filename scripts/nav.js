
let phone = document.querySelector("#small-nav");
let pc = document.querySelector("#pc-nav");
// let nav = null;
let aside = document.querySelector("aside");
let article = document.querySelector("article");
let sticky = pc.offsetTop;
let navMenu = document.querySelector("#small-nav-menu");
document.getElementById("close").onclick = ()=>closeNave(navMenu);
document.getElementById("open").onclick = ()=>openNav(navMenu);

window.onscroll = ()=>makeNavSticky(phone,pc);

function makeNavSticky(phone,pc) {
  let nav = null;
  if(getComputedStyle(phone).display === "none"){
    nav = pc;
  } else if(getComputedStyle(pc).display === "none"){
    nav = phone;
  }

  if(window.pageYOffset > sticky ){
     nav.classList.add("fixed");
     article.classList.add("article-bellow-sticky");
     if(aside) aside.classList.add("aside-bellow-sticky");
     console.log("done");
  } else{
    nav.classList.remove("fixed");
    article.classList.remove("article-bellow-sticky");
    if(aside) aside.classList.remove("aside-bellow-sticky");


  }
}

function openNav(nav){
  // nav.style.display = "block";
  nav.style.height = "100%";

}

function closeNave(nav) {
  // nav.style.display = "none";
  nav.style.height = "0%";
}