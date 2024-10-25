
const ReportDetails = ({ report }) => {
    return (
      <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Customer Report</h1>
        
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Customer Information</h2>
          <p>Name: {report.customer.name}</p>
          <p>Address: {report.customer.address}</p>
          <p>Contact Details: {report.customer.contact}</p>
          <p>Email: {report.customer.email}</p>
        </div>
        
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Transaction Summary</h2>
          <p>Total Transactions: {report.transactionSummary.totalTransactions}</p>
          <p>Total Amount Spent: {report.transactionSummary.totalAmountSpent}</p>
        </div>
        
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Purchase History</h2>
          <table className="w-full mb-4">
            <thead>
              <tr>
                <th className="border p-2">Date</th>
                <th className="border p-2">Item Description</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Unit Price</th>
                <th className="border p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {report.purchaseHistory.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">{item.date}</td>
                  <td className="border p-2">{item.description}</td>
                  <td className="border p-2">{item.quantity}</td>
                  <td className="border p-2">{item.unitPrice}</td>
                  <td className="border p-2">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Customer Feedback</h2>
          <p>Overall Satisfaction: {report.feedback.satisfaction}</p>
          <p>Comments: {report.feedback.comments}</p>
        </div>
        
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Next Steps</h2>
          <p>Follow-Up Date: {report.nextSteps.followUpDate}</p>
          <p>Recommendations: {report.nextSteps.recommendations}</p>
        </div>
        
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Additional Notes</h2>
          <p>{report.additionalNotes}</p>
        </div>
      </div>
    );
  };
  
  export default ReportDetails;
  