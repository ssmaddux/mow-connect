document.addEventListener('DOMContentLoaded', () => {
    const appointmentsButton = document.getElementById("appointments");
    const companiesButton = document.getElementById("companies")

    appointmentsButton.addEventListener('click', () => {
        window.location.href = 'appointments.html';
    });

    companiesButton.addEventListener('click', () => {
        window.location.href = 'companies.html';
    });
});


    