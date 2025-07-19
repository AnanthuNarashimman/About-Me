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

let currentIndex = 0;
const visibleCount = 1;
let itemSlider = document.querySelectorAll('.carousel .list .item');
let totalItems = itemSlider.length;

// Slide indicator and progress bar
const slideIndicator = document.querySelector('.slide-indicator');
const progressBar = document.querySelector('.slide-progress-bar-inner');
const pauseBtn = document.querySelector('.pause-btn');
let autoAdvance = true;
let progress = 0;
let progressInterval = null;
let autoNextTimeout = null;

function updateCarousel() {
    // Show only the current main item
    itemSlider.forEach((item, idx) => {
        item.style.opacity = idx === currentIndex ? '1' : '0';
        item.style.zIndex = idx === currentIndex ? '2' : '1';
        item.style.pointerEvents = idx === currentIndex ? 'auto' : 'none';
    });
    // Update slide indicator
    if (slideIndicator) {
        slideIndicator.textContent = `${currentIndex + 1}/${totalItems}`;
    }
    // Reset progress bar
    if (progressBar) {
        progressBar.style.width = '0%';
    }
}

function goToSlide(idx) {
    currentIndex = idx;
    if (currentIndex < 0) currentIndex = totalItems - 1;
    if (currentIndex >= totalItems) currentIndex = 0;
    updateCarousel();
    resetProgressBar();
}

function nextSlide() {
    goToSlide(currentIndex + 1);
}
function prevSlide() {
    goToSlide(currentIndex - 1);
}

nextDom.onclick = function() {
    nextSlide();
}
prevDom.onclick = function() {
    prevSlide();
}

function resetProgressBar() {
    if (progressInterval) clearInterval(progressInterval);
    if (autoNextTimeout) clearTimeout(autoNextTimeout);
    progress = 0;
    if (progressBar) progressBar.style.width = '0%';
    if (autoAdvance) {
        progressInterval = setInterval(() => {
            progress += 100 / (10 * 10); // 10 seconds, update every 100ms
            if (progressBar) progressBar.style.width = `${progress}%`;
            if (progress >= 100) {
                clearInterval(progressInterval);
                nextSlide();
            }
        }, 100);
    }
}

if (pauseBtn) {
    pauseBtn.onclick = function() {
        autoAdvance = !autoAdvance;
        if (autoAdvance) {
            pauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            resetProgressBar();
        } else {
            pauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
            if (progressInterval) clearInterval(progressInterval);
        }
    }
}

// Start auto-advance
resetProgressBar();

// Thumbnail click jumps to that slide
// thumbnailItems.forEach((thumb, idx) => {
//     thumb.onclick = function() {
//         currentIndex = idx;
//         updateCarousel();
//     }
// });
// Initialize position
updateCarousel();


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

// Mobile skillset matrix modal logic
const mobSkillData = {
    web: {
        title: 'Basic Frontend',
        img: 'Images/Web.png',
        description: 'Expert in HTML & CSS: Responsive design with flexbox, grid, media queries, semantic HTML, and accessible UI.',
        experience: 'Developed static and dynamic websites, translating Figma designs into fully functional web interfaces.'
    },
    js: {
        title: 'Dynamic Frontend',
        img: 'Images/JSImage.png',
        description: 'Skilled in JavaScript ES6+ (e.g., async/await, DOM manipulation) and React.js for dynamic, component-based UIs with state management.',
        experience: 'Developed an editable To-Do app using JavaScript and React, and built a Pokémon site displaying images via API integration and other small projects.'
    },
    python: {
        title: 'Backend (Python)',
        img: 'Images/Backend.png',
        description: 'Intermediate Python knowledge, covering file handling, data structures, OOP, and Flask for building APIs and server-side rendering.',
        experience: 'Developed backend logic for dynamic websites with Flask, including secure user authentication and efficient data handling.'
    },
    db: {
        title: 'SQL Databases',
        img: 'Images/DataBase.png',
        description: 'Experienced in database design, normalization, and query optimization, with expertise in secure user authentication and credential management using MySQL.',
        experience: 'Developed user authentication and data handling features with Flask, ensuring secure and efficient application data transfer.'
    },
    node: {
        title: 'Backend (Node)',
        img: 'Images/Node.png',
        description: 'Intermediate understanding of Node.js and event-driven architecture. Skilled in Express.js for building RESTful APIs and server-side apps.',
        experience: 'Developed backend logic for real-time and dynamic web services. Built authentication systems and RESTful APIs using Node.js, Express, and JWT for a contest app.'
    },
    firebase: {
        title: 'Firebase',
        img: 'Images/FireBase.png',
        description: 'Proficient in Firebase Authentication and Firestore database. Experienced in integrating Firebase with backend frameworks.',
        experience: 'Integrated Firebase Authentication in full-stack apps using Flask and Node.js. Implemented secure auth flows, session management, and real-time sync.'
    }
};

const mobTiles = document.querySelectorAll('.mobskilltile');
const mobModal = document.getElementById('mobskillmodal');
const mobModalBody = mobModal ? mobModal.querySelector('.mobskillmodal-body') : null;
const mobModalClose = mobModal ? mobModal.querySelector('.mobskillmodal-close') : null;

mobTiles.forEach(tile => {
    tile.addEventListener('click', function() {
        const skill = tile.getAttribute('data-skill');
        const data = mobSkillData[skill];
        if (data && mobModal && mobModalBody) {
            mobModalBody.innerHTML = `
                <img src="${data.img}" alt="${data.title}" style="width:60px;height:60px;display:block;margin:0 auto 10px auto;">
                <h1>${data.title}</h1>
                <h3>Description</h3>
                <p>${data.description}</p>
                <h3>Practical Experience</h3>
                <p>${data.experience}</p>
            `;
            mobModal.style.display = 'flex';
        }
    });
});
if (mobModal && mobModalClose) {
    mobModalClose.onclick = function() {
        mobModal.style.display = 'none';
    };
    mobModal.onclick = function(e) {
        if (e.target === mobModal) mobModal.style.display = 'none';
    };
}


