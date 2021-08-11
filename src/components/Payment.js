import React from 'react';

const Payment = () => {
    return (
        <div className="payment">
            <h2>PAYMENT</h2>

            <h3>1. Select your plan</h3>
            <div className="paymentPlan">
                <label className="round">BASIC
                    <input type="radio" name="plan" value="basic" id="basic" />
                    <span className="checkmark"></span>
                </label>
                <label className="round">ADVANCED
                    <input type="radio" name="plan" value="advanced" id="advanced" />
                    <span className="checkmark"></span>
                </label>
                <label className="round">PRO
                    <input type="radio" name="plan" value="pro"  id="pro" />
                    <span className="checkmark"></span>
                </label>
            </div>
            <div className="personalInfo">
                <div className="billInfo">
                    <h3>2. Billing Information</h3>
                    <label for="name">FULL NAME</label>
                    <input type="text" name="name" />
                    <label for="address">BILLING ADDRESS</label>
                    <input type="text" name="address" />
                    <div className="subForm">
                        <div className="subSubForm">
                            <label for="city">CITY</label>
                            <input type="text" name="city" />
                        </div>
                        <div className="subSubForm">
                            <label for="postal">POSTAL CODE</label>
                            <input type="text" name="postal" />
                        </div>
                    </div>
                    <label for="country">COUNTRY</label>
                    <input type="text" name="country" />
                </div>
                <div className="cardInfo">
                    <h3>2. Credit Card Information</h3>
                    <label for="cardName">CARDHOLDER'S NAME</label>
                    <input type="text" name="cardName" />
                    <label for="cardNum">CARD NUMBER</label>
                    <input type="text" name="cardNum" />
                    <div className="subForm">
                        <div className="subSubForm">
                            <label for="expiryMonth">EXPIRY MONTH</label>
                            <input type="text" name="expiryMonth" />
                        </div>
                        <div className="subSubForm">
                            <label for="expiryYear">EXPIRY YEAR</label>
                            <input type="text" name="expiryYear" />
                        </div>
                    </div>
                    <label for="cvv">CVV</label>
                    <input type="text" name="cvv" />
                </div>
            </div>
            <small className="terms">By continuing, I acknowledge that I’ve read and agree to the <span>Terms of Service</span> & <span>Privacy Policy.</span></small>
            <button className="download">DOWNLOAD</button>
        </div>
    )
}

export default Payment;