import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ReportContext from '../../../Context/ReportContext/ReportContext'

// reducer function

const reducer = (state, action) => {
  switch (action.type) {
    case 'name': return {...state, name: action.payload}
    case 'contact': return {...state, contact: action.payload}
    case 'address': return {...state, address: action.payload}
    case 'email': return {...state, email: action.payload}
    case 'totalTran': return {...state, totalTransaction: action.payload}
    case 'totalAmountSpent': return {...state, totalAmountSpent: action.payload}
    case 'date': return {...state, date: action.payload}
    case 'history': return {...state, history: action.payload}
    case 'quantity': return {...state, quantityNumber: action.payload}
    case 'amount': return {...state, amount: action.payload}
    case 'total': return {...state, total: action.payload}
    default:
        break;
  }
}

const ACTIONS =  {
 NAME: "name",
 CONTACT: "contact",
 ADDRESS: "address",
 EMAIL: "email",
 TOTALTRANS: "totalTran",
 TOTALAMOUNTSPENT:"totalAmountSpent",
 DATE: "date",
 HISTORY: "history",
 QUANTITY: "quantity",
 AMOUNT: "amount",
 TOTAL: "total"
}

function GenerateInvoice() {
   // navigate

   const navigate = useNavigate();
   const location = useLocation()

    // defining the reducer
    const [state, dispatch] = useReducer(reducer, {name: "", address: "", contact: "", email: "", totalTransaction: "", totalAmountSpent: "", date: "", history: "",  quantityNumber: "", amount: "", total: "" })

   // variables
    const {name, address, contact, email, totalTransaction, totalAmountSpent, date, history, quantityNumber, amount, total} = state;

    // context
    const {setReport} = useContext(ReportContext)

    // generate

    const generate = () =>{
        if(name && contact && address && email && totalTransaction && totalAmountSpent && date && history && quantityNumber && amount && total){
            setReport({name, contact, address, email, totalTransaction, totalAmountSpent, date, history, quantityNumber, amount, total})
            console.log('name ' + name)
            console.log('address ' + address)
            console.log('contact ' + contact)
            console.log('email ' + email)
            console.log('total tarnsaction ' + totalTransaction)
            console.log('total amount spent ' + totalAmountSpent)
            console.log('date ' + date)
            console.log('history ' + history)
            console.log('quantity number ' + quantityNumber)
            console.log('amount ' + amount)
            console.log('total ' + total)

            // navigate user
            
            const currentPath = location.pathname;
            const newPath = currentPath.replace('user-generate-invoice', "user-invoice-report");
            return navigate(newPath, {replace: true, relative: true})

        }
    }


  return (
    <div className='max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md report-container space-y-4'>
        <h1 className='text-3xl font-bold mb-4'>Generate Report</h1>
        <div>
            <h2 className=' text-xl font-semibold'>Report Information</h2>
            <input type="text" placeholder='name'className='border p-2' value={name} onChange={(e) => dispatch({type: ACTIONS.NAME, payload: e.target.value})}/>
            <input type="text" placeholder='contact' value={contact} onChange={(e) => dispatch({type: ACTIONS.CONTACT, payload: e.target.value})}/>
            <input type="text" placeholder='address' value={address} onChange={(e) => dispatch({type: ACTIONS.ADDRESS, payload: e.target.value})}/>
            <input type="text" placeholder='email' value={email} onChange={(e) => dispatch({type: ACTIONS.EMAIL, payload: e.target.value})}/>
        </div>

        <div>
            <h2 className=' text-xl font-semibold'>Transaction Summary</h2>
            <input type="text" placeholder='Total Transaction' value={totalTransaction} onChange={(e) => dispatch({type: ACTIONS.TOTALTRANS, payload: e.target.value})}/>
            <input type="text" placeholder='Total Amount Spent' value={totalAmountSpent} onChange={(e) => dispatch({type: ACTIONS.TOTALAMOUNTSPENT, payload: e.target.value})}/>
        </div>

        <div>
            <h2 className=' text-xl font-semibold'>Purchase History</h2>
            <input type="date" value={date} onChange={(e) => dispatch({type: ACTIONS.DATE, payload: e.target.value})}/>
            <select name="" id="" className='border p-2 rounded-md w-full mb-2' value={history} onChange={(e) => dispatch({type: ACTIONS.HISTORY, payload: e.target.value})}>
                <option value="Premium Membership">Premium Membership</option>
                <option value="SaaS Suscription">SaaS Suscription</option>
                <option value="Training Programme">Training Programme</option>
                <option value="Consultant">Consultant</option>
            </select>

            <input type="text" placeholder='Number of Quantity' value={quantityNumber} onChange={(e) => dispatch({type: ACTIONS.QUANTITY, payload: e.target.value})}/>
            <input type="text" placeholder='Amount' value={amount} onChange={(e) => dispatch({type: ACTIONS.AMOUNT, payload: e.target.value})}/>
            <input type="text" placeholder='Total' value={total} onChange={(e) => dispatch({type: ACTIONS.TOTAL, payload: e.target.value})}/>
        </div>
        <div>
            <button className='bg-blue-400 w-full p-2 rounded-md text-xl text-white shadow-md' onClick={() => generate()}>Generate</button>
        </div>
    </div>
  )
}

export default GenerateInvoice;