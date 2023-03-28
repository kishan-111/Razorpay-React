import React, { useEffect } from "react";

import "./App.css";
import displayRazorpay from "./utils/PaymentGateway";

const App = () => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  return (
    <button
          type="button"
          onClick={displayRazorpay}
          className="course-payment-button"
        >Pay</button>
  );
};

export default App;
