import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarDetail.module.css";
import logo from "../../Assets/Images/logo.jpg";
import back from "../../Assets/Icons/arrow.svg";
import cart from "../../Assets/Icons/cart.png";

const Navbar = () => {
  return (
    <>
      <div className={styles.website}>
        <nav>
          <div className={styles.left}>
            <Link to="/" className={styles.link}>
              <img src={back} alt="menu" className={styles.icon} />
            </Link>
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
