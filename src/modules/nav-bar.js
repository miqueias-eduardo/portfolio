const links = document.querySelectorAll(".nav-bar a");
const sections = document.querySelectorAll("section,footer")

export function linkClicado(el) {
  const ativo = document.querySelector(".nav-bar a.active");

  ativo ? ativo.classList.remove("active") : null;

  el.target.classList.add("active");
}


//codigo para mudar o link de acordo com o scroll

export function scrollSpy() {
    let scrollPos = window.scrollY + window.innerHeight / 3; // pega a posição do scroll

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            // Remove active de todos
            links.forEach(link => link.classList.remove("active"));

            // Adiciona active no link correspondente
            const id = section.getAttribute("id");
            const link = document.querySelector(`.nav-bar a[href="#${id}"]`);
            link.classList.add("active");
        }
    });
}



export function trocarTema (){
  const black = document.getElementById("escuro");
  const white = document.getElementById("claro");

 const temaAtivo = document.body.className;
try{
  if (document.body.classList.contains("tema-escuro")) {
    document.body.classList.replace("tema-escuro", "tema-claro");
  } else {
    document.body.classList.replace("tema-claro", "tema-escuro");
  }
}

 catch(error){
 console.log(error);
 }
}

export function temaAtivo() {
  const black = document.getElementById("escuro");
  const white = document.getElementById("claro");

  if (document.body.classList.contains("tema-escuro")) {
    black.classList.add("active");
    white.classList.remove("active");
  } else {
    white.classList.add("active");
    black.classList.remove("active");
  }
}


export function openMenu(){
  const head = document.querySelector('header');
  head.classList.toggle("active");
}
