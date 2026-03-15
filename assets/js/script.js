$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->

    // <!-- emailjs to mail contact form data -->

});

// Add this to your script.js file
$(document).ready(function() {
    // Initialize EmailJS
    emailjs.init("zmrxviDfhmp533F0y");

    // Form submission handler
    $("#contact-form").submit(function(event) {
        event.preventDefault();
        
        // Get form data
        const form = document.getElementById('contact-form');
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';
        
        // Send email
        emailjs.sendForm('service_jze9mte', 'template_dz5x2gm', form)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                form.reset();
                showNotification('Message sent successfully!', 'success');
            })
            .catch(function(error) {
                console.error('FAILED...', error);
                showNotification('Failed to send message. Please try again.', 'error');
            })
            .finally(function() {
                // Reset button state
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            });
    });
});

// Notification function
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Notification function

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Full-Stack Development","Open Source", "DevOps","Generative AI","Agentic AI","System Design"],
    loop: true,
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0,6).forEach(project => {
        const techHTML = project.tech
            ? project.tech.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')
            : '';
        projectHTML += `
        <div class="box">
          <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="${project.name}" />
          <div class="content">
            <div class="tag">
              <h3>${project.name}</h3>
              <a href="${project.links.view}" target="_blank" style="color:var(--primary);font-size:1.4rem;" aria-label="Open project">
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
            <div class="desc">
              <p>${project.desc}</p>
              <div class="tech-tags">${techHTML}</div>
              <div class="btns">
                <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> Live Demo</a>
                <a href="${project.links.code}" class="btn" target="_blank">Source <i class="fas fa-code"></i></a>
              </div>
            </div>
          </div>
        </div>`;
    });

    projectsContainer.innerHTML = projectHTML;


}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// tilt on about image
VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 8 });


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode


// Start of Tawk.to Live Chat
// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () {
//     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     s0.parentNode.insertBefore(s1, s0);
// })();
// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */

/* Hero & Metrics — repeat animation (above the fold, "welcome back" effect) */
const srRepeat = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 800,
    reset: true
});

srRepeat.reveal('.hero-content .availability-badge', { delay: 100 });
srRepeat.reveal('.hero-title', { delay: 150 });
srRepeat.reveal('.hero-sub', { delay: 200 });
srRepeat.reveal('.hero-desc', { delay: 250 });
srRepeat.reveal('.hero-btns', { delay: 300 });
srRepeat.reveal('.hero-socials', { delay: 350 });
srRepeat.reveal('.hero-card', { delay: 200, origin: 'right' });
srRepeat.reveal('.metric-card', { interval: 150 });

/* Everything below the fold — animate in once, stay visible */
const srOnce = ScrollReveal({
    origin: 'bottom',
    distance: '40px',
    duration: 700,
    reset: false
});

/* ABOUT */
srOnce.reveal('.about-image-wrap', { delay: 100, origin: 'left' });
srOnce.reveal('.about-content .about-tag-row', { delay: 100 });
srOnce.reveal('.about-name', { delay: 150 });
srOnce.reveal('.about-desc', { delay: 200 });
srOnce.reveal('.about-stats', { delay: 250 });

/* SKILLS */
srOnce.reveal('.skills-container', { delay: 100 });
srOnce.reveal('.skills-grid .bar', { interval: 50 });

/* PROJECTS */
srOnce.reveal('.work .box', { interval: 120 });
srOnce.reveal('.more-projects', { delay: 200 });

/* CONTACT */
srOnce.reveal('.contact-left', { delay: 100, origin: 'left' });
srOnce.reveal('.contact-right', { delay: 200, origin: 'right' });