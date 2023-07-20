import { useState } from "react";
import axios from "axios";

function Register (){

    const [form, setForm] = useState();

    const updateState = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        setForm({...form, [name]: value});
    }

    const register = (event) =>{
        event.preventDefault();
        console.log(form);
        axios.post("http://localhost:9091/user/register", form).then(
            response =>{
                console.log(response);
                alert("registered sucessfully");
            },
            error => {
                console.log(error);
            }
        )
    }
    return (
        <>
        <div><br></br><br></br><br></br>
         <div className="container mt-3">
                <form>
                    <div className="row">
                        <div className="col">
                            <input  onChange = {updateState} type  ="text" className="form-control" placeholder="Enter email" name="email" />
                        </div><br></br>
                        <div className="col">
                            <input onChange = {updateState} type="text" className="form-control" placeholder="Enter username" name="username" />
                        </div>
                    </div> <br></br>
                        <div className="col">
                            <input onChange = {updateState}  type="text" className="form-control" placeholder="Enter password" name="password" />
                        </div><br></br>
                        <div className="col">
                            <button  onClick={register} className="btn btn-primary">Register</button>
                        </div>
                  
                </form>
            </div>
            </div>
        </>
    )
}

export default Register;