document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault();

  let numero = "5599999999999"; // seu número

  let mensagem = "Olá, quero falar com um especialista sobre auxílio-acidente";

  let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
});