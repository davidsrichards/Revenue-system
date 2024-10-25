
const ReportDetails = ({ report }) => {
const date = Date(2024, 10).toLocaleLowerCase('default', {month: 'long'});

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Customer Report</h1>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Customer Information</h2>
        <p>Name: {report.name}</p>
        <p>Address: {report.address}</p>
        <p>Contact Details: {report.contact}</p>
        <p>Email: {report.email}</p>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Transaction Summary</h2>
        <p>Total Transactions: $ {report.totalTransaction}</p>
        <p>Total Amount Spent: $ {report.totalAmountSpent}</p>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Purchase History</h2>
        <table className="w-full mb-4">
          <thead>
            <tr>
              <td className="border p-2 font-semibold">Date</td>
              <td className="border p-2 font-semibold">Quantity</td>
              <td className="border p-2 font-semibold">Unit Price</td>
              <td className="border p-2 font-semibold">Total</td>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border p-2">{report.date}</td>
                <td className="border p-2">{report.quantityNumber}</td>
                <td className="border p-2">$ {report.amount}</td>
                <td className="border p-2">$ {report.total}</td>
              </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Customer Feedback</h2>
        <p>Overall Satisfaction: Very Satisfied</p>
        <p>Comments: Great service, prompt support, will recommend.</p>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Next Steps</h2>
        <p>Follow-Up Date: {date.slice(0, date.indexOf('gmt'))}</p>
        <p>Recommendations: Offer loyalty rewards, schedule a check-in call.</p>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Additional Notes</h2>
        <p>Showed interest in advanced training programs, possible upsell opportunity.</p>
      </div>
    </div>
  );
};

export default ReportDetails;
