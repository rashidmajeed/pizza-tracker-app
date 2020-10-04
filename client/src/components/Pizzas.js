import React from "react";
import PizzaItem from "./PizzaItem";

function Pizzas() {
  return (
    <>
      <section class="menu container mx-auto py-8">
      <h1 class="text-center text-4xl font-bold py-5 mb-8">All Pizzas</h1>
        <PizzaItem />
      </section>
    </>
  );
}

export default Pizzas;
