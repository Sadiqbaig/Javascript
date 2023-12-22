let form = document.querySelector('form');
// console.log(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter Valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter Valid weight ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // result.innerHTML = `Your BMI is ${bmi}`
        if (bmi<=18.6) {
            result.innerHTML = `Your BMI is ${bmi} and it is Under Weight`
        }
        if (bmi > 18.6 && bmi < 24.9) {
            result.innerHTML = `Your BMI is ${bmi} and it is Normal`
        }
        if (bmi > 24.9) {
            result.innerHTML = `Your BMI is ${bmi} and it is Over Weight`
        }
    }
})

