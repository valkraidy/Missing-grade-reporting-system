 
import { useNavigate } from "react-router-dom"

const Herosection = () =>{
  const navigate = useNavigate();
  return(
    <>
    <div className="container">
      <div className="contents">
        <h1>Missing Grade Reporting System</h1>
        <h4> This system is designed to help students track and <br/>report grades that are  not recorded in their academic profiles... </h4>
        <button className="buttt" onClick={()=>navigate("Login")}>Log in</button>
         {/* <button className="butt" onClick={()=>navigate("Signup")}>Sign up</button>  */}
       
      </div>
        <div className="cont-img">
        <img src="src/images/system4.jpg" alt=" 3D Picture of a pgirl behind a laptop"/>

                   {/* <Routes>
                      <Route index element={<Homepage/>}/>
                      <Route path='/Login' element={<Login/>}/>
                      <Route path="/Signup" element={<Signup/>}/>
                 </Routes>  */}
        </div>
    </div>
    </>
  )
}

export default Herosection
