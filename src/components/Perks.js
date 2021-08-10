import React from 'react';

const Perks = () => {
    return (
        <div className="perks">
            <h2>PERKS</h2>
            <div className="perkContainer">
                <div className="perk red">
                    <hr className="red" />
                    <h3>Subscription Payment Model</h3>
                    <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                </div>
                <div className="perk blue">
                    <hr className="blue" />
                    <h3>No Fee Cancelation Policy</h3>
                    <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                </div>
                <div className="perk yellow">
                    <hr className="yellow" />
                    <h3>Subscription Payment Model</h3>
                    <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                </div>
            </div>

            <button className="tryNow">TRY IT NOW</button>

        </div>
    )
}

export default Perks;