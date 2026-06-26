/* =============================================
   Doce da Ana – script.js
   Funcionalidades:
   1. FAQ accordion (abre/fecha perguntas)
   2. Cardápio – mostrar/ocultar sabores
   3. Validação simples do formulário de encomenda
   ============================================= */


/* ── 1. FAQ ACCORDION ── */
/* Ao clicar numa pergunta, a resposta aparece ou desaparece */

const perguntasFaq = document.querySelectorAll('.faq-pergunta');

perguntasFaq.forEach(function (botao) {
  botao.addEventListener('click', function () {

    const idResposta = botao.getAttribute('aria-controls');
    const resposta   = document.getElementById(idResposta);
    const estaAberto = botao.getAttribute('aria-expanded') === 'true';

    /* Fecha todas as outras antes de abrir a atual */
    perguntasFaq.forEach(function (outroBotao) {
      const outroId      = outroBotao.getAttribute('aria-controls');
      const outraResposta = document.getElementById(outroId);
      outroBotao.setAttribute('aria-expanded', 'false');
      outraResposta.hidden = true;
    });

    /* Abre ou fecha a pergunta clicada */
    if (!estaAberto) {
      botao.setAttribute('aria-expanded', 'true');
      resposta.hidden = false;
    }
  });
});


/* ── 2. CARDÁPIO – VER SABORES ── */
/* Cada botão "Ver sabores" mostra ou oculta a lista de sabores do produto */

const botoesSabores = document.querySelectorAll('.btn-ver-sabores');

botoesSabores.forEach(function (botao) {
  botao.addEventListener('click', function () {

    const idAlvo  = botao.getAttribute('data-alvo');
    const listaSabores = document.getElementById(idAlvo);
    const estaAberto   = botao.getAttribute('aria-expanded') === 'true';

    if (estaAberto) {
      /* Fecha */
      listaSabores.hidden = true;
      botao.setAttribute('aria-expanded', 'false');
      botao.textContent = 'Ver sabores ▾';
    } else {
      /* Abre */
      listaSabores.hidden = false;
      botao.setAttribute('aria-expanded', 'true');
      botao.textContent = 'Ocultar sabores ▴';
    }
  });
});


/* ── 3. VALIDAÇÃO DO FORMULÁRIO ── */
/* Verifica se os campos obrigatórios foram preenchidos antes de "enviar" */

const formulario = document.getElementById('formEncomenda');

if (formulario) {
  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); /* Impede o envio real (site estático) */

    let formularioValido = true;

    /* --- Campo: nome --- */
    const campoNome  = document.getElementById('nome');
    const erroNome   = document.getElementById('erro-nome');
    const valorNome  = campoNome.value.trim();

    if (valorNome.length < 2) {
      exibirErro(campoNome, erroNome, 'Por favor, informe seu nome.');
      formularioValido = false;
    } else {
      limparErro(campoNome, erroNome);
    }

    /* --- Campo: whatsapp --- */
    const campoWhats  = document.getElementById('whatsapp');
    const erroWhats   = document.getElementById('erro-whatsapp');
    const valorWhats  = campoWhats.value.trim();
    /* Aceita formatos com ou sem máscara, mínimo 10 dígitos */
    const apenasDigitos = valorWhats.replace(/\D/g, '');

    if (apenasDigitos.length < 10) {
      exibirErro(campoWhats, erroWhats, 'Informe um WhatsApp válido com DDD.');
      formularioValido = false;
    } else {
      limparErro(campoWhats, erroWhats);
    }

    /* --- Campo: produto --- */
    const campoProduto = document.getElementById('produto');
    const erroProduto  = document.getElementById('erro-produto');

    if (campoProduto.value === '') {
      exibirErro(campoProduto, erroProduto, 'Selecione o que deseja encomendar.');
      formularioValido = false;
    } else {
      limparErro(campoProduto, erroProduto);
    }

    /* --- Se tudo certo, exibe mensagem de sucesso --- */
    if (formularioValido) {
      const mensagemSucesso = document.getElementById('mensagem-sucesso');
      mensagemSucesso.hidden = false;
      formulario.reset();

      /* Rola suavemente até a mensagem de sucesso */
      mensagemSucesso.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      /* Oculta a mensagem depois de 6 segundos */
      setTimeout(function () {
        mensagemSucesso.hidden = true;
      }, 6000);
    }
  });
}

/* Funções auxiliares de validação */
function exibirErro(campo, elementoErro, mensagem) {
  campo.classList.add('erro');
  elementoErro.textContent = mensagem;
}

function limparErro(campo, elementoErro) {
  campo.classList.remove('erro');
  elementoErro.textContent = '';
}
