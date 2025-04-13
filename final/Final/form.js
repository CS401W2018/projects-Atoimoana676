document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const Fullname = document.getElementById('Fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('messageBox').value.trim();

    if (!Fullname || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    const formData = {
        Fullname,
        email,
        subject,
        message
    }; 

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true); // Can change to POST if needed
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            // Show success message
            document.getElementById('message').innerHTML = `<p style="color: green;">Message successfully sent! We'll be in touch soon.</p>`;

            // Hide the form
            document.getElementById('myForm').style.display = 'none';

            // Show submitted data
            document.getElementById('result').innerHTML = `
                <h3>Your Message Details:</h3>
                <p><strong>Name:</strong> ${formData.Fullname}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Subject:</strong> ${formData.subject}</p>
                <p><strong>Message:</strong> ${formData.message}</p>
            `;
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };

    xhr.send(JSON.stringify(formData));
});
