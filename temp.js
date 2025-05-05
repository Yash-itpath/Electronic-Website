const credentials = { username: 'johnd', password: 'm38rmF$' };

fetch('https://fakestoreapi.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(credentials),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Login failed');
    }
    return response.json();
  })
  .then((data) => {
    // localStorage.setItem('auth_token', data.token); // Store token
    console.log('Login successful!', data.token);
    // You can now redirect or continue to protected pages
  })
  .catch((error) => {
    console.error('Login error:', error.message);
  });
