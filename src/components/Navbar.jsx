import React from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../imgs/logoeShop.svg";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link to="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
      <div className={styles.linksContainer}>
        <Link to={"/"} className={styles.link}>
          Home
        </Link>
        <Link to={"/products"} className={styles.link}>
          Products
        </Link>
        <Link to={"/cart"} className={styles.link}>
          <FiShoppingCart size={20} color={"#8424bd"} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
