import React from "react";
import "./styles.css";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemsContainer from "./components/ItemsContainer";

export default function App() {
  return (
    <div className="App">
      <ItemsContainer cake />
      <ItemsContainer />
      <HookCakeContainer />
      <CakeContainer />
      <IceCreamContainer />
      <NewCakeContainer />
    </div>
  );
}
