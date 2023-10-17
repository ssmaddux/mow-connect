document.addEventListener('DOMContentLoaded', () => {
    const appointmentsButton = document.getElementById("appointments");
    const companiesButton = document.getElementById("companies")
    const createAppointmentsButton = document.getElementById("createappointment");
    const deleteAppointmentsButton = document.getElementById("deleteappointment")

    appointmentsButton.addEventListener('click', () => {
        window.location.href = 'appointments.html';
    });

    companiesButton.addEventListener('click', () => {
        window.location.href = 'companies.html';
    });

    createAppointmentsButton.addEventListener('click', () => {
        window.location.href = 'createappointments.html';
    });

    deleteAppointmentsButton.addEventListener('click', () => {
        window.location.href = 'deleteappointments.html';
    });
});


    