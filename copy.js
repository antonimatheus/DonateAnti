document.getElementById('copy').addEventListener('click', function() {
    var Copiado = document.getElementById('Copiado');
    Copiado.style.display = 'flex';

    // Selecionar o texto a ser copiado
    var textToCopy = document.getElementById('randomCode').textContent.trim();

    // Criar um elemento de área de transferência e atribuir o texto a ser copiado
    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;

    // Adicionar a área de transferência ao DOM
    document.body.appendChild(tempTextArea);

    // Selecionar e copiar o texto da área de transferência usando a API Clipboard
    tempTextArea.select();
    document.execCommand('copy');

    // Remover a área de transferência do DOM
    document.body.removeChild(tempTextArea);

    // Alerta indicando que o texto foi copiado (opcional)
    // Esconder o elemento Copiado após 5 segundos
    setTimeout(function() {
        Copiado.style.display = 'none';
    }, 5000); // 5000 milissegundos = 5 segundos
});
