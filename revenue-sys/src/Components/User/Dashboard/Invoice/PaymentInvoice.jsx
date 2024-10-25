
import UserPaymentDetails from './UserPaymentDetails';

const invoice = {
  seller: {
    name: 'John Doe',
    address: '123 Main St, San Francisco, CA 94101',
    contact: '(123) 456-7890'
  },
  buyer: {
    name: 'Jane Smith',
    address: '456 Elm St, Los Angeles, CA 90001'
  },
  number: 'INV-001',
  date: '2023-10-23',
  items: [
    { description: 'Service A', quantity: 2, unitPrice: 50, total: 100 },
    { description: 'Service B', quantity: 1, unitPrice: 100, total: 100 }
  ],
  totalAmount: 200,
  paymentTerms: 'Payment due within 30 days. Late fees apply.',
  taxInformation: 'Tax ID: 123-456-789'
};

const UserInvoice = () => {
  return (
    <div className="App grid grid-cols-3 gap-2">
      <UserPaymentDetails invoice={invoice}/>
      <UserPaymentDetails invoice={invoice}/>
      <UserPaymentDetails invoice={invoice}/>
      <UserPaymentDetails invoice={invoice}/>
      <UserPaymentDetails invoice={invoice}/>
      <UserPaymentDetails invoice={invoice}/>
    </div>
  );
};

export default UserInvoice;
