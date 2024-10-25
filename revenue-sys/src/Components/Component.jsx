import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Signin from './Auth/SignIn/Signin'
import Dashboard from '../Components/Admin/DashBoard/DashBoard'
import Statistics from './Admin/DashBoard/Content/Dashboard/Statistics/Statistics'
import ManageUser from './Admin/DashBoard/Content/Dashboard/ManageUser/ManageUser'
import ManageBusiness from './Admin/DashBoard/Content/Dashboard/ManageBusiness/ManageBusiness'
import Invoice from './Admin/DashBoard/Content/Dashboard/Invoice/Invoce'
import Payment from './Admin/DashBoard/Content/Dashboard/Payment/Payment'
import Localities from './Admin/DashBoard/Content/Dashboard/Localities/Localities'
import GenerateReport from './Admin/DashBoard/Content/Dashboard/Report/GenerateReport'
import Report from './Admin/DashBoard/Content/Dashboard/Report/Report'
import LoginPage from './User/Login/Login'
import UserDashboard from './User/Dashboard/Dashboard'
import UserPayment from './User/Dashboard/Payment/Payment'
import UserInvoice from './User/Dashboard/Invoice/PaymentInvoice'
import GenerateInvoice from './User/Dashboard/UserGenerator/GenerateInvoice'
import UserInvoiceReport from './User/Dashboard/UserGenerator/InvoiceReport'


function Component() {
  return (
    <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/admin-login' element={<Signin/>}/>
        <Route path='/admin-dashboard' element={<Dashboard/>}>
        <Route index element={<Statistics/>}/>
        <Route path='statistics' element={<Statistics/>}/>
        <Route path='manage-user' element={<ManageUser/>}/>
        <Route path='manage-business' element={<ManageBusiness/>}/>
        <Route path='invoice' element={<Invoice/>}/>
        <Route path='report' element={<GenerateReport/>}/>
        <Route path='view-report' element={<Report/>}/>
        <Route path='payment' element={<Payment/>}/>
        <Route path='localities' element={<Localities/>}/>
        </Route>
      <Route path='*' element={<Signin/>}/>
      <Route path='/user-dashboard' element={<UserDashboard/>}>
      <Route path='user-payment' element={<UserPayment/>}/>
      <Route path='user-invoice' element={<UserInvoice/>}/>
      <Route path='user-generate-invoice' element={<GenerateInvoice/>}/>
      <Route path='user-invoice-report' element={<UserInvoiceReport/>}/>
      </Route>
    </Routes>
  )
}

export default Component