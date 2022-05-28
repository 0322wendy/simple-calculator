// Function that displays on screen
/*
function display(result) {
    document.getElementById('display').innerHTML = result;
}

display(8008135);

*/

const calculate = (n1, operator, n2) => {
    let result = ''
    
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2)
    }
    
    return result
  }

const calculator = document.querySelector('.container');
const keys = document.querySelector('.container');
const display = document.querySelector('.display');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        let displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        if (!action) {
            //console.log('number key');
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
              } else {
                display.textContent = displayedNum + keyContent;
              }
            calculator.dataset.previousKey = 'number';
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {
            //console.log('operator key!');
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            if (
                firstValue &&
                operator &&
                previousKeyType !== 'operator'
            ) {
            const calcValue = calculate(firstValue, operator, secondValue)
            display.textContent = calcValue
  
            // Update calculated value as firstValue
            calculator.dataset.firstValue = calcValue
            } else {
                // If there are no calculations, set displayedNum as the firstValue
                calculator.dataset.firstValue = displayedNum
            }

            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.operator = action

        }

        if (action === 'percent') {
            //console.log('percent button!');
            display.textContent = displayedNum / 100;
            calculator.dataset.previousKey = 'percent';
        }

        if (action === 'sqroot') {
            //console.log('square root button!');
            display.textContent = Math.sqrt(displayedNum);
            calculator.dataset.previousKey = 'sqroot';
        }

        if (action === 'plusminus') {
            //console.log('plusminus key!');
            if (displayedNum >= 0) {
                displayedNum = -Math.abs(displayedNum);
                display.textContent = displayedNum;
            }
            else {
                display.textContent = Math.abs(displayedNum);
            }
        }

        if (action === 'decimal') {
            //console.log('decimal key!');
            // Do nothing if string has a dot
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            } else if (previousKeyType === 'operator') {
                display.textContent = '0.'
            }
            calculator.dataset.previousKey = 'decimal';
          }
          
        if (action === 'clear') {
            //console.log('clear key!');
            if (key.textContent === 'AC') {
                calculator.dataset.firstValue = ''
                calculator.dataset.modValue = ''
                calculator.dataset.operator = ''
                calculator.dataset.previousKeyType = ''
              } else {
                key.textContent = 'AC'
              }
              
              display.textContent = 0
              calculator.dataset.previousKeyType = 'clear'
          }
          
        if (action === 'calculate') {
            //console.log('equal key!');
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum
  
            if (firstValue) {
                display.textContent = calculate(firstValue, operator, secondValue)
            }
  
            calculator.dataset.previousKeyType = 'calculate'
          }

        // Remove .is-depressed class from all keys
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))
    }
})