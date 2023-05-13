import React, { useState } from 'react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      // Perform login
      console.log("Logging in:", { username, password });
    } else {
      // Perform signup
      console.log("Signing up:", { username, password });
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f0f0' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', padding: '20px', background: '#fff', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: '10px 0', padding: '10px', fontSize: '16px' }} />
        <button type="submit" style={{ background: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px', cursor: 'pointer', fontSize: '18px' }}>{isLogin ? 'Login' : 'Sign Up'}</button>
        <button type="button" onClick={() => setIsLogin(!isLogin)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline', marginTop: '10px', color: '#007BFF' }}>
          {isLogin ? 'Need to create an account?' : 'Already have an account?'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
