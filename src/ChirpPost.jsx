import React from 'react';

const ChirpPost = ({text}) => {
    return(
        <div>
            <li>
                
                {text}
                <p>
                    Time Posted**
                </p>
            </li>
        </div>
    );
};

export default ChirpPost; 