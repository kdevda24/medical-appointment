
const registrations = [];

const form = document.getElementById("main");
const errorMessage = document.getElementById("error-message");
const registrationsContainer = document.getElementById("registrations");

form.addEventListener("submit", function (event) {
    event.preventDefault();

 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const ticket = document.getElementById("ticket").value;
    const count = document.getElementById("count").value;

    
    errorMessage.textContent = "";

    if (name === "") {
        errorMessage.textContent = "Please enter your name.";
        return;
    }

    if (email === "") {
        errorMessage.textContent = "Please enter your email.";
        return;
    }

    if (date === "") {
        errorMessage.textContent = "Please choose a preferred date.";
        return;
    }

    
    const registration = {
        name: name,
        email: email,
        date: date,
        ticket: ticket,
        count: count
    };

    
    registrations.push(registration);

    
    renderRegistrations();

    // Clear the form 
    form.reset();
});

function renderRegistrations() {
    // Clear whatever was there before
    registrationsContainer.innerHTML = "";

    for (let i = 0; i < registrations.length; i++) {
        const registration = registrations[i];

        const card = document.createElement("div");
        card.className = "registration-card";
        card.innerHTML =
            "<p><strong>" + registration.name + "</strong></p>" +
            "<p>" + registration.email + "</p>" +
            "<p>" + registration.date + " - " + registration.ticket + " - " + registration.count + " ticket(s)</p>";

        
        const cancelButton = document.createElement("button");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function () {
            removeRegistration(i);
        });
        card.appendChild(cancelButton);

        registrationsContainer.appendChild(card);
    }
}

function removeRegistration(index) {
    registrations.splice(index, 1); 
    renderRegistrations(); 
}