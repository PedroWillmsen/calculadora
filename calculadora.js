// Função para adicionar um valor ao campo de entrada
function appendToDisplay(value) {
    // Obtém o elemento de entrada pelo id
    const display = document.getElementById('display');
    // Adiciona o valor ao campo de entrada
    display.value += value;
}

// Função para limpar o campo de entrada
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Função para calcular o resultado da expressão no campo de entrada
function calculate() {
    const display = document.getElementById('display');
    try {
        // Usa a função eval() para avaliar a expressão no campo de entrada e calcular o resultado
        const result = eval(display.value);
        // Exibe o resultado no campo de entrada
        display.value = result.toString();
    } catch (error) {
        // Se houver um erro ao calcular, exibe "Error" no campo de entrada
        display.value = 'Error';
    }
}