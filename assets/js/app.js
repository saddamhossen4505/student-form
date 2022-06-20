// Get elements.
const student_form = document.getElementById('student_form');
const msg = student_form.querySelector('.msg');
const emailField = student_form.querySelector('input[name="email"]');
const cellField = student_form.querySelector('input[name="cell"]');
const email_check_field = student_form.querySelector('.email_check_field');
const cell_field_check = student_form.querySelector('.cell_field_check');
const loading_img = student_form.querySelector('.loading_img');


// Form-submit.
student_form.onsubmit = (e) => {

    e.preventDefault();

    loading_img.style.display = 'block';

    let timeout = setTimeout(() => {
        loading_img.style.display = 'none';


    // Get data student_form.
    const form_data = new FormData(e.target);
    const { name, email, cell, username, gender } = Object.fromEntries(form_data.entries());

    // Form-Validation check.
    if( !name || !email || !cell || !username || !gender ){

        msg.innerHTML = setAlert('All fields are required.');

    }else {

        msg.innerHTML = setAlert('Data Stable', 'success');
        e.target.reset();
        email_check_field.innerText = '';
        email_check_field.className = '';

    };


        clearTimeout(timeout)
    },2000);

};





// Email-Fields-Check.

emailField.onkeyup = (e) => {

    let email = e.target.value;

    if( emailCheck(email) ){
        email_check_field.innerText = 'email ok.';
        email_check_field.className = 'text-success';
    }else {
        email_check_field.innerText = 'Invalid email address';
        email_check_field.className = 'text-danger';
    };

};

// Cell-Fields-Check.

cellField.onkeyup = (e) => {

    let cell = e.target.value;

    if( cellCheck(cell) ){
        cell_field_check.innerText = 'cell ok';
        cell_field_check.className = 'text-success';
    }else {
        cell_field_check.innerText = 'Invalid phone-number';
        cell_field_check.className = 'text-danger';
    }

};
    
