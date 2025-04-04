document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    alert("Form Submitted");

    const Fullname = document.getElementById('Fullname').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const age = document.getElementById('age').value;
    const comments = document.getElementById('comments').value;
    
    if (!Fullname) {
        alert("you need to enter your name.");
        return;
    }

    if (!email) {
        alert("you need to enter your name.");
        return;
    }

    if (!age || age<18) {
        alert("you need to be 18");
        return;
    
    }

    const formData = {
        Fullname: Fullname,
        email: email,
        password: pass,
        age: age,
        comments: comments
    }
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const result = 
            `   ${formData.Fullname} <br>
                ${formData.email} <br>
                ${formData.age} <br>
                ${formData.comments}`
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myForm').innerHTML = "";
            document.getElementById('result').innerHTML = result;

            
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData);
});
