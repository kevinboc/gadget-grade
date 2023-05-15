import { useState } from "react"
import axios from "axios"
import qs from "qs"

const SignUp = () => {

    if(sessionStorage.getItem("user")) {
        window.location.href = "http://localhost:3000"
    }

    const[formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        active: true
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(formData)
        const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
      
        axios.post('http://localhost:3500/user', qs.stringify(formData), config)
        .then(response => {
            // Handle response
            console.log(response.data)

            //Set Session
            setSessionUser(response.data)
        })
        .catch(error => {
            // Handle error
            console.error(error)
        });

        window.location.href = "http://localhost:3000"
    }

    const handleChange = (event) => {
        const{ name, value } = event.target
        setFormData((prevFormData) => (
            {
                ...prevFormData, [name]: value
            }
        ))
    }

    const setSessionUser = (userData) => {
        sessionStorage.setItem("user", JSON.stringify(userData))
    }

  return (
    <div className="h-full w-fit mx-auto flex flex-col items-center p-10 gap-y-5">
        {/* Header */}
        <div className="">
            <h1 className="font-sans font-semibold text-5xl">Sign Up</h1>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="w-fit flex flex-col gap-y-5">
            {/* Log In Credential Container */}
            <div className="flex flex-row justify-between">
                {/* UserName: */}
                <div>
                    <label htmlFor="username" className="p-1 font-sans text-md">Username:</label>
                    <input type="text" id="username" name="username" defaultValue={formData.username} onChange={handleChange} className="p-1 border border-solid border-black rounded-sm"/>
                </div>

                {/* Password: */}
                <div>
                    <label htmlFor="password" className="p-1 font-sans text-md">Password:</label>
                    <input type="password" id="password" name="password" defaultValue={formData.password} onChange={handleChange} className="p-1 border border-solid border-black rounded-sm"/>
                </div>
            </div>

            {/* Full Name Container */}
            <div className="flex flex-row justify-between">
                {/* First Name: */}
                <div>
                    <label htmlFor="firstName" className="p-1 font-sans text-md">First Name:</label>
                    <input type="text" id="firstName" name="firstName" defaultValue={formData.firstName} onChange={handleChange} className="p-1 border border-solid border-black rounded-sm"/>
                </div>

                {/* Last Name: */}
                <div>
                    <label htmlFor="lastName" className="p-1 font-sans text-md">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" defaultValue={formData.lastName} onChange={handleChange} className="p-1 border border-solid border-black rounded-sm"/>
                </div>
            </div>

            {/* Email + Submit Container */}
            <div className="flex flex-row justify-between">
                {/* Email: */}
                <div>
                    <label htmlFor="email" className="p-1 font-sans text-md">Email:</label>
                    <input type="text" id="email" name="email" defaultValue={formData.email} onChange={handleChange} className="p-1 border border-solid border-black rounded-sm"/>
                </div>

                {/* Button */}
                <button className="bg-backgroundColor text-white font-sans font-bold rounded-sm px-5">SIGN UP</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp