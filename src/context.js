import React, { createContext,useEffect,useState } from 'react';
import { fakeFood } from './dummyData';
export const AppContext = createContext()
export const AppProvider = (props) => {
  const [foods, setFoods] = useState(fakeFood);
  const [cart, setCart] = useState([]);
  const addToCart = (key) => {
    const check = cart.every(item => {
      return item.id !== key;
    })
    if (check) {
      const data = foods.filter(food => {
        return food.id === key;
      })
      setCart([...cart, ...data])
    } else {
      alert("The food has been added!")
    }
  };
  useEffect(() => {
    const dataFood = JSON.parse(localStorage.getItem('dataFood'));
    if(dataFood) setCart(dataFood)
  },[])
  useEffect(() => {
    localStorage.setItem('dataFood', JSON.stringify(cart));
  },[cart])
  const value = {
    foods: [foods, setFoods],
    cart: [cart, setCart],
    addToCart: addToCart,
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
