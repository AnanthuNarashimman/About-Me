console.log("JavaScript linked successfully!");

//code for closing the alertbox and initiating typewritr functionality

const alertbox = document.querySelector('.alertbox');
const donebtn = alertbox.querySelector('button');
const closebtn = alertbox.querySelector('.cbtn');

donebtn.addEventListener('click', function() {
    alertbox.style.display = 'none';
    typewriter();
    const element = document.documentElement; 
    if (element.requestFullscreen) {
        element.requestFullscreen(); 
    } else if (element.webkitRequestFullscreen) { 
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else {
        alert("Fullscreen mode is not supported on this browser.");
    }
})

closebtn.addEventListener('click', function() {
    alertbox.style.display = 'none';
    typewriter();
})


//code for typewriter functionality

const nameText = "Hello! I am Ananthu Narashimman";
const descriptionText = "Interested in the tech I know? Keep scrolling for the specs!"
i=0;
index=0;


function typewriter() {
    const nameArea = document.querySelector('#typewriter-text');
    const descriptionArea = document.querySelector('.typewriter-description');
    const namecursor = document.querySelector('.typewriter h1');
    const desccursor = document.querySelector('.typewriter p');
    const slidebtn = document.querySelector('.sdown');
    
    
    if(i < nameText.length) {
        namecursor.style.borderColor = 'white';
        nameArea.innerHTML+=nameText[i];
        i++;
        setTimeout(() => {
            namecursor.style.borderColor = "transparent";
            setTimeout(typewriter,75);  
        }, 75); 
    }

    else {
        desccursor.style.borderColor = 'white';
        if(index < descriptionText.length) {
            descriptionArea.innerHTML+=descriptionText[index];
            index++;
            setTimeout(() => {
                desccursor.style.borderColor = "transparent";
                setTimeout(typewriter,35);  
            }, 35); 
        } else {
            slidebtn.style.display = 'block';
        }

    }

    document.body.style.overflow = 'auto';
}



//code for academic specs sliding functionality

const schoolicon = document.querySelector('.schoolicon');
const generalicon = document.querySelector('.generalicon');
const collegeicon = document.querySelector('.collegeicon');

const position = document.querySelector('.pos');

schoolicon.addEventListener('click', function() {
    // console.log("School");
    position.style.transform = `translateX(0%)`;
})

collegeicon.addEventListener('click', function() {
    // console.log("College");
    position.style.transform = `translateX(-66.66%)`;
})

generalicon.addEventListener('click', function() {
    // console.log("General");
    position.style.transform = `translateX(-33.33%)`;
})

//code for highlighting clicked icon

const genicon = document.querySelector('.generalicon');
const sclion = document.querySelector('.schoolicon');
const colicon = document.querySelector('.collegeicon');

genicon.addEventListener('click', function() {
    genicon.classList.add('activeicon');
    sclion.classList.remove('activeicon');
    colicon.classList.remove('activeicon');
})

sclion.addEventListener('click', function() {
    sclion.classList.add('activeicon');
    genicon.classList.remove('activeicon');
    colicon.classList.remove('activeicon');
})

colicon.addEventListener('click', function() {
    colicon.classList.add('activeicon');
    genicon.classList.remove('activeicon');
    sclion.classList.remove('activeicon');
})