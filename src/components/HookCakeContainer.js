import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HookCakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const distatch = useDispatch();
  // => state.numOfCakes);
  return (
    <div>
      <h2> Hook - Number of Cakes {numOfCakes}</h2>
      <button onClick={() => distatch(buyCake())}>Buy Cake </button>
    </div>
  );
}

export default HookCakeContainer;
