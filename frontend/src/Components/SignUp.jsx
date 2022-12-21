import { useState } from "react";
import {useNavigate} from "react-router-dom"

function SignUp() {

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    const Submit = async () => {
        console.log(name, email, password)
        const result = await fetch("http://localhost:5000/register",{
            method: "post",
            body: JSON.stringify({name, email, password}),
            headers:{
                'Content-Type':'application/json'
            },
        } )
         let data = await result.json();
        console.warn( data)
        if(data){
            navigate('/')
        }
    }

    return ( <>
    <div className="sign-up">
        <h1>Register</h1>
        <input className="input-box" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" /> <br />
        <input className="input-box" value={email} type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" /> <br />
        <input className="input-box" value={password} type="password"  onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" /> <br />

        <button className="btn" onClick={Submit} >Register</button>
    </div>
    </> );
}

export default SignUp;