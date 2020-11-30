import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import ad from "./img/amazon-ad3.png";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      {/* src= amazon ad  */}
      <div className="checkout__left">
        <img className="checkout__ad" src={ad} alt="amazon ad" />

        {basket?.length === 0 ? (
          <div>
            <h3>your basket is empty</h3>
            <p>
              you have no items in your basket. to buy one or more items click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">your shopping basket</h2>

            {/* list of all of the checkout products */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
        {basket.length>0&&(
            <div className="checkbox__right">
                <Subtotal/>
            </div>
        )}
    </div>
  );
}

export default Checkout;
