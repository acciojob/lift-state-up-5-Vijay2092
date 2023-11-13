import React, { useState } from 'react';


const Login = ({isLoggedIn, setIsLoggedIn}) =>{
    const [data, setData] = useState({username :'', password:''});


    const handleChage =(e)=>{
        console.log(e.target, e.target.name);
        setData({...data,[e.target.name]: e.target.value});

    };

    return (
    <div>
        {isLoggedIn ? (<p>Your are logged in!</p>) : (
         <form>
            <div>
                <lable htmlFor ="username">Username:</lable>
                <input 
                type="text"
                 id='username' 
                 name ='username'  
                 value={data.username} 
                 onChange={handleChage}/>
            </div>
            <div>
                <lable htmlFor ="password">Password:</lable>
                <input 
                type="password" 
                id='password' 
                name ='password' 
                value={data.password}
                onChange={handleChage} />
            </div>
            <button onClick={() => setIsLoggedIn(true)}>
                Login
            </button>
         </form>
        )}
       
    </div>
    );
};


export default Login;