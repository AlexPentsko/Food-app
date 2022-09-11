import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import {useContext, useEffect, useState} from 'react';
import CartContext from "../../store/cart-conext";


const HeaderCartButton = (props) =>{
    const [isButtonAnimated, setIsButtonAnimated] =useState(false);

    const cartContext = useContext(CartContext);

    const cartItemsNum = cartContext.items.reduce((currentValue, item) => {
        return currentValue + item.amount;
    }, 0)

    useEffect(()=>{
        if(cartContext.items.length === 0){
            return
        }
        setIsButtonAnimated(true);

        const timer = setTimeout(()=>{
            setIsButtonAnimated(false);
        } ,300);
        return() =>{
            clearTimeout(timer);
        }
    }, [cartContext.items]);

    

    const buttonClasses = `${styles.button} ${isButtonAnimated ? styles.bump : ''}`

    return (
        <button className={buttonClasses} onClick = {props.onClick}>
            <span className={styles.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Cart</span>
            <span className={styles.badge}>
                {cartItemsNum}
            </span>
        </button>
    )
}

export default HeaderCartButton;