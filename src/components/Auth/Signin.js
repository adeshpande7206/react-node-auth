import { useState } from "react";

import styles from "./Auth.module.css";
import { Link } from "react-router-dom";

const Signin = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
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
          <Link to="/">Forget your password?</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
