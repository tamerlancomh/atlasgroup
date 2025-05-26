(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // Select elements
        const resumeInput = document.getElementById('app-resume');
        const overlay = document.querySelector('.resume-upload .file-overlay');
        const fileNameSpan = document.querySelector('.resume-upload .file-overlay .file-name');
        const cancelBtn = document.querySelector('.cancel-file');

        // When a file is chosen
        resumeInput.addEventListener('change', function() {
                const file = this.files[0];
                if (file) {
                    // Show overlay with filename
                    fileNameSpan.textContent = file.name;
                    overlay.classList.remove('d-none');
                    cancelBtn.classList.remove('d-none');
                } else {
                    // Reset if no file
                    overlay.classList.add('d-none');
                    cancelBtn.classList.add('d-none');
                }
        });

        // Cancel / remove file
        cancelBtn.addEventListener('click', function() {
                resumeInput.value = '';               // Clear input
                overlay.classList.add('d-none');      // Hide overlay
                cancelBtn.classList.add('d-none');    // Hide button
        });

   
        emailjs.init("PRUBtBWDZYkwRDN7c"); 
      
    

      document.getElementById('application-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submit
      
        // Get form field values
        const fullname = document.getElementById('app-fullname').value;
        const email = document.getElementById('app-email').value;
        const phone = document.getElementById('app-phone').value;
        const address = document.getElementById('app-address').value;
        const position = document.getElementById('app-position').value;
        const experience = document.getElementById('app-experience').value;
        const resume = document.getElementById('app-resume').files[0]?.name || "No file attached";
      
        // Prepare template parameters
        const templateParams = {
          fullname: fullname,
          email: email,
          phone: phone,
          address: address,
          position: position,
          experience: experience,
          resume: resume
        };
      
        // Send email using EmailJS
        emailjs.send('service_cw91b86', 'template_trt3ted', templateParams)
          .then(function(response) {
            alert('Application submitted successfully!');
            document.getElementById('application-form').reset(); // Clear form
          }, function(error) {
            alert('FAILED to send application. Please try again.');
            console.error('EmailJS Error:', error);
          });
      });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

