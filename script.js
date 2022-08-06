/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */
var y, x, input, earnvalues, expenses, balance;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

// Describe this function...
function sum(y, x) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (expenses) {
    return;
  }
}


earnvalues = [0];
expenses = [0];
balance = [0, 0];


document.getElementById('dis').addEventListener('click', (event) => {
  input = getNumberOrString(document.getElementById('text').value);
  balance.unshift(input);
  if (input >= 0) {
    let element_list = document.getElementById('list');
    earnvalues.unshift(input);
    let new_li = document.createElement('li');
    new_li.innerText = input;

    element_list.appendChild(new_li);
    let element_earn = document.getElementById('earn');
    element_earn.innerText = earnvalues.reduce((a,b) => a+b, 0);
  } else if (input <= 0) {
    let element_liste = document.getElementById('liste');
    expenses.unshift(input);
    let new_li2 = document.createElement('li');
    new_li2.innerText = input;

    element_liste.appendChild(new_li2);
    let element_expen = document.getElementById('expen');
    element_expen.innerText = expenses.reduce((a,b) => a+b, 0);
  }

});
input;


document.getElementById('balance').addEventListener('click', (event) => {
  let element_total = document.getElementById('total');
  element_total.innerText = balance.reduce((a,b) => a+b, 0);

});
