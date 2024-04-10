// Populate day and year dropdowns dynamically
let dayDropdown = document.getElementById("dobDay");
let yearDropdown = document.getElementById("dobYear");
for (let i = 1; i <= 31; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.text = i;
    dayDropdown.appendChild(option);
}
let currentYear = new Date().getFullYear();
for (let i = currentYear; i >= currentYear - 100; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.text = i;
    yearDropdown.appendChild(option);
}

function calculateAge() {
    let dobDay = document.getElementById("dobDay").value;
    let dobMonth = document.getElementById("dobMonth").value;
    let dobYear = document.getElementById("dobYear").value;

    let warning = document.getElementById("warning");
    let result = document.getElementById("result");

    if (dobDay === "" || dobMonth === "" || dobYear === "") {
        warning.textContent = "Please select all fields.";
        result.textContent = "";
        return;
    }

    let today = new Date();
    let birthDate = new Date(dobYear, dobMonth - 1, dobDay);

    if (birthDate >= today) {
        warning.textContent = "Invalid date of birth. Please select a date before today.";
        result.textContent = "";
        return;
    }

    let ageYear = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let ageMonth = Math.abs(monthDiff);
    let ageDay = Math.abs(today.getDate() - birthDate.getDate());

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        ageYear--;
    }

    warning.textContent = "";
    result.textContent = "Your age is: " + ageYear + " years, " + ageMonth + " months, and " + ageDay + " days.";
}