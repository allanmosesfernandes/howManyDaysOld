const button = document.querySelector('.findAge');
const currentDate = new Date().getTime();
const dob = document.querySelector('#dob');

///use this below so no one can enter date beyond todays date
const dateValidation = new Date().toISOString().split('T')[0]; 
dob.setAttribute('max', dateValidation);


//to display user result
const changeText = document.querySelector('.result');

button.addEventListener('click', () => {
    if(dob.value.length == 0) {
        alert('Please enter a date');//check if date is empty
    }
    else {
        let selectedDate = dob.value;
        let date1 = new Date(selectedDate).getTime();
        let diff = currentDate - date1;
        let msinDay = 1000 * 3600 * 24;
        let result = Math.floor((diff / msinDay));
        changeText.innerHTML = `${result}`
    }
})