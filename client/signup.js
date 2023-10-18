    const baseUrl = "http://localhost:3001/";
    const submitInfoButton = document.getElementById("submitbutton")
    


    submitInfoButton.addEventListener('click', async () => {

    const cancelButton = document.getElementById("cancelbutton")
    const customerCheckBox = document.getElementById("customer")
    const companyCheckBox = document.getElementById("company")
    const emailInput = document.getElementById("emailinfo").value
    const passwordInput = document.getElementById("password").value
    const passwordValidationInput = document.getElementById("passwordvalid").value
    const nameInput = document.getElementById("name").value
    const addressInput = document.getElementById("address").value
    const phoneInput = document.getElementById("phone").value
        if (companyCheckBox.checked){
            try {
                // Send a POST request to the /shirts endpoint with the shirt data.
                const response = await axios.post(`${baseUrl}signupcompany`, {
                  email: emailInput,
                  password: passwordInput,
                  name: nameInput,
                  address: addressInput,
                  phone: phoneInput
                })
            
              // Check if the user was created successfully (HTTP status code 201).
      if (response.status === 201) {
        // User created successfully, redirect to the login page.
        console.log('Company created:', response.data);
        window.location.href = 'signin.html'; // Change the URL to your login page
      } else {
        // Handle other status codes if needed.
        console.error('Failed to create company:', response.data);
      }
    } catch (error) {
      // Handle any errors that occur during the POST request.
      console.error('Error creating company:', error);
    }
  } else {
    try {
      // Send a POST request to the /signup endpoint with the customer data.
      const response = await axios.post(`${baseUrl}signup`, {
        email: emailInput,
        password: passwordInput,
        name: nameInput,
        address: addressInput,
        phone: phoneInput
      });

      // Check if the user was created successfully (HTTP status code 201).
      if (response.status === 201) {
        // User created successfully, redirect to the login page.
        console.log('Customer created:', response.data);
        window.location.href = 'signin.html'; // Change the URL to your login page
      } else {
        // Handle other status codes if needed.
        console.error('Failed to create customer:', response.data);
      }
    } catch (error) {
      // Handle any errors that occur during the POST request.
      console.error('Error creating customer:', error);
    }
  }
      }) 