document.addEventListener("DOMContentLoaded", function () {
    const base_Url = "http://localhost:3001/";
    const content = document.getElementById("content");
    
        async function getAllAppointments() {
            try {
                // Make the API request
                const response = await axios.get(`${base_Url}appointments`);
                
                if (response.data.length > 0) {
                    // Clear the pantsContent before appending new data
                    content.innerHTML = "";
                    response.data.forEach(appInfo => {
                        // Display each pantsInfo object attribute
                        content.innerHTML += 
                        `
                            <p>Date: ${appInfo.date}</p>
                            <p>Time: ${appInfo.time}</p>
                            <p>Company: ${appInfo.company}</p>
                            <p>Customer: ${appInfo.cutomer}</p>
                            <p>Address: ${appInfo.address}</p>

                            <hr> <!-- Add a horizontal line to separate each entry -->
                        `;
                    });
                } else {
                    // Show a message if no data is returned
                    content.innerHTML = "No shorts found.";
                }
            } catch (error) {
                // Show an error message in a popup or log it to the console
                console.error("Error:", error);
                content.innerHTML = "Error: Item was not found in our database! Please re-enter a valid item!";
            }
        }
        getAllAppointments();
        });