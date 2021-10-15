import { useState } from "react";
import authAPI from "../../api/authAPI";
import styles from "./Auth.module.css";

const Signin = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result = await authAPI.post("user/login/", loginDetails, config);
    console.log("hey there!");
    console.log(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <input
          type="email"
          name="email"
          required
          className={styles.input}
          placeholder="Email"
          value={loginDetails.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          required
          className={styles.input}
          placeholder="Password"
          value={loginDetails.password}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          <span>Sign In</span>
          <span className={`${styles.load} ${styles.open}`}></span>
        </button>
      </form>
      <div className={styles.helpText}>
        <p>
          <a href="/">Forget your password?</a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
