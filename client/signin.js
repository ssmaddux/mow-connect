const baseUrl = "http://localhost:3001/";

document.getElementById('signinForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from being submitted via HTTP (which is the default behavior).

    const userType = document.getElementById('userType').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let signInEndpoint = 'signin'
    
    if (userType === 'company') {
        signInEndpoint = 'signincompany'
    } else {
        signInEndpoint = 'signin'
    }

    try {
        const response = await axios.post(`${baseUrl}${signInEndpoint}`, {
            email: email,
            password: password,
        });

        if (response.data.authenticated) {
            // User is authenticated, you can redirect or display a success message.
            window.location.href = 'customerhome.html'
            console.log('User signed in:', response.data);
        } else {
            // User is not authenticated, handle this case (e.g., show an error message).
            console.log('Authentication failed:', response.data);
        }
    } catch (error) {
        // Handle errors from the server.
        console.error('Error during sign-in:', error);
    }
});

