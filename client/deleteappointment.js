document.addEventListener("DOMContentLoaded", async function () {
    const baseUrl = "http://localhost:3001/";
    const appointmentSelect = document.getElementById("appointmentSelect");
    const deleteButton = document.getElementById("deleteButton");

    // Function to get and populate the list of appointments
    async function populateAppointments() {
        try {
            // Fetch the list of appointments from your API
            const response = await axios.get(`${baseUrl}appointments`);
    
            if (response.data.length > 0) {
                // Clear the dropdown before appending new options
                appointmentSelect.innerHTML = "";
    
                // Populate the dropdown with options from the server response
                response.data.forEach(async appointmentInfo => {
                    const option = document.createElement("option");
                    option.value = appointmentInfo._id; // Set the value to the appointment ID
    
                    // Fetch the associated company name
                    const companyResponse = await axios.get(`${baseUrl}companies/${appointmentInfo.company}`);
                    if (companyResponse.status === 200) {
                        const companyName = companyResponse.data.name;
                        option.text = `${appointmentInfo.date} - ${appointmentInfo.time} - ${companyName}`;
                    } else {
                        option.text = `${appointmentInfo.date} - ${appointmentInfo.time} - Unknown Company`;
                    }
    
                    appointmentSelect.appendChild(option);
                });
            } else {
                // Show a message if no appointments are found.
                appointmentSelect.innerHTML = "No appointments found.";
            }
        } catch (error) {
            console.error("Error:", error);
            appointmentSelect.innerHTML = "Error: Unable to fetch appointments.";
        }
    }

    // Populate the appointments dropdown
    populateAppointments();

    // Event listener for the "Delete" button
    deleteButton.addEventListener('click', async () => {
        const selectedAppointmentID = appointmentSelect.value;

        try {
            // Send a DELETE request to your API to delete the selected appointment
            await axios.delete(`${baseUrl}appointments/${selectedAppointmentID}`);

            // Optionally, you can display a success message to the user
            alert('Appointment deleted successfully.');

            // Refresh the list of appointments
            populateAppointments();
        } catch (error) {
            // Handle errors that occur during the DELETE request
            console.error('Error deleting appointment:', error);
            alert('Error deleting appointment.');
        }
    });
});
