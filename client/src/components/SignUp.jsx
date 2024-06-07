import { useState } from "react";

const SignUp = ()=>{
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    return (
        <div  className="flex justify-center h-screen" >
        <div className="my-auto">
            <div>
                Sign Up Here
            </div>
            <div>
                <div>
                    <label htmlFor="fname">First Name</label>
                    <br />
                    <input type="text" id="fname" onChange={(e)=>{setFname(e.target.value)}}  className="border-2" required/>
                </div>
                <div>
                    <label htmlFor="lname">Last Name</label>
                    <br />
                    <input type="text" id="lname" onChange={(e)=>{setLname(e.target.value)}} className="border-2" required/>
                </div>
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
                    <label htmlFor="cpassword">Confirm Passoword</label>
                    <br />
                    <input type="password" id="cpassword" onChange={(e)=>{setCpassword(e.target.value)}} className="border-2" required/>
                </div>
                <div>
                    <button onClick={()=>{}}>SignUp</button>
                </div>
            </div>
        </div>
        </div>
    )
}


export default SignUp;