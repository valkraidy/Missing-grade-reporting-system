import "../css/index.css"
import { MdEmail } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { WiTime8 } from "react-icons/wi";
import Hearder from "./Hearder"
import Footer from "./Footer";

const Gradereport = () => {
  return (
    <div>
        <Hearder/>
         <div className="contact-instructors">
        <h2>Grade Report Page</h2>

      </div>
      <div className="tabular--wrapper">
              <div className="main--title">
                2O22/2023 Academic year(First semester). 
              </div>
              <div className="table--container">
                <table>
                  <thead>
                  <tr>
                    
                      <th>Course code</th>
                      <th>Lecturer<IoMdPerson /></th>
                     
                      <th>Course name</th>
                      <th>Credit hours</th>
                      <th> Time<WiTime8 /></th>
                      <th>Grade </th>
                      <th>Lecture Email <MdEmail />
</th>
                    </tr>
                    </thead>
                  <tbody>
                    <tr>
                      <td>
                        DCIT101
                      </td>
                      <td>Prof. Ferdinard Koffie</td>
                      <td>Introduction to Computer Science</td>
                      <td>3</td>
                      <td>1:30pm</td>
                      <td>A</td>
                      <td>paularmaah@gmail.com</td>
                      
                    </tr>
                    <tr>
                      <td>
                        DCIT103
                      </td>
                      <td>Aziz Dwunfor</td>
                      <td>Introduction to Hardware Fundamentals</td>
                      <td>3</td>
                      <td>1:30pm</td>
                      <td>A</td>
                      <td>azizdwomfoir@gmail.com</td>
                      
                    </tr>
                    <tr>
                      <td>
                        DCIT105
                      </td>
                      <td>Dr. Solomon Mensah</td>
                      <td>Math for IT professionals</td>
                      <td>3</td>
                      <td>7:30am</td>
                      <td>B</td>
                      <td>Michealsolo@gmail.com</td>
                      
                    </tr>
                    <tr>
                      <td>
                        STAT111
                      </td>
                      <td>Micheal Tettey</td>
                      <td>Introduction to Statistics and Probability</td>
                      <td>3</td>
                      <td>7:30am</td>
                      <td>A</td>
                      <td>tmacheal@gmail.com</td>
                      
                    </tr>
                    <tr>
                      <td>
                        ECONS101
                      </td>
                      <td>Enchil Ekow</td>
                      <td>Introduction to Economics I</td>
                      <td>3</td>
                      <td>2:00pm</td>
                      <td>C</td>
                      <td>enchillekow@gmail.com
                      </td>
                      
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="tabular--wrapper">
              <div className="main--title">
                 2022/2023 Academic year(Second semester). 
              </div>
              <div className="table--container">
                <table>
                  <thead>
                  <tr>
                    
                      <th>Course code</th>
                      <th>Course lecturer<IoMdPerson /></th>
                     
                      <th>Course name</th>
                      <th>Credit hours</th>
                      <th> Time<WiTime8 /></th>
                      <th>Grade</th>
                      <th>Lecture Email <MdEmail />
</th>
                    </tr>
                    </thead>
                  <tbody>
                    <tr>
                      <td>
                        DCIT102
                      </td>
                      <td>Micheal Soli </td>
                      <td>Fundamentals of Programming</td>
                      <td>3</td>
                      <td>1:30pm</td>
                      <td>B</td>
                      <td>paularmaah@gmail.com</td>
                      
                    </tr>
                    <tr>
                      <td>
                        UGBS104
                      </td>
                      <td>John Dwunfor</td>
                      <td>Principle of Maanagement</td>
                      <td>3</td>
                      <td>1:30pm</td>
                      <td>B+</td>
                      <td>johndwomfoir@gmail.com</td>
                      
                    </tr>
                    <tr>
                      <td>
                        STAT112
                      </td>
                      <td>Richard Minkah</td>
                      <td>Introduction to Statistics and Probability</td>
                      <td>3</td>
                      <td>7:30am</td>
                      <td>C</td>
                      <td>richardminkah@gmail.com</td>
                      
                    </tr>
                    <tr>
                      <td>
                        ECONS102
                      </td>
                      <td>Tanoe Mickey/</td>
                      <td>Introduction to Economics</td>
                      <td>Thursday</td>
                      <td>7:30am</td>
                      <td>B</td>
                      <td>tmacheal@gmail.com</td>
                      
                    </tr>
                    <tr>
                      <td>
                        DCIT104
                      </td>
                      <td>Enchil Ekow</td>
                      <td>Introduction to Programming</td>
                      <td>Friday</td>
                      <td>2:00pm</td>
                      <td>C</td>
                      <td>enchillekow@gmail.com
                      </td>
                      
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tabular--wrapper">
              <div className="main--title">
                2023/2024 Academic year.(First semester)
              </div>
              <div className="table--container">
                <table>
                  <thead>
                  <tr>
                    
                  <th>Course code</th>
                      <th>Course lecturer<IoMdPerson /></th>
                     
                      <th>Course name</th>
                      <th>Credit hours</th>
                      <th> Time<WiTime8 /></th>
                      <th>Grade</th>
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
                      <td>Programming I</td>
                      <td>3</td>
                      <td>1:30pm</td>
                      <td>N/A</td>
                      <td>paularmaah@gmail.com</td>
                      
                    </tr>
                    <tr>
                      <td>
                        DCIT203
                      </td>
                      <td>Aziz Dwunfor</td>
                      <td>Digital and Logic Systems</td>
                      <td>3</td>
                      <td>1:30pm</td>
                      <td>N/A</td>
                      <td>azizdwomfoir@gmail.com</td>
                      
                    </tr>
                    <tr>
                      <td>
                        DCIT205
                      </td>
                      <td>Micheal Soli</td>
                      <td>Multimedia and Web Design</td>
                      <td>3</td>
                      <td>7:30am</td>
                      <td>N/A</td>
                      <td>Michealsolo@gmail.com</td>
                      
                    </tr>
                    <tr>
                      <td>
                        DCIT207
                      </td>
                      <td>Micheal Tettey</td>
                      <td>Computer Organisation and Architecture</td>
                      <td>3</td>
                      <td>7:30am</td>
                      <td>N/A</td>
                      <td>tmacheal@gmail.com</td>
                      
                    </tr>
                    <tr>
                      <td>
                        DCIT209
                      </td>
                      <td>Enchil Ekow</td>
                      <td>E Business and Archiecture</td>
                      <td>3</td>
                      <td>2:00pm</td>
                      <td>N/A</td>
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

export default Gradereport