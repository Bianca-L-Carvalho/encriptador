  // código criptografia

  var text = document.querySelector(".transformedText");
  var sentence = document.getElementById("encriptText");
  var encriptButton = document.querySelector(".encriptButton");
  var image = document.querySelector(".result-image");

  function encriptarFrase(frase) {
      let novaFrase = frase;

      // substituir cada letra com seu caractere codificado
      novaFrase = novaFrase.replace(/e/g, "enter"); // Substitui "e" por "enter"
      novaFrase = novaFrase.replace(/i/g, "imes");
      novaFrase = novaFrase.replace(/a/g, "ai");
      novaFrase = novaFrase.replace(/o/g, "ober");
      novaFrase = novaFrase.replace(/u/g, "ufat");

      return novaFrase;
  }

  encriptButton.addEventListener("click", function () {
      var transform = sentence.value;
      let fraseCodificada = encriptarFrase(transform);
      image.classList.add("d-none");
      text.classList.add("d-block");
      copyButton.classList.add("d-block");
      text.innerHTML = fraseCodificada;
  })



  // códigodescriptografia 

  var decriptButton = document.querySelector(".decriptButton");

  function decriptarPalavra(palavraCodificada) {
      let palavra = palavraCodificada;

      // substituir cada caractere codificado com sua letra original
      palavra = palavra.replace(/enter/g, "e");
      palavra = palavra.replace(/imes/g, "i");
      palavra = palavra.replace(/ai/g, "a");
      palavra = palavra.replace(/ober/g, "o");
      palavra = palavra.replace(/ufat/g, "u");

      return palavra;
  }

  decriptButton.addEventListener("click", function () {
      var transform = encriptText.value;
      let frasedescodificada = decriptarPalavra(transform);
      image.classList.add("d-none");
      text.classList.add("d-block");
      copyButton.classList.add("d-block");
      text.innerHTML = frasedescodificada;
  })

  function copiarTexto(elemento) {

      // Cria um novo range (intervalo de seleção de texto)
      const range = document.createRange();

      // Define o elemento que será selecionado pelo range
      range.selectNode(elemento);

      // Remove qualquer outra seleção de texto na página
      window.getSelection().removeAllRanges();

      // Adiciona o range ao conjunto de seleção de texto na página
      window.getSelection().addRange(range);

      // Executa o comando "copy" para copiar o texto selecionado
      document.execCommand("copy");

      // Remove a seleção de texto da página
      window.getSelection().removeAllRanges();
  }

  // botão copiar

  var copyButton = document.querySelector(".copyButton")
  copyButton.addEventListener("click", function () {
      let inputElement = document.querySelector(".transformedText");
      copiarTexto(inputElement);
      image.classList.remove("d-none");
      text.classList.remove("d-block");
      copyButton.classList.remove("d-block");
      sentence.value = "";
  })

