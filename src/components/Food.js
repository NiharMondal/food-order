import React,{useContext} from "react";
import { AppContext } from "../context";
import FoodItem from './FoodItem'
const Food = () => {
  const value = useContext(AppContext);
  const [foods] = value.foods;
  return (
    <div className="row">
        {foods.map(food => {
              let colors = [
                "#E8FFFE",
                "#FFFDE9",
                "#E8F7FF",
                "#FFE9F7",
                "#ecf1ff",
              ];
              const random = Math.floor(Math.random() * 5);
          return <FoodItem food={food} bgColor={colors[random]} key={food.id}/>
            })
          }
       
    </div>
  );
};

export default Food;
