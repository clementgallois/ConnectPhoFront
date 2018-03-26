class AuthApi {
  static login(credentials) {
    const request = new Request('http://localhost:8080/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      }),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }
  static register(credentials) {
    const request = new Request('http://localhost:8080/register', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        email: credentials.email,
        username: credentials.username,
        password: credentials.password,
      }),
    });

    return fetch(request).then(response => response.json()).catch(error => error);
  }
}

export default AuthApi;
