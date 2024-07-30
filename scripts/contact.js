// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

function submit() {
    var contact_page = document.getElementById('contact-page')
    contact_page.innerHTML = ' '
    
    var thankmsg = document.createElement('p');
    thankmsg.innerHTML = 'Thank you for your message';
    thankmsg.style.fontSize ='24px';

    contact_page.appendChild(thankmsg);
}

document.getElementById('submit-button').addEventListener('click', submit)