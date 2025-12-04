$(document).ready(function() {
    // Remove error styling on input
    $('input, select').on('input change', function() {
        $(this).removeClass('error');
        $(this).siblings('.error-message').text('');
    });

    // Form validation
    $('#registrationForm').on('submit', function(e) {
        let isValid = true;

        // Clear all previous errors
        $('.error-message').text('');
        $('input, select').removeClass('error');

        // Validate Full Name
        const fullName = $('#fullName').val().trim();
        if (fullName === '') {
            showError('#fullName', 'Full name is required');
            isValid = false;
        } else if (fullName.length < 3) {
            showError('#fullName', 'Name must be at least 3 characters');
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(fullName)) {
            showError('#fullName', 'Name should only contain letters');
            isValid = false;
        }

        // Validate USN
        const usn = $('#usn').val().trim();
        if (usn === '') {
            showError('#usn', 'USN number is required');
            isValid = false;
        } else if (usn.length < 5) {
            showError('#usn', 'USN must be at least 5 characters');
            isValid = false;
        }

        // Validate Department
        const department = $('#department').val();
        if (department === '') {
            showError('#department', 'Please select a department');
            isValid = false;
        }

        // Validate Year
        const year = $('#year').val();
        if (year === '') {
            showError('#year', 'Please select a year');
            isValid = false;
        }

        // Validate Section
        const section = $('#section').val();
        if (section === '') {
            showError('#section', 'Please select a section');
            isValid = false;
        }

        // Validate Phone Number
        const phone = $('#phone').val().trim();
        if (phone === '') {
            showError('#phone', 'Phone number is required');
            isValid = false;
        } else if (!/^[0-9]{10}$/.test(phone)) {
            showError('#phone', 'Phone number must be 10 digits');
            isValid = false;
        }

        // Validate Email
        const email = $('#email').val().trim();
        if (email === '') {
            showError('#email', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('#email', 'Please enter a valid email address');
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            e.preventDefault();
            
            // Scroll to first error
            $('html, body').animate({
                scrollTop: $('.error').first().offset().top - 100
            }, 500);
        } else {
            // Prevent default form submission
            e.preventDefault();
            
            // Store form data
            const formData = {
                fullName: fullName,
                usn: usn,
                department: department,
                year: year,
                section: section,
                phone: phone,
                email: email,
                referenceNumber: 'REG' + new Date().toISOString().slice(0,10).replace(/-/g,'') + Math.floor(Math.random() * 9000 + 1000),
                submissionDate: new Date().toLocaleString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric', 
                    hour: 'numeric', 
                    minute: 'numeric', 
                    hour12: true 
                })
            };
            
            // Store in sessionStorage
            sessionStorage.setItem('registrationData', JSON.stringify(formData));
            
            // Redirect to confirmation page
            window.location.href = 'confirmation.html';
        }
    });

    // Helper function to show error
    function showError(selector, message) {
        $(selector).addClass('error');
        $(selector).siblings('.error-message').text(message);
    }

    // Helper function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Real-time validation for phone (only numbers)
    $('#phone').on('keypress', function(e) {
        const charCode = e.which ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            e.preventDefault();
            return false;
        }
    });

    // Limit phone number to 10 digits
    $('#phone').on('input', function() {
        if ($(this).val().length > 10) {
            $(this).val($(this).val().slice(0, 10));
        }
    });

    // Add smooth animations on form reset
    $('.btn-reset').on('click', function() {
        setTimeout(function() {
            $('.error-message').text('');
            $('input, select').removeClass('error');
        }, 50);
    });
});
