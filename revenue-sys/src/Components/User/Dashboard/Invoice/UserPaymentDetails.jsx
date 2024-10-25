
const UserInvoiceDetails = ({ invoice }) => {
    return (
      <div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Invoice</h1>
        
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Seller's Information</h2>
          <p>{invoice.seller.name}</p>
          <p>{invoice.seller.address}</p>
          <p>{invoice.seller.contact}</p>
        </div>
        
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Buyer's Information</h2>
          <p>{invoice.buyer.name}</p>
          <p>{invoice.buyer.address}</p>
        </div>
        
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Invoice Details</h2>
          <p>Invoice Number: {invoice.number}</p>
          <p>Date: {invoice.date}</p>
        </div>
        
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="border p-2">Description</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Unit Price</th>
              <th className="border p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.description}</td>
                <td className="border p-2">{item.quantity}</td>
                <td className="border p-2">{item.unitPrice}</td>
                <td className="border p-2">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Total Amount</h2>
          <p>{invoice.totalAmount}</p>
        </div>
        
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Payment Terms</h2>
          <p>{invoice.paymentTerms}</p>
        </div>
        
        {invoice.taxInformation && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Tax Information</h2>
            <p>{invoice.taxInformation}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default UserInvoiceDetails;
  