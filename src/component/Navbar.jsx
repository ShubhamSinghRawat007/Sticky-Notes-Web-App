import React from "react";
import styles from "./Navbar.module.css";
import { CiSquarePlus } from "react-icons/ci";

const Navbar = ({ handleModal }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="logo" className={styles.logo} />
      </div>
      <div className={styles.addNoteButton} onClick={handleModal}>
        <p className={styles.addText}>Add Notes</p>
        <CiSquarePlus size="1.8rem" className={styles.icon} />
      </div>
    </nav>
  );
};

export default Navbar;
