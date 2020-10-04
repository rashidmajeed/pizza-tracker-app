import React from "react";

function Cart() {
  return (
    <>
      <section className="cart">
        <div class="empty-cart py-16">
          <div class="container mx-auto text-center">
            <h1 class="text-3xl font-bold mb-2">Cart Empty 😕</h1>
            <p class="text-gray-500 text-lg mb-12">
              You probably haven't ordered a pizza yet. <br />
              To order a pizza, go to the main page.
            </p>
            <img
              class="w-2/5 mx-auto"
              src={process.env.PUBLIC_URL + "/img/empty-cart.png"}
              alt="empty-cart"
            />
            <a
              href="/"
              class="inline-block px-6 py-2 rounded-full btn-primary text-white font-bold mt-12"
            >
              Go back
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
