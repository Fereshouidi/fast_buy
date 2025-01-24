// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const PayPalCheckout = () => {
//   return (
//     <PayPalScriptProvider options={{ clientId: "your-client-id-here" }}>
//       <PayPalButtons
//         createOrder={(data, actions) => {
//           if (!actions?.order) {
//             console.error("actions.order is undefined");
//             return Promise.reject(new Error("actions.order is undefined"));
//           }
//           return actions.order.create({
//             intent: "CAPTURE", // وضع intent هنا في المستوى الأساسي
//             purchase_units: [
//               {
//                 amount: {
//                   currency_code: "USD", // العملة المستخدمة
//                   value: "10.00", // المبلغ الإجمالي
//                 },
//               },
//             ],
//           });
//         }}
//         onApprove={(data, actions) => {
//           if (!actions?.order) {
//             console.error("actions.order is undefined");
//             return Promise.reject(new Error("actions.order is undefined"));
//           }
//           return actions.order.capture().then((details) => {
//             console.log(
//               "Transaction completed by " + details.payer?.name?.given_name
//             );
//           });
//         }}
//         onError={(err) => {
//           console.error("Payment failed:", err);
//         }}
//       />
//     </PayPalScriptProvider>
//   );
// };

// export default PayPalCheckout;
