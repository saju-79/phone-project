import React from 'react';

const Firebase = () => {
    const handelFirebage=()=>{
        console.log("ami nozrul ")
    }
    return (
        <div>
            <h1> firebase page</h1>
            <button className=' btn btn-primary mt-3' onClick={handelFirebage}>submit</button>
            
        </div>
    );
};

export default Firebase;