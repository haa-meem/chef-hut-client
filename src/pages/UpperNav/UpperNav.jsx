import React, { useEffect, useState } from 'react';

const UpperNav = () => {
    const [chefs,setChefs]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(error=>console.error())
    },[])
    return (
        <div>
            <h2>Hey Guys</h2>
        </div>
    );
};

export default UpperNav;