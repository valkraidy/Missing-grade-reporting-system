import "../css/index.css"
import "../css/Dashboard.css"
import Hearder from "./Hearder"
import { MdEmail } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { WiTime8 } from "react-icons/wi";
import Footer from "./Footer"
  

  


const Contact = () => {
  return (
    <div>
      <Hearder/>
    

      <div className="contact-instructors">
        <h2>Instructors Contact Page</h2>

      </div>


      <div className="tabular--wrapper">
              <div className="main--title">
                {/* Course display. */}
              </div>
              <div className="table--container">
                <table>
                  <thead>
                  <tr>
                    
                      <th>Course code</th>
                      <th>Lecturer<IoMdPerson /></th>
                     
                      <th>T/A</th>
                      <th>Lecture days</th>
                      <th> Time<WiTime8 /></th>
                      <th>Semester</th>
                      <th>Lecture Email <MdEmail />
</th>
                    </tr>
                    </thead>
                  <tbody>
                    <tr>
                      <td>
                        DCIT201
                      </td>
                      <td>Paul Armaah</td>
                      <td>N/A</td>
                      <td>Monday</td>
                      <td>1:30pm</td>
                      <td>2</td>
                      <td>paularmaah@gmail.com</td>
                      
                    </tr>
                    <tr>
                      <td>
                        DCIT203
                      </td>
                      <td>Aziz Dwunfor</td>
                      <td>N/A</td>
                      <td>Wednesday</td>
                      <td>1:30pm</td>
                      <td>2</td>
                      <td>azizdwomfoir@gmail.com</td>
                      
                    </tr>
                    <tr>
                      <td>
                        DCIT205
                      </td>
                      <td>Micheal Soli</td>
                      <td>Danquiver</td>
                      <td>Monday</td>
                      <td>7:30am</td>
                      <td>2</td>
                      <td>Michealsolo@gmail.com</td>
                      
                    </tr>
                    <tr>
                      <td>
                        DCIT207
                      </td>
                      <td>Micheal Tettey</td>
                      <td>N/A</td>
                      <td>Thursday</td>
                      <td>7:30am</td>
                      <td>2</td>
                      <td>tmacheal@gmail.com</td>
                      
                    </tr>
                    <tr>
                      <td>
                        DCIT209
                      </td>
                      <td>Enchil Ekow</td>
                      <td>Val Kraidy</td>
                      <td>Friday</td>
                      <td>2:00pm</td>
                      <td>2</td>
                      <td>enchillekow@gmail.com
                      </td>
                      
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

   <Footer/> 


          </div>
       
  )
}

export default Contact