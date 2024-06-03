particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 90,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Summary
var i1 = 0;
var txt1 = 'Sumary 📁';
var speed1 = 50;

function typeWriter1() {
    if (i1 < txt1.length) {
        document.getElementById("Sumary").innerHTML += txt1.charAt(i1);
        i1++;
        setTimeout(typeWriter1, speed1);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriter1();
});

var i2 = 0;
var txt2 = 'SEBASTIAN MAURICIO GROGER GUTIERREZ';
var speed2 = 50;

function typeWriter2() {
    if (i2 < txt2.length) {
        document.getElementById("sebastian-sumary").innerHTML += txt2.charAt(i2);
        i2++;
        setTimeout(typeWriter2, speed2);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriter2();
});

var i3 = 0;
var txt3 = 'Motivated professional with a strong background in customer service and technical skills, aiming to leverage these strengths in dynamic roles. Proven in building positive relationships and driving projects to success.';
var speed3 = 30;

function typeWriter3() {
    if (i3 < txt3.length) {
        document.getElementById("sebastian-sumary-sum").innerHTML += txt3.charAt(i3);
        i3++;
        setTimeout(typeWriter3, speed3);
    } else {
        displayContactInfo();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriter3();
});

function displayContactInfo() {
    var contactInfo = [
        'Acapuclo Guerrero, Mexico',
        '52+(744) 505-5734',
        'Sebastian_Mou@protonmail.com'
    ];

    var ul = document.getElementById("contact-info");

    contactInfo.forEach(function(info) {
        var li = document.createElement("li");
        li.textContent = info;
        ul.appendChild(li);
    });
}

// Education
       
var i5 = 0;
var txt5 = 'Education 🎒';
var speed5 = 50;

function typeWriter5() {
    if (i5 < txt5.length) {
        document.getElementById("Education").innerHTML += txt5.charAt(i5);
        i5++;
        setTimeout(typeWriter5, speed5);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriter5();
});

var i6 = 0;
var txt6 = 'DEGREE IN COMPUTER SYSTEMS ENGINEERING 👨‍🎓\n ⌛ 2019 - 2023\nUniversidad Hipócrates, Acapulco, Mexico\n\nFocused on developing analytical and technical skills, adaptable to various professional environments.';
var speed6 = 30;

function typeWriter6() {
    if (i6 < txt6.length) {
        if (txt6.charAt(i6) === '\n') {
            document.getElementById("degree-title").innerHTML += '<br>';
        } else {
            document.getElementById("degree-title").innerHTML += txt6.charAt(i6);
        }
        i6++;
        setTimeout(typeWriter6, speed6);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriter6();
});

var i7 = 0;
var txt7 = 'HIGH SCHOOL DIPLOMA 👨‍🏫 \n ⌛ 2017\nSecretariat of Public Education, Mexico';
var speed7 = 30;

function typeWriter7() {
    if (i7 < txt7.length) {
        if (txt7.charAt(i7) === '\n') {
            document.getElementById("highschool-title").innerHTML += '<br>';
        } else {
            document.getElementById("highschool-title").innerHTML += txt7.charAt(i7);
        }
        i7++;
        setTimeout(typeWriter7, speed7);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriter7();
});

var i8 = 0;
var txt8 = 'Professional Experience 👔';
var speed8 = 50;

function typeWriter8() {
    if (i8 < txt8.length) {
        document.getElementById("ProfessionalExperience").innerHTML += txt8.charAt(i8);
        i8++;
        setTimeout(typeWriter8, speed8);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriter8();
});

var i9 = 0;
var txt9 = 'MANAGEMENT ASSISTANT ⚙️ \n ⌛ Jan 2021 - Dec 2023\nPROFECO (Mexican Government Agency)';
var speed9 = 30;

function typeWriter9() {
    if (i9 < txt9.length) {
        if (txt9.charAt(i9) === '\n') {
            document.getElementById("management-title").innerHTML += '<br>';
        } else {
            document.getElementById("management-title").innerHTML += txt9.charAt(i9);
        }
        i9++;
        setTimeout(typeWriter9, speed9);
    } else {
        displayManagementDetails();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriter9();
});

function displayManagementDetails() {
    var managementDetails = [
        'Supported office operations and customer service, handling inquiries and providing information.',
        'Managed documentation and administrative tasks, showcasing organizational and time management skills.'
    ];

    var ul = document.getElementById("management-details");

    managementDetails.forEach(function(detail) {
        var li = document.createElement("li");
        li.textContent = detail;
        ul.appendChild(li);
    });
}

var i10 = 0;
var txt10 = 'FRONT DESK ASSOCIATE 🛎️ \n ⌛ Feb 2018 - Jan 2020\nVillas Bahia Dorada (Hotel Business)';
var speed10 = 30;

function typeWriter10() {
    if (i10 < txt10.length) {
        if (txt10.charAt(i10) === '\n') {
            document.getElementById("frontdesk-title").innerHTML += '<br>';
        } else {
            document.getElementById("frontdesk-title").innerHTML += txt10.charAt(i10);
        }
        i10++;
        setTimeout(typeWriter10, speed10);
    } else {
        displayFrontDeskDetails();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriter10();
});

function displayFrontDeskDetails() {
    var frontDeskDetails = [
        'Delivered exceptional customer service, creating a welcoming environment for guests.',
        'Quickly addressed and resolved guest inquiries, demonstrating problem-solving and interpersonal skills.',
        'Assisted in promotional activities and events, contributing to an increase in guest satisfaction and repeat visits.'
    ];

    var ul = document.getElementById("frontdesk-details");

    frontDeskDetails.forEach(function(detail) {
        var li = document.createElement("li");
        li.textContent = detail;
        ul.appendChild(li);
    });
}

var iName = 0;
var nameText = 'Sebastian Mauricio Groger Gutierrez';
var speedName = 10;

function typeWriterName() {
    if (iName < nameText.length) {
        document.getElementById("sebas").innerHTML += nameText.charAt(iName);
        iName++;
        setTimeout(typeWriterName, speedName);
    } else {
        typeWriterDescription();
    }
}

var iDescription = 0;
var descriptionText = "I'm Sebastian Mauricio, a Full Stack Developer from Acapulco, Guerrero. I hold a degree in Systems Engineering and specialize in Python and Django for back-end development. For front-end work, I rely on HTML, CSS, JavaScript, Bootstrap, Ajax, and jQuery to make dynamic web pages.\nI’m passionate about building engaging web apps that provide intuitive user experiences. Always learning, I'm driven to stay current with the latest in tech to continue delivering innovative solutions.";
var speedDescription = 10;

function typeWriterDescription() {
    if (iDescription < descriptionText.length) {
        if (descriptionText.charAt(iDescription) === '\n') {
            document.getElementById("sebas_dis").innerHTML += '<br><br>';
        } else {
            document.getElementById("sebas_dis").innerHTML += descriptionText.charAt(iDescription);
        }
        iDescription++;
        setTimeout(typeWriterDescription, speedDescription);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriterName();
});

var iProjectsBackend = 0;
var projectsBackendText = 'Projects: Backend 🗄️';
var speedProjectsBackend = 50;

function typeWriterProjectsBackend() {
    if (iProjectsBackend < projectsBackendText.length) {
        document.getElementById("ProjectsBackend").innerHTML += projectsBackendText.charAt(iProjectsBackend);
        iProjectsBackend++;
        setTimeout(typeWriterProjectsBackend, speedProjectsBackend);
    } else {
        typeWriterEnsocioTitle();
    }
}

var iEnsocioTitle = 0;
var ensocioTitleText = 'Ensocio.mx 🌐';
var speedEnsocioTitle = 50;

function typeWriterEnsocioTitle() {
    if (iEnsocioTitle < ensocioTitleText.length) {
        document.getElementById("ensocio-title").innerHTML += ensocioTitleText.charAt(iEnsocioTitle);
        iEnsocioTitle++;
        setTimeout(typeWriterEnsocioTitle, speedEnsocioTitle);
    } else {
        displayEnsocioDetails();
    }
}

function displayEnsocioDetails() {
    var ensocioDetails = [
        'Ensocio.mx is a versatile freelancing platform designed to surpass Fiverr and Upwork.',
        'Built with Django, Python3, Bootstrap 5, Stripe, and AJAX.',
        'Features user profiles, messaging, offers, posts, and robust admin tools.'
    ];

    var ul = document.getElementById("ensocio-details");

    ensocioDetails.forEach(function(detail) {
        var li = document.createElement("li");
        li.textContent = detail;
        ul.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriterProjectsBackend();
});

var iHiddenDialogsTitle = 0;
var hiddenDialogsTitleText = 'Hidden Dialogs 🌐';
var speedHiddenDialogsTitle = 50;

function typeWriterHiddenDialogsTitle() {
    if (iHiddenDialogsTitle < hiddenDialogsTitleText.length) {
        document.getElementById("HiddenDialogs-title").innerHTML += hiddenDialogsTitleText.charAt(iHiddenDialogsTitle);
        iHiddenDialogsTitle++;
        setTimeout(typeWriterHiddenDialogsTitle, speedHiddenDialogsTitle);
    } else {
        displayHiddenDialogsDetails();
    }
}

function displayHiddenDialogsDetails() {
    var hiddenDialogsDetails = [
        'Hidden Dialogs is an interactive chatting web application that connects people seamlessly.',
        'Built with Django, Bootstrap 5, HTML, CSS, JavaScript, and AJAX.',
        'This app allows users to engage in real-time conversations and share files efficiently.'
    ];

    var ul = document.getElementById("HiddenDialogs-details");

    hiddenDialogsDetails.forEach(function(detail) {
        var li = document.createElement("li");
        li.textContent = detail;
        ul.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriterHiddenDialogsTitle();
});

var iWWINSTitle = 0;
var wwinsTitleText = 'WWINS 🌐';
var speedWWINSTitle = 50;

function typeWriterWWINSTitle() {
    if (iWWINSTitle < wwinsTitleText.length) {
        document.getElementById("wwins-title").innerHTML += wwinsTitleText.charAt(iWWINSTitle);
        iWWINSTitle++;
        setTimeout(typeWriterWWINSTitle, speedWWINSTitle);
    } else {
        displayWWINSDetails();
    }
}

function displayWWINSDetails() {
    var wwinsDetails = [
        'WWINS is a social media platform built with Django, Bootstrap 5, HTML, and CSS, inspired by Reddit. It fosters self-development and learning.',
        'Users create profiles, share posts in learning categories, and engage with a growth-focused community.',
        'The platform emphasizes user interaction and goal achievement, allowing members to set goals, track progress, and collaborate.',
        'With its responsive design, WWINS ensures an engaging and productive online environment.',
    ];

    var ul = document.getElementById("wwins-details");

    wwinsDetails.forEach(function(detail) {
        var li = document.createElement("li");
        li.textContent = detail;
        ul.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriterWWINSTitle();
});

var iProjectsFront = 0;
var projectsFrontText = 'Projects: Frontend 🖼️';
var speedProjectsFront = 50;

function typeWriterProjectsFront() {
    if (iProjectsFront < projectsFrontText.length) {
        document.getElementById("ProjectsFront").innerHTML += projectsFrontText.charAt(iProjectsFront);
        iProjectsFront++;
        setTimeout(typeWriterProjectsFront, speedProjectsFront);
    } else {
        typeWriterAngelTitle();
    }
}

var iAngelTitle = 0;
var angelTitleText = 'Angelica\'s Shop 🌐';
var speedAngelTitle = 50;

function typeWriterAngelTitle() {
    if (iAngelTitle < angelTitleText.length) {
        document.getElementById("angel-title").innerHTML += angelTitleText.charAt(iAngelTitle);
        iAngelTitle++;
        setTimeout(typeWriterAngelTitle, speedAngelTitle);
    } else {
        displayAngelDetails();
    }
}

function displayAngelDetails() {
    var angelDetails = [
        'Welcome to a detailed breakdown of "Angelica\'s Shop," a project where my front-end web development skills come to life through an elegantly designed clothing brand shop.',
        'This project illustrates my capabilities in HTML, CSS, and JavaScript, tailored to create an optimal shopping experience.'
    ];

    var ul = document.getElementById("angel-details");

    angelDetails.forEach(function(detail) {
        var li = document.createElement("li");
        li.textContent = detail;
        ul.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriterProjectsFront();
});

var iTaskologyTitle = 0;
var taskologyTitleText = 'Taskology 🌐';
var speedTaskologyTitle = 50;

function typeWriterTaskologyTitle() {
    if (iTaskologyTitle < taskologyTitleText.length) {
        document.getElementById("taskology-title").innerHTML += taskologyTitleText.charAt(iTaskologyTitle);
        iTaskologyTitle++;
        setTimeout(typeWriterTaskologyTitle, speedTaskologyTitle);
    } else {
        displayTaskologyDetails();
    }
}

function displayTaskologyDetails() {
    var taskologyDetails = [
        'It\'s coming soon! 🚀✨'
    ];

    var ul = document.getElementById("taskology-details");

    taskologyDetails.forEach(function(detail) {
        var li = document.createElement("li");
        li.textContent = detail;
        ul.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriterTaskologyTitle();
});