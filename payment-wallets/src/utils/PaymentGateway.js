export default async function displayRazorpay() {
  const data = await fetch("http://localhost:1337/razorpay", {
    method: "POST",
  }).then((t) => t.json());

  console.log(data);

  const options = {
    key: process.env.RAZORPAY_KEY_ID,
    currency: data.currency,
    amount: data.amount,
    name: "Sadhna Track",
    description: "Integration of Razorpay with React",
    image: "http://localhost:1337/logo.png",
    order_id: data.id,
    handler: function (response) {
      alert("PAYMENT ID ::" + response.razorpay_payment_id);
      alert("ORDER ID :: " + response.razorpay_order_id);
    },
    prefill: {
      name: "Kishan Kumar",
      email: "kishankr7909@gmail.com",
      contact: "9999999999",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
