import { useState, useEffect } from 'react';
import axios from 'axios';

const LoginPage = () => {
  // Log In and Sign Up Frontend Status
  const [isLogin, setIsLogin] = useState(true);
  if(sessionStorage.getItem("user")) {
    window.location.href = "http://localhost:3000/product-listing/category/all";
  }

  // Form
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // Errors
  const [errors, setErrors] = useState({}); 

  // Fetch Users
  const [users, setUsers] = useState({});

  const handleSubmit = async (event) => {
    setErrors({})
    event.preventDefault();

    if (isLogin) {
      // Perform login
      try {
        const response = await axios.post('http://localhost:3500/user/login', {
          username: username,
          password: password,
        });
        // handle response data as needed
        sessionStorage.setItem("user", JSON.stringify(response.data));
        window.location.href = "http://localhost:3000";
      } catch (err) {
        const errorResponse = err.response.data;
        if (errorResponse && errorResponse.message) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            loginError: errorResponse.message,
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            loginError: "Invalid log in",
          }));
        }
      }
    } else {
      // Perform signup
      // Validating First Name
      if(!isNameValid(firstName)) {
        console.log("First name error")
        setErrors((prevErrors) => ({
          ...prevErrors,
          firstNameError: "Invalid first name.",
        }));
      }

      // Validating Last Name
      if(!isNameValid(lastName)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          lastNameError: "Invalid last name.",
        }));
      }

      // Validating Email
      if(!isEmailValid() || !isEmailUnique()) {
        console.log("Email error")
        setErrors((prevErrors) => ({
          ...prevErrors,
          emailError: "Invalid email.",
        }));
      }

      // Validating Username
      if(!isUserNameUnique() || !isUsernameValid()) {
        console.log("Username error")
        setErrors((prevErrors) => ({
          ...prevErrors,
          usernameError: "Invalid username.",
        }));
      }

      // Validating Password
      if(!isPasswordValid()) {
        console.log("Password error")
        setErrors((prevErrors) => ({
          ...prevErrors,
          passwordError: "Invalid password.",
        }));
      }

      // Validating Password Confirm
      if(!isPasswordConfirmValid()) {
        console.log("Password confirm error")
        setErrors((prevErrors) => ({
          ...prevErrors,
          passwordConfirmNameError: "Invalid password confirmation.",
        }));
      }

      // Validating Password Match
      if (password !== passwordConfirm) {
        console.log("Password match error")
        setErrors({ passwordMatchError: "Passwords do not match." });
      } else {
        console.log(JSON.stringify(errors))
        if(JSON.stringify(errors) === "{}") {
          try {
            console.log("Sending user form data")
            const response = await axios.post('http://localhost:3500/user', {
              username: username,
              password: password,
              firstName: firstName,
              lastName: lastName,
              email: email,
            });
            sessionStorage.setItem("user", JSON.stringify(response.data));
            window.location.href = "http://localhost:3000";
          } catch (error) {
            const errorResponse = error.response.data;
            if (errorResponse && errorResponse.errors) {
              setErrors(errorResponse.errors);
            } else {
              console.error('Error:', error);
            }
          }
        }
      }
    }
  };
  
  // Fetching and validating
  // Getting Users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3500/user')
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching items", error)
      }
    }
    fetchUsers();
  }, [setUsers])

  // Email Uniqueness
  const isEmailUnique = () => {
    for(let i = 0; i < users.length; i ++) {
      let obj = users[i]
      for(let key in obj) {
        if(key === "email") {
          if(email === obj[key]) {
            return false;
          }
        }
      }
    }
    return true;
  }

  // Username Uniqueness
  const isUserNameUnique = () => {
    for(let i = 0; i < users.length; i ++) {
      let obj = users[i]
      for(let key in obj) {
        if(key === "username") {
          if(username === obj[key]) {
            return false;
          }
        }
      }
    }
    return true;
  }
  ///////////////////////////////////////////////

  // Sign Up Frontend Validation

  ///////////////////////////////////////////////
  // First and Last Name
  // Requirements: String and No Blank Space
  // Name Validation (Frontend: Realtime user input check)
  const validateNameInput = (e) => {
    const key = e.key || String.fromCharCode(e.keyCode);

    // Regular expression to allow only letters (both lowercase and uppercase)
    const pattern = /^[a-zA-Z]+$/;

    if (!pattern.test(key)) {
      e.preventDefault();
    }
  };
  // Name Validation (Backend: Form response and html message)
  const isNameValid = (inputValue) => {
    const pattern = /^[a-zA-Z]+$/;
    return pattern.test(inputValue) && inputValue.length !== 0;
  };
  // First Name Validation Styling (validateNameInput already checks for valid characters)
  const getInputFirstNameStyle = () => {
    if(errors.firstNameError) {
      return 'p-2 my-[10px] p-[10px] text-base bg-red-200'
    }
    return firstName.length > 0 
    ? 'p-2 my-[10px] p-[10px] text-base bg-green-200'
    : 'p-2 my-[10px] p-[10px] text-base'
  }
  // Name Validation Styling (validateNameInput already checks for valid characters)
  const getInputLastNameStyle = () => {
    if(errors.lastNameError) {
      return 'p-2 my-[10px] p-[10px] text-base bg-red-200'
    }
    return lastName.length > 0 
    ? 'p-2 my-[10px] p-[10px] text-base bg-green-200'
    : 'p-2 my-[10px] p-[10px] text-base'
  }
  ///////////////////////////////////////////////

  ///////////////////////////////////////////////
  // Email
  // Requirements: anything@domain.tld
  // Email Validation (Backend: Form response and html message, Frontend: Realtime user input check)
  const isEmailValid = () => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length !== 0;
  };
  
  // Email Validation Styling
  const getInputEmailStyle = () => {
    if(errors.emailError) {
      return 'p-2 my-[10px] p-[10px] text-base bg-red-200'
    }
    return email.length === 0
      ? 'p-2 my-[10px] p-[10px] text-base'
      : !isEmailValid()
        ? 'p-2 my-[10px] p-[10px] text-base bg-red-200'
        : 'p-2 my-[10px] p-[10px] text-base bg-green-200' 
  }
  ///////////////////////////////////////////////

  ///////////////////////////////////////////////
  // User Validation (Frontend: Realtime user input check)
  const validateUsernameInput = (e) => {
    const key = e.key || String.fromCharCode(e.keyCode);
  
    // Regular expression to allow only letters (both lowercase and uppercase) and numbers
    const pattern = /^[a-zA-Z0-9]+$/;
  
    if (!pattern.test(key)) {
      e.preventDefault();
    }
  };
  // User Validation (Backend: Form response, Frontend: realtime css check )
  const isUsernameValid = () => {
    const pattern = /^[a-zA-Z0-9]+$/;
    return pattern.test(username) && username.length !== 0;
  };
  // Name Validation Styling (validateNameInput already checks for valid characters)
  const getInputUsernameStyle = () => {
    if(errors.usernameError || errors.loginError) {
      return 'p-2 my-[10px] p-[10px] text-base bg-red-200'
    }
    return username.length === 0 || isLogin
      ? 'p-2 my-[10px] p-[10px] text-base'
      : !isUsernameValid()
        ? 'p-2 my-[10px] p-[10px] text-base bg-red-200'
        : 'p-2 my-[10px] p-[10px] text-base bg-green-200' 
  }
  ///////////////////////////////////////////////

  ///////////////////////////////////////////////
  // Password
  // Requirements: No Blank Space
  // Password Validation (Frontend: Realtime user input check)
  const validatePasswordInput = (e) => {
    const key = e.key || String.fromCharCode(e.keyCode);

    // No space allowed
    const pattern = /^[a-zA-Z0-9!@#$%^&*()]+$/;

    if (!pattern.test(key)) {
      e.preventDefault();
    }
  };
  // Password Validation (Backend: Form response, Frontend: realtime css check )
  const isPasswordValid = () => {
    const pattern = /^[a-zA-Z0-9]+$/;
    return pattern.test(password) && password.length > 7;
  };
  // Password Validation Styling
  const getInputPassStyle = () => {
    if(errors.passwordError || errors.loginError) {
      return 'p-2 my-[10px] p-[10px] text-base border bg-red-200'
    }
    return password.length === 0 || isLogin
      ? 'p-2 my-[10px] p-[10px] text-base'
      : !isPasswordValid()
        ? 'p-2 my-[10px] p-[10px] text-base border bg-red-200'
        : 'p-2 my-[10px] p-[10px] text-base border bg-green-200' 
  }
  ///////////////////////////////////////////////

  ///////////////////////////////////////////////
  // Confirm Password
  // Requirements: Must equal password
  // Password Confirm Validation (Frontend: Realtime user input check)
  const validatePasswordConfirmInput = (e) => {
    const key = e.key || String.fromCharCode(e.keyCode);

    // No space allowed
    const pattern = /^[a-zA-Z0-9!@#$%^&*()]+$/;

    if (!pattern.test(key)) {
      e.preventDefault();
    }
  };
  // Password Confirm Validation (Backend: Form response, Frontend: realtime css check )
  const isPasswordConfirmValid = () => {
    const pattern = /^[a-zA-Z0-9]+$/;
    return pattern.test(passwordConfirm) && passwordConfirm.length > 7;
  };
  // Confirm Password Validation Styling
  const getInputConfirmPassStyle = () => {
    if(errors.passwordConfirmError || errors.passwordMatchError) {
      return 'p-2 my-[10px] p-[10px] text-base border bg-red-200'
    }
    return passwordConfirm.length === 0
      ? 'p-2 my-[10px] p-[10px] text-base'
      : !isPasswordConfirmValid()
        ? 'p-2 my-[10px] p-[10px] text-base border bg-red-200'
        : 'p-2 my-[10px] p-[10px] text-base border bg-green-200' 
  }
  ///////////////////////////////////////////////

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#f0f0f0'
    }}>
      {/* Form */}
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '20px',
        background: '#fff',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
        borderRadius: '10px',
      }}>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

        {!isLogin && (
          <div>
            {/* First Name */}
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onKeyDown={validateNameInput}
              className={getInputFirstNameStyle()}
              required
            />

            {/* Last Name */}
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onKeyDown={validateNameInput}
              className={getInputLastNameStyle()}
              required
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
            {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
          </div>
        )}

        {/* Email */}
        {!isLogin && (
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={getInputEmailStyle()}
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
        )}

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={validateUsernameInput}
          className={getInputUsernameStyle()}
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={validatePasswordInput}
          minLength={!isLogin ? 8 : ""}
          className={getInputPassStyle(password)}
          required
        />

        {/* Confirm Password */}
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            onKeyDown={validatePasswordConfirmInput}
            className={getInputConfirmPassStyle()}
            required
          />
        )}

        {Object.keys(errors).map((key) => (
          <p key={key} style={{ color: 'red', marginTop: '5px' }}>
            {errors[key]}
          </p>
        ))}

        <button
          type="submit"
          style={{
            background: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            padding: '10px',
            cursor: 'pointer',
            fontSize: '18px'
          }}
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>

        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'underline',
            marginTop: '10px',
            color: '#007BFF'
          }}
        >
          {isLogin ? 'Need to create an account?' : 'Already have an account?'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
