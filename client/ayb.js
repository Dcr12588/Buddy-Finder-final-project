const baseURL = 'http://localhost:3000'

const showbuddyFinder = document.querySelector('#displayAYB')
const submitButton = document.querySelector('#newBuddy')

const displayBuddies = (arr) => {
    for(i = 0; i < arr.length; i++) {
        createBuddyCard(arr[i])
    }
} 

const createBuddyCard = (buddy) => {

    const displayCardadded = document.createElement('section')
    const buddyCard = document.createElement('section')

    displayCardadded.classList.add('displayCardadded')
    buddyCard.classList.add('buddy-card')


    buddyCard.innerHTML = `
        <img src=${buddy.picture} alt='dog image' id="added-pic"/>
        <p>${buddy.name}</p>
        <p>${buddy.age}</p>
        <p>${buddy.breed}</p>
        <p>${buddy.description}</p>
        <p>${buddy.shelter}</p>
        <section>
            <button onclick="updateadoptionProbability(${buddy.id}, 'noadoptionProbability')">-</button>
            Adoption Match: ${buddy.adoptionProbability}
            <button onclick="updateadoptionProbability(${buddy.id}, 'adoptionProbability')">+</button>
        </section>
        <button id="adoptionMatchDelete" onclick="deleteBuddy(${buddy.id})">delete</button>
        <br><br/>
        <br><br/>
        `
        displayCardadded.appendChild(buddyCard)

        showbuddyFinder.appendChild(displayCardadded)
}

const addBuddy = () => {
    showbuddyFinder.innerHTML= ''

    let nameInput = document.querySelector('#nameInput')
    let ageInput = document.querySelector('#ageInput')
    let pictureInput = document.querySelector('#pictureInput')
    let breedInput = document.querySelector('#breedInput') 
    let descriptionInput = document.querySelector('#descriptionInput') 
    let shelterInput = document.querySelector('#shelterInput') 

    let newBuddy = {
        name: nameInput.value,
        age: ageInput.value,
        picture: pictureInput.value,
        breed: breedInput.value,
        description: descriptionInput.value,
        shelter: shelterInput.value,
    }

    axios.post(`${baseURL}/addBuddy`, newBuddy)
        .then((res) => {
            showbuddyFinder.innerHTML = ''

            nameInput.value = ''
            ageInput.value = ''
            pictureInput.value = ''
            breedInput.value = ''
            descriptionInput.value = ''
            shelterInput.value = ''


            getaddedBuddies()
    })
}

const deleteBuddy =  (id) => {
    axios.delete(`${baseURL}/deleteBuddy/${id}`)
       .then((res) => {
            showbuddyFinder.innerHTML = ''
            getaddedBuddies()
        })
       .catch((err) => {
            console.log(err)
        })
}

const updateadoptionProbability = (id, type) => {
    axios.put(`${baseURL}/updateadoptionProbability/${id}`, {type})
        .then((res) => {
            showbuddyFinder.innerHTML = ''
                getaddedBuddies()
    })
}

const getaddedBuddies = () => {
    
    axios.get(`${baseURL}/getaddedBuddies`)
        .then((res) => {
            displayBuddies(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}


getaddedBuddies()
submitButton.addEventListener('click', addBuddy)