import React, { useContext } from "react";
import "./ShowItems.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const ShowItems = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-items" id="food-items">
      <h2>Top dishes for you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
         if(category === "ALL" || category===item.category){
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          );
         }
         
        })}
      </div>
    </div>
  );
};

export default ShowItems;
