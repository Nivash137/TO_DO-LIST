

document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.input-box');
    const buttons = document.querySelectorAll('.container button');

    let expression = '';

    const operators = ['+', '-', '*', '/', '%'];

    const updateDisplay = () => {
        display.value = expression || '0';
    };

    const isOperator = (char) => operators.includes(char);

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent.trim();

          
            if (value === 'AC') {
                expression = '';
                updateDisplay();
                return;
            }

            
            if (value === 'DEL') {
                expression = expression.slice(0, -1);
                updateDisplay();
                return;
            }

            if (value === '=') {
                try {
                    if (isOperator(expression.slice(-1))) return;
                    expression = eval(expression).toString();
                    updateDisplay();
                } catch {
                    expression = '';
                    display.value = 'Error';
                }
                return;
            }

            
            if (isOperator(value) && isOperator(expression.slice(-1))) {
                return;
            }

            expression += value;
            updateDisplay();
            
        });
    });
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(() => console.log('Service Worker Registered'));
}



