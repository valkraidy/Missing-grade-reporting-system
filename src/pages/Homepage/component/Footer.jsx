import "../css/index.css"
import { useNavigate } from "react-router-dom" 
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div>
        <footer className="page-footer">
            
            <div className="socials">
          <a href=""> <FaFacebookF /></a>  
          <a href="">  <FaLinkedinIn /> </a>  
          <a href=""> <FaInstagram /> </a>  
          <a href="">  <FaXTwitter /></a>  
          <a href=""><FaGooglePlusG /></a>

            </div>
            <div className="footer-nav">
            <ul className="/">
               <a onClick={()=>navigate("Homepage")}><li>Home</li></a>
            <a onClick={()=>navigate("Missinggrade")}><li >Missing grade</li></a> 
               <a onClick={()=>navigate("Dashboard")}><li>Dashboard</li></a>
               <a onClick={()=>navigate("Contact")}><li>Contact</li></a>
               <a onClick={()=>navigate("Faqs")}><li>FAQs</li></a>
             </ul>
                
            </div>
            
            <div className="foot">
                <p>All rights reserved || MGRS 2024.</p>
            </div>
        </footer>
    </div>
  )
}
export default Footer