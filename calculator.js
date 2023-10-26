//***Interface 1
    // Get HTML elements by their IDs
    const num1Input = document.getElementById('num1_T1');
    const num2Input = document.getElementById('num2_T1');
    const operatorSelect = document.getElementById('operator_T1');
    const calculateButton = document.getElementById('calculate_T1');
    const resultDiv_T1 = document.getElementById('result_T1');

    // Event listener for the calculate button
    calculateButton.addEventListener('click', () => {
        const num1_T1 = parseFloat(num1Input.value);
        const num2_T1 = parseFloat(num2Input.value);
        const operator_T1 = operatorSelect.value;

        let result_T1;

        switch (operator_T1) {
            case '+':
                result_T1 = num1_T1 + num2_T1;
                break;
            case '-':
                result_T1 = num1_T1 - num2_T1;
                break;
            case '*':
                result_T1 = num1_T1 * num2_T1;
                break;
            case '/':
                result_T1 = num1_T1 / num2_T1;
                break;
            default:
                result_T1 = 'Invalid operator';
        }

        resultDiv_T1.textContent = `Result = ${result_T1}`;
    });

//***Interface 2
    // Get HTML elements by their IDs
    const num1Input_T2 = document.getElementById('num1_T2');
    const num2Input_T2 = document.getElementById('num2_T2');
    const calculateButton_T2 = document.getElementById('calculate_T2');
    const resultDiv_T2 = document.getElementById('result_T2');
    const operatorRadios_T2 = document.querySelectorAll('input[type="radio"]');

    // Event listener for the calculate button
    calculateButton_T2.addEventListener('click', () => {
        const num1_T2 = parseFloat(num1Input_T2.value);
        const num2_T2 = parseFloat(num2Input_T2.value);
        let operator_T2;

        // Find the selected operator
        operatorRadios_T2.forEach(radio => {
            if (radio.checked) {
                operator_T2 = radio.value;
            }
        });

        let result_T2;

        switch (operator_T2) {
            case '+':
                result_T2 = num1_T2 + num2_T2;
                break;
            case '-':
                result_T2 = num1_T2 - num2_T2;
                break;
            case '*':
                result_T2 = num1_T2 * num2_T2;
                break;
            case '/':
                result_T2 = num1_T2 / num2_T2;
                break;
            default:
                result_T2 = 'Invalid operator';
        }

        resultDiv_T2.textContent = `Result = ${result_T2}`;
    });


//***Interface 3

    // Get HTML elements by their IDs
    const num1Input_T3 = document.getElementById('num1_T3');
    const num2Input_T3 = document.getElementById('num2_T3');
    const operatorSelect_T3 = document.getElementById('operator_T3');
    const decrement1Button = document.getElementById('decrement1');
    const increment1Button = document.getElementById('increment1');
    const decrement2Button = document.getElementById('decrement2');
    const increment2Button = document.getElementById('increment2');
    const calculateButton_T3 = document.getElementById('calculate_T3');
    const resultDiv_T3 = document.getElementById('result_T3');

    // Event listener for num1 input
    num1Input_T3.addEventListener('input', () => {
    num1_T3 = parseFloat(num1Input_T3.value);
    });
    num2Input_T3.addEventListener('input', () => {
    num2_T3 = parseFloat(num2Input_T3.value);
    });

    // Event listeners for increment and decrement buttons
    decrement1Button.addEventListener('click', () => {
        num1_T3--;
        num1Input_T3.value = num1_T3;
    });

    increment1Button.addEventListener('click', () => {
        num1_T3++;
        num1Input_T3.value = num1_T3;
    });

    decrement2Button.addEventListener('click', () => {
        num2_T3--;
        num2Input_T3.value = num2_T3;
    });

    increment2Button.addEventListener('click', () => {
        num2_T3++;
        num2Input_T3.value = num2_T3;
    });

    // Event listener for the calculate button
    calculateButton_T3.addEventListener('click', () => {
        const operator_T3 = operatorSelect_T3.value;

        let result_T3;

        switch (operator_T3) {
            case '+':
                result_T3 = num1_T3 + num2_T3;
                break;
            case '-':
                result_T3 = num1_T3 - num2_T3;
                break;
            case '*':
                result_T3 = num1_T3 * num2_T3;
                break;
            case '/':
                result_T3 = num1_T3 / num2_T3;
                break;
            default:
                result_T3 = 'Invalid operator';
        }

        resultDiv_T3.textContent = `Result = ${result_T3}`;
    });

