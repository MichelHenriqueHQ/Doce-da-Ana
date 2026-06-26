# Doce da Ana

## Integrantes da dupla
- Michel Henrique 
- David Monteiro

## Descrição do caso escolhido
Site para Ana, confeiteira artesanal autônoma que trabalha sob encomenda na Ceilândia (DF). Ana não possuía nenhuma presença digital estruturada — divulgava seus produtos apenas por indicação e conversas informais no WhatsApp.

## Necessidade identificada
A ausência de um site dificultava que novos clientes conhecessem os produtos, os preços e a forma de fazer pedidos. Sem um canal organizado, muitas encomendas se perdiam por falta de informações claras sobre prazos, sabores e formas de pagamento.

## Público-alvo
Pessoas da Ceilândia e região que buscam bolos, brigadeiros e sobremesas artesanais para aniversários, eventos ou presentes. O público acessa principalmente pelo celular, então a responsividade mobile foi prioridade.

## Objetivo do site
A principal ação esperada do visitante é fazer uma encomenda — seja pelo formulário de contato ou pelo link do WhatsApp. Todas as seções conduzem a esse objetivo.

## Processo de desenvolvimento
1. Diagnóstico da necessidade real da confeiteira
2. Definição das seções necessárias (apresentação, sobre, cardápio, FAQ, contato)
3. Estruturação do HTML semântico
4. Criação da identidade visual com CSS (paleta rosa + marrom + creme)
5. Implementação da responsividade com media queries e Bootstrap grid
6. Desenvolvimento das funcionalidades em JavaScript
7. Testes em diferentes tamanhos de tela
8. Publicação no GitHub Pages

## Principais decisões do projeto
- **HTML semântico**: uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` para estrutura correta e acessível.
- **Visual**: paleta em tons de rosa, marrom e creme, coerente com o universo da confeitaria artesanal.
- **Responsividade**: combinação de Bootstrap grid com media queries próprias para garantir boa leitura em celulares.
- **Acessibilidade**: atributos `aria-expanded`, `aria-controls`, `aria-label`, `role="alert"` e `aria-live` nos elementos interativos; contraste adequado em todas as seções; navegação por teclado funcional.
- **Bootstrap**: usado na navbar responsiva, no sistema de grid das seções e em utilitários de espaçamento — sem substituir o CSS próprio.

## Funcionalidade em JavaScript
Foram implementadas três funcionalidades:

1. **FAQ accordion**: ao clicar em uma pergunta, a resposta aparece ou desaparece. Ao abrir uma nova pergunta, a anterior é fechada automaticamente. Atualiza `aria-expanded` para acessibilidade.

2. **Mostrar/ocultar sabores no cardápio**: cada card de produto tem um botão que revela ou esconde a lista de sabores disponíveis. O texto do botão muda entre "Ver sabores ▾" e "Ocultar sabores ▴" conforme o estado.

3. **Validação do formulário de encomenda**: ao submeter, verifica se nome (mínimo 2 caracteres), WhatsApp (mínimo 10 dígitos) e tipo de produto foram preenchidos. Exibe mensagens de erro específicas por campo e, quando tudo está correto, mostra uma mensagem de confirmação visual que desaparece após 6 segundos.

## Uso de Bootstrap
- `navbar` e `navbar-expand-lg`: menu responsivo que colapsa em mobile com botão hambúrguer.
- `container`: limita a largura do conteúdo e centraliza nas seções.
- `row` e `col-md-6 / col-lg-4 / col-lg-6`: grid responsivo nas seções de cardápio, sobre e contato.
- `text-center`, `ms-auto`, `mb-5`, `g-4`, `g-5`: utilitários de espaçamento e alinhamento.
- Justificativa: o Bootstrap simplificou a criação do menu mobile e do grid responsivo, sem substituir o CSS personalizado que define a identidade visual do site.

## Testes realizados
- Responsividade testada com DevTools do Chrome nas larguras: 375px (iPhone SE), 768px (iPad), 1024px e 1440px.
- Links internos testados (âncoras funcionando corretamente).
- Formulário testado com campos em branco, dados inválidos e dados válidos.
- FAQ e botões de sabores testados por clique e por teclado (Tab + Enter).
- Verificado que não há rolagem horizontal em nenhum tamanho de tela.
- Página publicada verificada fora do ambiente local.

## Links
- Link do repositório: https://github.com/MichelHenriqueHQ/Doce-da-Ana)
- Link do site publicado: https://michelhenriquehq.github.io/Doce-da-Ana/

## Contribuição dos integrantes
- David Monteiro: estrutura HTML, semântica e acessibilidade.
- Michel Henrique: CSS, responsividade e JavaScript.

