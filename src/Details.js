import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Details(){
    const[data , setdata] = useState([])
    const {emp} = useParams();

   async function ashu(){
      const ashi = await axios.get("http://localhost:2337/Rajput/"+emp)
      console.log(ashi)
      setdata(ashi.data)

    }
    useEffect(()=>{
        ashu()
    },[])

    return(
        <div className="">
            <div className="card">
               
            
        <h1 style={{border:"1px solid black", fontFamily:"serif", textShadow:"3px 2px 2px lightpink" ,backgroundColor: "rgba(255, 228, 196, 0.736)" , width : "100%"  }}>This is the details</h1>
        { <div className="cards">
            <div className="next" >
        <h4>The Developer Name is : <pre><span style={{fontFamily : "cursive", color: "red" }}>{data.name} </span></pre> ({data.id})</h4>
        <h4>This is the Email : <pre><span style={{fontFamily : "cursive", color: "red"}}> {data.email} </span></pre> </h4>
        <h4>This is a contact No. :<pre><span style={{fontFamily : "cursive", color: "red"}}>{data.phone}</span></pre></h4>
        <h4>This is the course :<pre><span style={{fontFamily : "cursive", color: "red"}}>{data.class}</span></pre></h4>
        </div>
        <Link to="/" className="btn btn-outline-info">Back <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg> </Link>
          </div>
    }
        </div>
        </div>
        
    )
}
export default Details;