import React, { useState } from 'react';
import axios from 'axios';


const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(isLogin) {
      // Perform login
      try {
        const response = await axios.post('http://localhost:3500/user/login', {
          username: username,
          password: password,
        });
        // handle response data as needed
        sessionStorage.setItem("user", JSON.stringify(response.data));
        window.location.href = "http://localhost:3000"
      } catch (err) {
        alert("Invalid Login");
      }
    } else {
      // Perform signup
      if(password !== passwordConfirm) {
        alert("Passwords do not match.");
      } else {
        try {
          const response = await axios.post('http://localhost:3500/user', {
          username: username,
          password: password,
          firstName: firstName,
          lastName: lastName,
          email: email,
        });
        sessionStorage.setItem("user", JSON.stringify(response.data));
        window.location.href = "http://localhost:3000"
        } catch (error) {
          console.error('Error:', error);
        }
      }
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f0f0' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', padding: '20px', background: '#fff', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        {!isLogin && <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }} />}
        {!isLogin && <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }} />}
        {!isLogin && <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }} />}
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }} />
        {!isLogin && <input type="password" placeholder="Confirm Password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }} />}
        <button type="submit" style={{ background: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px', cursor: 'pointer', fontSize: '18px' }}>{isLogin ? 'Login' : 'Sign Up'}</button>
        <button type="button" onClick={() => setIsLogin(!isLogin)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline', marginTop: '10px', color: '#007BFF' }}>
          {isLogin ? 'Need to create an account?' : 'Already have an account?'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
