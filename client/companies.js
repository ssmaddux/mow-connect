document.addEventListener("DOMContentLoaded", function () {
    const base_Url = "http://localhost:3001/";
    const content = document.getElementById("content");
    
        async function getAllCompanies() {
            try {
                // Make the API request
                const response = await axios.get(`${base_Url}companies`);
                
                if (response.data.length > 0) {
                    // Clear the pantsContent before appending new data
                    content.innerHTML = "";
                    response.data.forEach(appInfo => {
                        // Display each pantsInfo object attribute
                        content.innerHTML += 
                        `
                            <p>Name: ${appInfo.name}</p>
                            <p>Address: ${appInfo.address}</p>
                            <p>Phone: ${appInfo.phone}</p>
                            <p>Email: ${appInfo.email}</p>
                            

                            <hr> <!-- Add a horizontal line to separate each entry -->
                        `;
                    });
                } else {
                    // Show a message if no data is returned
                    content.innerHTML = "No companies found.";
                }
            } catch (error) {
                // Show an error message in a popup or log it to the console
                console.error("Error:", error);
                content.innerHTML = "Error: Item was not found in our database! Please re-enter a valid item!";
            }
        }
        getAllCompanies();
        });