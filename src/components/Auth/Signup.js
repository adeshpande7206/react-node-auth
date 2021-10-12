import { useState } from "react";

import styles from "./Auth.module.css";

const Signup = () => {
  const [loginDetails, setLoginDetails] = useState({
    username:"",
    email: "",
    password: "",
    confirmPassword: ""
  });
const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateInput();

    if(Object.values(errors).length !== 0){
        setErrors(errors);
        return
    }
  };

  const validateInput=()=>{
      let err = {};

      if(loginDetails.username === ""){
          err["username"] = "Username is required."
      }

      if(loginDetails.email === ""){
        err["email"] = "Email is required."
        }

        if(loginDetails.password === ""){
            err["password"] = "Password is required."
        }

        if(loginDetails.password !=="" && loginDetails.password !== loginDetails.confirmPassword){
            err["confirmPassword"] = "Password doesn't match."
        }

        return err;
  }

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
      <input
          type="text"
          name="username"
          required
          className={styles.input}
          placeholder="Username"
          value={loginDetails.username}
          onChange={handleChange}
        />
        {errors.username && (
            <p>
            {errors.username}
            </p>
        )}
        
        <input
          type="email"
          name="email"
          required
          className={styles.input}
          placeholder="Email"
          value={loginDetails.email}
          onChange={handleChange}
        />
         {errors.email && (
            <p>
            {errors.email}
            </p>
        )}
        <input
          type="password"
          name="password"
          required
          className={styles.input}
          placeholder="Password"
          value={loginDetails.password}
          onChange={handleChange}
        />
         {errors.password && (
            <p>
            {errors.password}
            </p>
        )}
        <input
          type="password"
          name="confirmPassword"
          required
          className={styles.input}
          placeholder="Confirm Password"
          value={loginDetails.confirmPassword}
          onChange={handleChange}
        />
         {errors.confirmPassword && (
            <p>
            {errors.confirmPassword}
            </p>
        )}
        <button type="submit" className={styles.button}>
          <span>Sign Up</span>
          <span
            className={`${styles.load} ${styles.open}`}
          ></span>
        </button>
      </form>
      <div className={styles.helpText}>
        <p>
        Have an Account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
