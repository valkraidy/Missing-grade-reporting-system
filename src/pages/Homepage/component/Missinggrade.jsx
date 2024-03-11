import "../css/index.css";
import Hearder from "./Hearder"
import Footer from "./Footer"



const missinggrade = () => {
  return (
  
    
   
   <>
<div>
<Hearder />


<div className = "center">
 <div className ="containerr">

 <div className="login-container">
      <form className="loginn-form" >
        <h2>Missing Grade Form.</h2>
        <label htmlFor="username">Course name:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter course name"
          // value={username}
          // onChange={(e) => setUserId(e.target.value)}
          required
        />

        <label htmlFor="password">Instructors name:</label>
        <input
          type="password"
          placeholder="Enter instructors name"
          id="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          required
        />
          <label htmlFor="email">Expected grade:</label>
        <input
          type="text"
          placeholder="Enter experted grade"
          id="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          required
        />

<label htmlFor="message">Explanation:</label>
        <textarea
          type="message"
          placeholder="Let us know why you expect that grade..."
          id="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
        {/* <p>Don&apos;t have an account? <a href="/Signup">Sign up</a></p> */}
      </form>
    </div>
    </div>

 </div> 

</div>
  
<Footer />

</>

  
  )

}

export default missinggrade;
