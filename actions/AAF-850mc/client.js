function(properties, context) {

    // Encontra o elemento pelo ID fornecido nas propriedades
    var inputElement = document.getElementById(properties.id_attribute);
    
    // Verifica se o elemento existe para evitar erros
    if(inputElement) {
        // Define o valor do campo para uma string vazia, que representa "nulo" para inputs
        inputElement.value = '';
    } else {
        console.log("Elemento não encontrado com o ID: " + properties.id_attribute);
    }
}