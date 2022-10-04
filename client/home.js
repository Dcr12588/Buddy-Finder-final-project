const baseURL = 'http://localhost:3000'

const viewForm = document.querySelector('displayAYB')
const submitButton = document.querySelector('displayAnimal')

const displayForm = (form) => {
    
    const form = document.createElement('section')
    form.classList.add('diplayForm')

    form.innerHTML = `
    <p id="yourName">${yourName.name}<p>
    <p id="zipcode">${zicode.description}<p>
    <p id="shelterName">${shelterName.name}<p
    <p id="animalType">${animalType.description}<p
    <p id="animalName">${animalName.name}<p
    `

    viewForm.appendChild(form)
    
}

const displayAYB = (arr) => {
    for(let i = 0; i < arr.length; i++){
        displayForm(arr[i])
    }
}