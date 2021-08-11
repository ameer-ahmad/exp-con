import React from 'react';
import {Link} from 'react-router-dom';

const Pricing = () => {
    return (
        <div className="pricing">
            <h2>PRICING</h2>
            <h3>Test out our app today! Choose from three subscription Based payment models.</h3>
            <div className="priceContainer">
                <div className="price">
                    <h4 className="plan">BASIC</h4>
                    <hr/>
                    <h4 className="periodic">MONTHLY</h4>
                    <h4 className="cost">$9</h4>
                    <ul>
                        <li>Very good</li>
                        <li>Amazing</li>
                        <li>Perfect job</li>
                        <li>Love this</li>
                        <li>It's so good</li>
                        <li>Features</li>
                    </ul>
                    <Link to="/payment"><button>SELECT</button></Link>
                </div>
                <div className="price">
                    <h4 className="plan">ADVANCED</h4>
                    <hr/>
                    <h4 className="periodic">YEARLY</h4>
                    <h4 className="cost">$99</h4>
                    <ul>
                        <li>Very very good</li>
                        <li>Even Amazing</li>
                        <li>Perfect job</li>
                        <li>Love this more</li>
                        <li>It's so so good</li>
                        <li>More Features</li>
                    </ul>
                    <button>SELECT</button>
                </div>
                <div className="price">
                    <h4 className="plan">PRO</h4>
                    <hr/>
                    <h4 className="periodic">YEARLY</h4>
                    <h4 className="cost">$120</h4>
                    <ul>
                        <li>Very very good</li>
                        <li>Even more</li>
                        <li>Perfect job</li>
                        <li>Love this more</li>
                        <li>It's so so good</li>
                        <li>More Features</li>
                    </ul>
                    <button>SELECT</button>
                </div>
            </div>
        </div>
    )
}

export default Pricing;