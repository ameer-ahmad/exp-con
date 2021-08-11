import React from 'react';
import Payment from './Payment';
import Nav from './Nav';
import Footer from './Footer';

const PaymentPage = () => {
    return (
        <div className="paymentPage">
            <Nav/>
            <Payment/>
            <Footer/>
        </div>
    )
}

export default PaymentPage;