import { useState } from "react";

import Signin from "./Signin";
import Signup from "./Signup";

import styles from "./Auth.module.css";

const Auth = () => {
  const [signupForm, setsignupForm] = useState(true);

  return (
    <div className={styles.formOuter}>
      <div className={styles.logoWrapper}>
        <h1>Nodejs React Auth</h1>
      </div>
      <div className={styles.formWrap}>
        <div className={styles.tabs}>
          <button
            className={signupForm ? styles.active : ""}
            onClick={() => setsignupForm(true)}
          >
            Sign Up
          </button>
          <button
            className={!signupForm ? styles.active : ""}
            onClick={() => setsignupForm(false)}
          >
            Sign In
          </button>
        </div>

        <div className={styles.tabsContent}>
          {signupForm && <Signup />}
          {!signupForm && <Signin />}
        </div>
      </div>
    </div>
  );
};

export default Auth;
