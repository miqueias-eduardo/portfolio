import { envioForm, fecharModal, validacaoEmail } from "./modules/form.js"
import * as nav from "./modules/nav-bar.js"


const links = document.querySelectorAll(".nav-bar a");

links.forEach((link) => {
  link.addEventListener("click", nav.linkClicado);
});



window.addEventListener("scroll", nav.scrollSpy);



const tema = document.querySelector(".tema");

tema.addEventListener('click', nav.trocarTema)




const menuMobile = document.getElementById("menu-mobile");

menuMobile.addEventListener('click', nav.openMenu);



const email = document.getElementById("email");

email.addEventListener('invalid', ()=>{
validacaoEmail(email);
email.reportValidity();
})

email.addEventListener('input', () => {
    validacaoEmail(email);
});

const form = document.querySelector("form");

form.addEventListener("submit",function(event){
 event.preventDefault();
 envioForm(form);
})

document.addEventListener("DOMContentLoaded", () => {
      fecharModal();
  })
