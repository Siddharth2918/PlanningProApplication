import { useState } from "react";

const SignIn = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div  className="flex justify-center h-screen" >
        <div className="my-auto">
            <div>
                Sign In Here
            </div>
            <div>
                <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} className="border-2" required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" id="password" onChange={(e)=>{setPassword(e.target.value)}} className="border-2" required/>
                </div>
                <div>
                    <button onClick={()=>{}}>SignIn</button>
                </div>
            </div>
        </div>
        </div>
    )
}


export default SignIn;