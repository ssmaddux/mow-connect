// const baseUrl = "http://localhost:3001/"


// In createappointments.js
document.addEventListener("DOMContentLoaded", async function () {
    const base_Url = "http://localhost:3001/";
    const content = document.getElementById("content");
    const companySelect = document.getElementById("companySelect"); // Update the element ID

    async function getAllCompanies() {
        try {
            // Make an API GET request to fetch the list of companies.
            const response = await axios.get(`${base_Url}companies`);

            if (response.data.length > 0) {
                // Clear the companySelect dropdown before appending new options
                companySelect.innerHTML = "";

                // Populate the companySelect dropdown with options from the server response
                response.data.forEach(companyInfo => {
                    const option = document.createElement("option");
                    option.value = companyInfo._id; // Set the value to the company ID
                    option.text = companyInfo.name; // Set the displayed text to the company name
                    companySelect.appendChild(option);
                });
            } else {
                // Show a message if no companies are found.
                companySelect.innerHTML = "No companies found.";
            }
        } catch (error) {
            // Handle any errors that occur while fetching companies.
            console.error("Error:", error);
            companySelect.innerHTML = "Error: Unable to fetch companies.";
        }
    }

    // Call the function to populate the companySelect dropdown
    getAllCompanies();

    const submitInfoButton = document.getElementById("submitbutton")


submitInfoButton.addEventListener('click', async () => {

    const dateInput = document.getElementById("dateInput").value
    const timeInput = document.getElementById("timeInput").value
    // const companyInput = document.getElementById("companyforappointment").value
    // const addressInput = document.getElementById("address").value
    const selectedCompanyID = companySelect.value

    try {
        
        const response = await axios.post(`${base_Url}appointments`, {
        date: dateInput,
        time: timeInput,
        company: selectedCompanyID,
        // address: addressInput,
        })

        // Handle the response (e.g., show a success message).
        console.log('Appointment created:', response.data)
    } catch (error) {
        // Handle any errors that occur during the POST request.
        console.error('Error creating appointment:', error)
    }
})
});
