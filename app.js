console.log("JavaScript linked successfully!");

const width = window.innerWidth;

//code for checking whether the page reoloads or loads to display alert box and set body overflow accordingly

window.onload = function() {
    const pageloaded = sessionStorage.getItem('pageloaded');

    if(pageloaded) {
        alertbox.style.display = 'none';
        document.body.style.overflow = 'auto';
        if(width<=768) {
            const general = document.querySelector('.general');
            const mobgeneral = document.querySelector('.mobgeneral');
            general.style.display = 'none';
            mobgeneral.style.display = 'block';
        }
        typewriter();
    } else {
        alertbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

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

    sessionStorage.setItem('pageloaded', 'true');
})

closebtn.addEventListener('click', function() {
    alertbox.style.display = 'none';
    typewriter();

    sessionStorage.setItem('pageloaded', 'true');
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

// script for technical skills

let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');


prevDom.onclick = function() {
    showSlider('prev');
}
nextDom.onclick = function() {
    showSlider('next');
}

let timeRunning = 2000;
let runTimeOut;
let runAutoRun;
// let timeAutoNext = 7000;

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    },timeRunning)

    // clearTimeout(runAutoRun);
    // runAutoRun = setTimeout(() => {
    //     nextDom.click();
    // }, timeAutoNext);
}



// code for text appearance in interest zones

const interestImage = document.querySelectorAll('.interest-zone .izitem img');
const interestDes = document.querySelectorAll('.interest-zone .izitem h3');

interestImage.forEach((img, index) => {
    img.addEventListener('mouseover', () => {
      interestImage[index].style.opacity = '0.8';
      interestDes[index].style.opacity = '1';
      interestDes[index].style.transform = 'translateY(0)';
    });
  
    img.addEventListener('mouseleave', () => {
      interestImage[index].style.opacity = '1';
      interestDes[index].style.opacity = '0'; 
      interestDes[index].style.transform = 'translateY(50px)';
    });
  });

interestDes.forEach((h3, index) => {
    h3.addEventListener('mouseover', () => {
      interestImage[index].style.opacity = '0.8';  
      interestDes[index].style.opacity = '1';
      interestDes[index].style.transform = 'translateY(0)';
    });
  
    h3.addEventListener('mouseleave', () => {
      interestImage[index].style.opacity = '1';
      interestDes[index].style.opacity = '0'; 
      interestDes[index].style.transform = 'translateY(50px)';
    });
  });

// code for contact page sliding

const contactbtn = document.querySelector('.contact button');
const gobackbtn = document.querySelector('.contactCard button');
const contactcard = document.querySelector('.contactCard');


contactbtn.addEventListener('click', function() {
    contactcard.classList.toggle('active');
    contactbtn.classList.toggle('contactactive');
})

gobackbtn.addEventListener('click', function() {
    contactcard.classList.remove('active');
    contactbtn.classList.remove('contactactive');
})

window.addEventListener('click', function (e) {
    const contactcard = document.querySelector('.contactCard');
    const contactbtn = document.querySelector('.contactbtn');

    const hambtn = document.querySelector('.hambtn');
    const navitem = document.querySelector('.nav-items');
    const hamspan = document.querySelectorAll('.navbar .hambtn span');


    if (!e.target.closest('.contactCard') &&!e.target.classList.contains('contactbtn')
    ) {
        contactcard.classList.remove('active');
        contactbtn.classList.remove('contactactive');
    }

    if (
        !e.target.closest('.nav-items') && 
        !e.target.closest('.hambtn')
    ) {
        navitem.classList.remove('hamactive');
        hamspan.forEach((span) => {
            span.classList.remove('hambtnactive');
        });
    }
});


// code for hamburger buttn menu

const hambtn = document.querySelector('.hambtn');
const navitem = document.querySelector('.nav-items');
const hamspan = document.querySelectorAll('.navbar .hambtn span');

hambtn.addEventListener('click', function() {
    navitem.classList.toggle('hamactive');
    hamspan.forEach((span) => {
        span.classList.toggle('hambtnactive');
    })
    
})

// code for mobile version of general content

document.querySelector('.academicspecs .educontentarea .mobgeneral button').addEventListener('click', function () {
    const dots = document.getElementById('dots');
    const moreText = document.getElementById('remcontent');
    const content = document.querySelector('.educontentarea');
    const btn = this;

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        moreText.style.display = 'none';
        btn.textContent = 'Show More';
        content.style.height = '510px';
    } else {
        dots.style.display = 'none';
        moreText.style.display = 'inline';
        btn.textContent = 'Show Less';
        content.style.height = 'auto';
    }
});

// code for mobile version of technical skills

const leftbtn = document.querySelector('.leftbtn');
const rightbtn = document.querySelector('.rightbtn');
let curslide = 1;
let translatevalue;

rightbtn.addEventListener('click', function() {


    switch(curslide) {
        case 1:
            translatevalue = 25;
            curslide++;
            break;
        case 2:
            translatevalue = 50;
            curslide++;
            break;
        case 3:
            translatevalue = 75;
            curslide++;
            break;
        case 4:
            translatevalue = 0;
            curslide = 1;
            break;
        }

    


    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${translatevalue}%)`;
})

leftbtn.addEventListener('click', function() {


    switch(curslide) {
        case 1:
            translatevalue = 75;
            curslide=4;
            break;
        case 2:
            translatevalue = 0;
            curslide--;
            break;
        case 3:
            translatevalue = 25;
            curslide--;
            break;
        case 4:
            translatevalue = 50;
            curslide--;
            break;
        }

    


    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${translatevalue}%)`;
})

