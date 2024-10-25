
const PaymentDetails = ({ payment }) => {
  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Payment Details</h1>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Payment Information</h2>
        <p>Payment ID: {payment.id}</p>
        <p>Amount: ${payment.amount}</p>
        <p>Status: {payment.status}</p>
        <p>Date: {payment.date}</p>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Payer's Information</h2>
        <p>Name: {payment.payer.name}</p>
        <p>Email: {payment.payer.email}</p>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Receiver's Information</h2>
        <p>Name: {payment.receiver.name}</p>
        <p>Email: {payment.receiver.email}</p>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Payment Method</h2>
        <p>{payment.method}</p>
      </div>
    </div>
  );
};

export default PaymentDetails;
