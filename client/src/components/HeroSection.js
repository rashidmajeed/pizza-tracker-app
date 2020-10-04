import React from "react";

function HeroSection() {
  return (
    <>
      <section className="herosection py-16">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/2">
            <h6 className="text-lg">
              <em>Are you hungry?</em>
            </h6>
            <h1 className="text-6xl font-bold">Don't wait !</h1>
            <button class="px-6 py-2 rounded-full text-white font-bold mt-4 btn-primary">Order Now</button>
          </div>
          <div className="w-1/2">
            <img
              src={process.env.PUBLIC_URL + "/img/hero-pizza.png"}
              alt="logo"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
