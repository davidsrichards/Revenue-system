import { useContext } from "react";
import ReportDetails from "./ReportDetails";
import ReportContext from "../../../../../Context/ReportContext/ReportContext";

const report = {
  customer: {
    name: 'John Doe',
    address: '123 Elm St, Springfield, IL, 62704',
    contact: '(555) 123-4567',
    email: 'john.doe@example.com'
  },
  transactionSummary: {
    totalTransactions: 15,
    totalAmountSpent: '$12,000'
  },
  purchaseHistory: [
    { date: '2024-10-01', description: 'Premium Membership', quantity: 1, unitPrice: '$1,000', total: '$1,000' },
    { date: '2024-10-10', description: 'SaaS Subscription', quantity: 1, unitPrice: '$500', total: '$500' },
    { date: '2024-10-15', description: 'Training Program', quantity: 3, unitPrice: '$2,000', total: '$6,000' },
    { date: '2024-10-20', description: 'Consultation', quantity: 2, unitPrice: '$2,500', total: '$5,000' }
  ],
  feedback: {
    satisfaction: 'Very Satisfied',
    comments: 'Great service, prompt support, will recommend.'
  },
  nextSteps: {
    followUpDate: '2024-11-01',
    recommendations: 'Offer loyalty rewards, schedule a check-in call.'
  },
  additionalNotes: 'Showed interest in advanced training programs, possible upsell opportunity.'
};

const Report = () => {
  const {report} = useContext(ReportContext)
  return (
    <div className="App">
      <ReportDetails report={report ?? ""} />
    </div>
  );
};

export default Report;
