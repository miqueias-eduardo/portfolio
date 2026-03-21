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
 if (temaAtivo==="tema-escuro"){
  document.body.className ="tema-claro"
  white.classList.add('active');
  black.classList.remove('active');
 }

 else if(temaAtivo === "tema-claro"){
  document.body.className = "tema-escuro"
  black.classList.add('active');
  white.classList.remove('active');
 }
}

 catch(error){
 console.log(error);
 }
}


export function openMenu(){
  const head = document.querySelector('header');
  head.classList.toggle("active");
}
