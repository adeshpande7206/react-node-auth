import { useState } from "react";
import authAPI from "../../api/authAPI";

// CSS Import
import styles from "./Auth.module.css";

const Signup = () => {
  const [signupDetails, setSignupDetails] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result = await authAPI.post("user/signup/", signupDetails, config);
    console.log(result);
  };

  return (
    <div id="signup-tab-content" className={styles.active}>
      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <input
          name="email"
          type="email"
          required
          className={styles.input}
          placeholder="Email"
          value={signupDetails.email}
          onChange={handleChange}
        />
        <input
          name="name"
          type="text"
          required
          className={styles.input}
          placeholder="Name"
          value={signupDetails.name}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          required
          className={styles.input}
          placeholder="Password"
          value={signupDetails.password}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          Sign Up
        </button>
      </form>
      <div className={styles.helpText}>
        <p>By signing up, you agree to our</p>
        <p>
          <a href="#/">Terms of service</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
