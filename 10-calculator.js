let calculation = localStorage.getItem('calculation') || '';
    document.querySelector('.result-calculate').innerHTML = calculation;

function updateCalculation(value) {
    calculation += value;
    document.querySelector('.result-calculate').innerHTML = calculation;
    localStorage.setItem('calculation', calculation);
    console.log(calculation)
}

function saveCalculation() {
    localStorage.setItem('calculation', calculation);
}
