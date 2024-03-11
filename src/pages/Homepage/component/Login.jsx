import "../css/index.css";
import  { useAuth0 } from '@auth0/auth0-react';


const Login = () => {
      const { loginWithRedirect , isAuthenticated } = useAuth0();
      
      return (  
            <>
            {/* <div className="visme_d" data-title="Untitled Project" data-url="rx9drx6z-untitled-project?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="44538"></div><script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script> */}
                  <div className="log">
                        <div className="password-pic">
                              <img src="src/images/system2.jpg" alt=""/>
                        </div> 
                        <div className="login-container">

                              <form className="login-form" >
                                          <h2>Login</h2>
                                          <label htmlFor="username">Student ID:</label>
                                          <input
                                                type="text"
                                                id="username"
                                                placeholder="Enter your ID"
                                                
                                                required
                                          />

                                    <label htmlFor="password">Pin:</label>
                                    <input
                                          type="password"
                                          placeholder="Enter your pin"
                                          id="password"
                                          
                                          required
                                    />

                                    {!isAuthenticated && (

                                                <button type="submit" onClick={() => loginWithRedirect()}>
                                                      Login 
                                                </button>
                                          )
                                    }

                                    {/* <p>Don&apos;t have an account? <a href="/Signup">Sign up</a></p> */}
                              </form>
                        </div>
                  </div>
            </>
      )
};

export default Login;


