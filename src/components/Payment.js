import React from 'react';

const Payment = () => {
    return (
        <div className="payment">
            <h2>PAYMENT</h2>

            <h3>1. Select your plan</h3>
            <div className="paymentPlan">
                <div>
                    <input type="checkbox" name="basic" checked />
                    <label for="basic">BASIC</label>
                </div>
                <div>
                    <input type="checkbox" name="advanced" checked />
                    <label for="advanced">ADVANCED</label>
                </div>
                <div>
                    <input type="checkbox" name="pro" checked />
                    <label for="pro">PRO</label>
                </div>
            </div>
            <div className="personalInfo">
                <div className="billInfo">
                    <h3>2. Billing Information</h3>
                    <label for="name">FULL NAME</label>
                    <input type="text" name="name" />
                    <label for="address">BILLING ADDRESS</label>
                    <input type="text" name="address" />
                </div>
            </div>
        </div>
    )
}

export default Payment;