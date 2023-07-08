import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Create(){
    const [get ,getit] = useState({
        name : "",
        email : "",
        phone : "",
        class : ""
    })
    
    function onchange(e){
        console.log(get)
        getit({
            ...get,
            [e.target.name] : e.target.value,      
        })
        console.log(e.target.value)
        console.log(get)
    }
    
   async function onclick(e){
    try{
    e.preventDefault(e);
    alert("Successfully Submitted")
      const aa = await axios.post("http://localhost:2337/Rajput",get)
      console.log(aa)
    }
    catch(error){
        console.log(error)
    }
    }

    
    return(
        <div>
            <div className="main row" style={{"textAlign" : "left"}}>
                <div className="max offset-lg-3 col-lg-6">
                    <div className="container"></div>

                    <div className="card">
                        <div className="card-title">
                            <h2 style={{textDecorationLine : "underline"}}>Employee Create</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">        
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input className="form-control" type="number" disabled ="disabled" onChange={(e)=>onchange(e)} name="id"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required ="required" className="form-control" type="text" onChange={(e)=>onchange(e)} name="name"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" type="email" onChange={(e)=>onchange(e)} name="email"></input>
                                    </div>
                                    <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input className="form-control" type="number" onChange={(e)=>onchange(e)} name="phone"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Class</label>
                                        <input className="form-control" type="text" onChange={(e)=>onchange(e)} name="class"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="min form-group">
                                        <button className="btn btn-outline-success" onClick={onclick}>Submit <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-dotted" viewBox="0 0 16 16">
  <path d="M2.5 0c-.166 0-.33.016-.487.048l.194.98A1.51 1.51 0 0 1 2.5 1h.458V0H2.5zm2.292 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zm1.833 0h-.916v1h.916V0zm1.834 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zM13.5 0h-.458v1h.458c.1 0 .199.01.293.029l.194-.981A2.51 2.51 0 0 0 13.5 0zm2.079 1.11a2.511 2.511 0 0 0-.69-.689l-.556.831c.164.11.305.251.415.415l.83-.556zM1.11.421a2.511 2.511 0 0 0-.689.69l.831.556c.11-.164.251-.305.415-.415L1.11.422zM16 2.5c0-.166-.016-.33-.048-.487l-.98.194c.018.094.028.192.028.293v.458h1V2.5zM.048 2.013A2.51 2.51 0 0 0 0 2.5v.458h1V2.5c0-.1.01-.199.029-.293l-.981-.194zM0 3.875v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 5.708v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 7.542v.916h1v-.916H0zm15 .916h1v-.916h-1v.916zM0 9.375v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .916v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .917v.458c0 .166.016.33.048.487l.98-.194A1.51 1.51 0 0 1 1 13.5v-.458H0zm16 .458v-.458h-1v.458c0 .1-.01.199-.029.293l.981.194c.032-.158.048-.32.048-.487zM.421 14.89c.183.272.417.506.69.689l.556-.831a1.51 1.51 0 0 1-.415-.415l-.83.556zm14.469.689c.272-.183.506-.417.689-.69l-.831-.556c-.11.164-.251.305-.415.415l.556.83zm-12.877.373c.158.032.32.048.487.048h.458v-1H2.5c-.1 0-.199-.01-.293-.029l-.194.981zM13.5 16c.166 0 .33-.016.487-.048l-.194-.98A1.51 1.51 0 0 1 13.5 15h-.458v1h.458zm-9.625 0h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zm1.834-1v1h.916v-1h-.916zm1.833 1h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg> </button>
                                        <Link to="/" className="btn btn-outline-danger">Back <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg> </Link>
                                        
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Create;