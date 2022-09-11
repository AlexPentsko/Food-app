import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import styles from './MealList.module.css';

const DUMMY_MEALS = [
    {
      id: "m1",
      name: 'Naomi',
      description:
        "cheese, chicken, masago, tomato, cucumber, konz",
      price: 11.99,
    },
    {
      id: "m2",
      name: "FishoFish",
      description: "rice, fish, souse",
      price: 3.99,
    },
    {
      id: "m3",
      name: "Nigiri",
      description: "fish, souse, kunz",
      price: 4.99,
    },
    {
      id: "m4",
      name: 'Salad with fish',
      description:
        "rice, fish, cucumber, nori, sour souse",
      price: 7.99,
    },
  ];
  

const MealList = () =>{

    const mealList = DUMMY_MEALS.map((meal) => 
    <MealItem 
      key = {meal.id} 
      id = {meal.id}
      name = {meal.name} 
      description = {meal.description} 
      price = {meal.price}
    />);

    return (
    <section className={styles.meals}>
        <Card>
          <ul>
            {mealList}
          </ul>
        </Card>
    </section>
    )
}

export default MealList;