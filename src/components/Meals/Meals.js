import MealList from "./MealList"
import PromoText from "./PromoText"
import React from "react"


const Meals = (props) =>{
    return (
        <React.Fragment>
            <PromoText></PromoText>
            <MealList></MealList>
        </React.Fragment>
        
    )
}

export default Meals;