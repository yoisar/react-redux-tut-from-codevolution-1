import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function HookCakeContainer() {
  const numbOfIceCream = useSelector(state => state.iceCream.numbOfIceCream);
  const distatch = useDispatch();

  return (
    <div>
      <h2> Hook - Number of IceCrem {numbOfIceCream}</h2>
      <button onClick={() => distatch(buyIceCream())}>Buy IceCrem </button>
    </div>
  );
}

export default HookCakeContainer;
