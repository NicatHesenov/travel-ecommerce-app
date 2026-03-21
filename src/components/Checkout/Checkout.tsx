import "./checkout.scss";
import CheckoutSteps from "./CheckoutSteps";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-container">
        <CheckoutSteps />
      </div>
    </div>
  );
}

export default Checkout;
