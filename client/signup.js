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


        try {
          // Send a POST request to the /shirts endpoint with the shirt data.
          const response = await axios.post(`${baseUrl}signup`, {
            email: emailInput,
            password: passwordInput,
            name: nameInput,
            address: addressInput,
            phone: phoneInput
          })
      
          // Handle the response (e.g., show a success message).
          console.log('User created:', response.data)
        } catch (error) {
          // Handle any errors that occur during the POST request.
          console.error('Error creating customer:', error)
        }
      }) 