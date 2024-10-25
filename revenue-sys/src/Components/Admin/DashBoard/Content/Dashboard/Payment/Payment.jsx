import PaymentDetails from "./PaymentDetails";

const payment = {
  id: '123456',
  amount: '500.00',
  status: 'Completed',
  date: '2023-10-23',
  payer: {
    name: 'John Doe',
    email: 'john.doe@example.com'
  },
  receiver: {
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
  },
  method: 'Credit Card'
};

const Payment = () => {
  return (
    <div className="App grid grid-cols-3 gap-2">
      <PaymentDetails payment={payment} />
      <PaymentDetails payment={payment} />
      <PaymentDetails payment={payment} />
      <PaymentDetails payment={payment} />
      <PaymentDetails payment={payment} />
      <PaymentDetails payment={payment} />
    </div>
  );
};

export default Payment;
