import React , { useState } from 'react';

const dateAndTime = () => {
    const [date, setDate] = useState();
    const[time, setTime] = useState();
    
    
     const sendRequest = async () => {
        try{
            const response = await fetch ('http://localhost:5000/date');
            const responseData = await response.json();
            console.log(responseData);
            if(!response.ok){
                 throw new Error(responseData.message);
            }
            setDate(responseData.dateString);
            setTime(responseData.time);

            } catch(err){
                console.log(err);
            }
    }

    return (
        <React.Fragment>
            <button onClick={sendRequest}>Click</button>
            <h3>Date: {date}</h3>
            <h3>Time: {time}</h3>
        </React.Fragment>
    )
}

export default dateAndTime;