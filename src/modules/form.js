export function validacaoEmail(email){
     email.setCustomValidity("");
      if (email.validity.typeMismatch && email.value !== ""){
        email.setCustomValidity("O e-mail informado não é válido. Tente algo como nome@dominio.com.");

      }
      else {
        email.setCustomValidity("");
    }
}

export function envioForm (form){
    const modal=document.getElementById('modal-sucesso')
    const formData = new FormData(form);

    fetch("https://formsubmit.co/miqueiaseduardo294@gmail.com", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (!response.ok) {
    throw new Error("Falha ao enviar formulário");
  }
      form.reset();
      modal.classList.add("active");
    })
    .catch(error => alert("Erro ao enviar"));
  }

export function fecharModal() {
  const modal = document.getElementById("modal-sucesso");
  const modalOverlay = document.querySelector(".modal-overlay");
  const botaoFechar = document.getElementById("fechar-modal");

  if (!modal || !modalOverlay) return;

  function close() {
    modal.classList.remove("active");
  }

  botaoFechar.addEventListener("click", close);

  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      close();
    }
  });
}
