// document.addEventListener("DOMContentLoaded", function () {
//     const base_Url = "http://localhost:3001/";
//     const content = document.getElementById("content");
    
//         async function getAllAppointments() {
//             try {
//                 // Make the API request
//                 const response = await axios.get(`${base_Url}appointments`);
                
//                 if (response.data.length > 0) {
//                     // Clear the pantsContent before appending new data
//                     content.innerHTML = "";
//                     response.data.forEach(appInfo => {
//                         // Display each pantsInfo object attribute
//                         content.innerHTML += 
//                         `
//                             <p>Date: ${appInfo.date}</p>
//                             <p>Time: ${appInfo.time}</p>
//                             <p>Company: ${appInfo.company}</p>
//                             <p>Customer: ${appInfo.cutomer}</p>
//                             <p>Address: ${appInfo.address}</p>

//                             <hr> <!-- Add a horizontal line to separate each entry -->
//                         `;
//                     });
//                 } else {
//                     // Show a message if no data is returned
//                     content.innerHTML = "No shorts found.";
//                 }
//             } catch (error) {
//                 // Show an error message in a popup or log it to the console
//                 console.error("Error:", error);
//                 content.innerHTML = "Error: Item was not found in our database! Please re-enter a valid item!";
//             }
//         }
//         getAllAppointments();
//         });






document.addEventListener("DOMContentLoaded", async function () {
    const base_Url = "http://localhost:3001/";
    const content = document.getElementById("content");

    async function getCompanyInfo(companyId) {
        try {
            const response = await axios.get(`${base_Url}companies/${companyId}`);
            return response.data.name; // Assuming the company name is stored in a 'name' field.
        } catch (error) {
            console.error("Error fetching company info:", error);
            return "Unknown Company"; // Handle the error or default value as needed.
        }
    }

    async function getAddressInfo(customerId) {
        try {
            const response = await axios.get(`${base_Url}customers/${customerId}`);
            return response.data.address; // Assuming the address is stored in an 'address' field.
        } catch (error) {
            console.error("Error fetching address info:", error);
            return "Unknown Address"; // Handle the error or default value as needed.
        }
    }

    async function getCustomerInfo(customerId) {
        try {
            const response = await axios.get(`${base_Url}customers/${customerId}`);
            return response.data.name; // Assuming the address is stored in an 'address' field.
        } catch (error) {
            console.error("Error fetching customer info:", error);
            return "Unknown Address"; // Handle the error or default value as needed.
        }
    }

    async function getAllAppointments() {
        try {
            const response = await axios.get(`${base_Url}appointments`);

            if (response.data.length > 0) {
                content.innerHTML = "";
                for (const appInfo of response.data) {
                    const companyName = await getCompanyInfo(appInfo.company);
                    const address = await getAddressInfo(appInfo.address);
                    const customerName = await getCustomerInfo(appInfo.customer)

                    content.innerHTML += 
                    `
                        <p>Date: ${appInfo.date}</p>
                        <p>Time: ${appInfo.time}</p>
                        <p>Company: ${companyName}</p>
                        <p>Customer: ${customerName}</p>
                        <p>Address: ${address}</p>
                        <hr>
                    `;
                }
            } else {
                content.innerHTML = "No appointments found.";
            }
        } catch (error) {
            console.error("Error:", error);
            content.innerHTML = "Error: Appointments not found.";
        }
    }

    getAllAppointments();
});

// document.addEventListener("DOMContentLoaded", async function () {
//     const base_Url = "http://localhost:3001/";
//     const content = document.getElementById("content");

//     async function getCustomerInfo(customerId) {
//         try {
//             const response = await axios.get(`${base_Url}customers/${customerId}`);
//             return response.data.name; // Assuming the customer's name is stored in a 'name' field.
//         } catch (error) {
//             console.error("Error fetching customer info:", error);
//             return "Unknown Customer"; // Handle the error or default value as needed.
//         }
//     }

//     async function getAddressInfo(addressId) {
//         try {
//             const response = await axios.get(`${base_Url}addresses/${addressId}`);
//             return response.data.address; // Assuming the address is stored in an 'address' field.
//         } catch (error) {
//             console.error("Error fetching address info:", error);
//             return "Unknown Address"; // Handle the error or default value as needed.
//         }
//     }

//     async function getAllAppointments() {
//         try {
//             const response = await axios.get(`${base_Url}appointments`);

//             if (response.data.length > 0) {
//                 content.innerHTML = "";
//                 for (const appInfo of response.data) {
//                     const customerName = await getCustomerInfo(appInfo.customer);
//                     const address = await getAddressInfo(appInfo.address);

//                     content.innerHTML += 
//                     `
//                         <p>Date: ${appInfo.date}</p>
//                         <p>Time: ${appInfo.time}</p>
//                         <p>Customer: ${customerName}</p>
//                         <p>Address: ${address}</p>
//                         <hr>
//                     `;
//                 }
//             } else {
//                 content.innerHTML = "No appointments found.";
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             content.innerHTML = "Error: Appointments not found.";
//         }
//     }

//     getAllAppointments();
// });