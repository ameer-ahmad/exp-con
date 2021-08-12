import React from 'react';
import {Link} from 'react-router-dom';

const Purchase = () => {
    return (
        <div className="purchase">
            <div>
                <h2>GET EXP|CON NOW</h2>
                <h3>Purchase and download the app.</h3>
            </div>
            <Link to="/pricing"><button>TRY IT NOW</button></Link>
        </div>
    )
}

export default Purchase;