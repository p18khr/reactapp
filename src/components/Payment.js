import React, { useState } from "react";

export default function Payment() {
  const [amount, setAmount] = useState(100);


  const loadScript = (src) =>{
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
  }

  const initiatePayment = async() => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if(!res){
      alert("You are offline!... Failed to load Razorpay gateway")
    }

    const options = {
      key: "rzp_test_JjfSzaMNrb19Ek",
      currency: "INR",
      amount: amount,
      name: "Prakhar Punj Shrivastava",
      description: "Payment for GoJunglee.com",
      image:
        "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

      handler: function (response) {
        alert("Payment Successful! Payment id: "+response.razorpay_payment_id);
        window.location.reload();
      },
      prefill: {
        name: "Prakhar",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className=" my-5">
      <div style={{fontWeight:'bold'}}>Enter Amount to pay:</div>
      <br /><br/>
      <input
        type="number"
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        defaultValue={100}
      />
      <br /><br/>
      <button disabled={amount < 1 || amount === null} className="btn btn-primary" onClick={initiatePayment}>
        Pay {amount}
      </button>
    </div>
  );
}
