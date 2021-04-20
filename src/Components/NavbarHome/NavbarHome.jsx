import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarHome.module.css";
import logo from "../../Assets/Images/logo.jpg";
import menu from "../../Assets/Icons/menu.png";
import cart from "../../Assets/Icons/cart.png";

const Navbar = () => {
  return (
    <>
      <div className={styles.website}>
        <nav>
          <div className={styles.left}>
            <img src={menu} alt="menu" className={styles.icon} />
            <Link to="/" className={styles.link}>
              <div className={styles.brand}>
                <img src={logo} alt="WD" className={styles.logo} />
                <div>wine.delivery</div>
              </div>
            </Link>
          </div>
          <div className={styles.middle}>
            <input
              type="text"
              name=""
              id=""
              className={styles.input}
              placeholder="Search in Wine.Delivery"
            />
            <button className={styles.button}>search</button>
          </div>
          <div className={styles.right}>
            <div>sign up</div>
            <div>log in</div>
            <img src={cart} alt="cart" className={styles.icon} />
          </div>
        </nav>
      </div>
      <div className={styles.mobile}>
        <nav>
          <div className={styles.brand}>
            <img src={logo} alt="WD" className={styles.logo} />
            <div>wine.delivery</div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
