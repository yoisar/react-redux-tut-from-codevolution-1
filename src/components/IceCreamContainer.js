import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function HookCakeContainer() {
  const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream);
  const distatch = useDispatch();

  return (
    <div>
      <h2> Hook - Number of IceCrem {numOfIceCream}</h2>
      <button onClick={() => distatch(buyIceCream())}>Buy IceCrem </button>
    </div>
  );
}

export default HookCakeContainer;
