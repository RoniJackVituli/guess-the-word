import React from 'react'
import classes from "./Footer.module.scss";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <p>
        Developed by <span>Roni Jack Vituli</span> &copy; {year}
      </p>
    </footer>
  );
}

export default Footer