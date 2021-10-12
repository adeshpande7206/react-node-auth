import React from "react";
import { Link } from "react-router-dom";
import classes from "./Homepage.module.css";
export default function Homepage() {
  return (
    <div>
      <Link to="/signin">
        <button type="submit" className={classes.button}>
          SignIn
        </button>
      </Link>

      <Link to="/signup">
        <button className={classes.button} type="submit">
          SignUp
        </button>
      </Link>
    </div>
  );
}
