import React from "react";
import styles from "./Header.module.css";
import img from "../../assets/sushi.jpg"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) =>{
    return <React.Fragment>
            <header className={styles.header}>
                <h1>Japan Sushi</h1>
                <HeaderCartButton onClick = {props.onShowCart}/>
            </header>
            <div className={styles["main-image"]}>
                <img src={img} alt="Sushi img" />
            </div>
        </React.Fragment>
}

export default Header;