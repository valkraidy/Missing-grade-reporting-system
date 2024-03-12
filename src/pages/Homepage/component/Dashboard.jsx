import "../css/Dashboard.css";
// import Hearder from "./Hearder"
// import { IoMdHome } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
// import { FaResearchgate } from "react-icons/fa6";
import { MdOutlineContactPhone } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineGrade } from "react-icons/md";
import { WiTime3 } from "react-icons/wi";
import { FaBook } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdStarRate } from "react-icons/md";
import { FaRProject } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5"

// import  { useAuth0 } from '@auth0/auth0-react';

import Footer from "./Footer";

const Dashboard = () => {

 

  return (
    <div>
      {/* <Hearder  /> */}
      <div className="dashboard">
        <div className="sidebar">
          <div className="logoo"> </div>
          <ul className="menu">
            <li className="active">
              <a href="#">
                <i>
                  <RxDashboard />
                </i>
                <span>Dashboard</span>
              </a>
            </li>
            {/* <li>
              <a href="/Herosection">
                <i>
                  <IoMdHome />
                </i>
                <span>Home</span>
              </a>
            </li> */}
            <li>
              <a href="/Missinggrade">
                <i>
                  <MdOutlineGrade />
                </i>
                <span>Missing grade</span>
              </a>
            </li>
            <li>
              <a href="/Faqs">
                <i>
                  <FaRegQuestionCircle />
                </i>
                <span>FAQs</span>
              </a>
            </li>
            <li>
              <a href="/Contact">
                <i>
                  <MdOutlineContactPhone />
                </i>
                <span>Contact</span>
              </a>
            </li>
            <li className="logout">
              <a href="/">
            
                <i>
                  <FiLogOut />
                </i>
                
             
              
              </a>
            </li>
          </ul>
        </div>

        {/* /*Main section*/}

        <div className="main--content">
          <div className="header--wrapper">
            <div className="hearder--title">
              
              <h2>BSc.Information Technology</h2>
             
            </div>

            <div className="user--info">
              <div className="search--box">
                <i>
                  <IoMdSearch />
                </i>
                <input type="text" name="" placeholder="search" value="" />
              </div>
              <div>
              <i className="notify">
              <IoNotificationsOutline />
              </i>
              </div>
              
              <img src="src/images/profile.jpg" alt="profile picture" />
            </div>
          </div>

          <div className="card--container">
            <h3 className="main--title">Here are your analytics:</h3>
            <div className="card--wrapper">
              <div className="grade--card light-red">
                <div className="card--hearder">
                  <div className="amount">
                    <span className="title">Assignment submitted</span>
                    <span className="amount-value"> 80%</span>
                  </div>
                  <i className="icon-react dark-red">
                    <FaBook />
                  </i>
                </div>
                <span className="card-details"></span>
              </div>

              <div className="grade--card light-purple">
                <div className="card--hearder">
                  <div className="amount">
                    <span className="title">Time spent at lectures</span>
                    <span className="amount-value ">70%</span>
                  </div>
                  <i className="icon-react dark-purple">
                    <WiTime3 />
                  </i>
                </div>
                <span className="card-details"></span>
              </div>
              <div className="grade--card light-green">
                <div className="card--hearder">
                  <div className="amount">
                    <span className="title">Total quizes taken</span>
                    <span className="amount-value ">90%</span>
                  </div>
                  <i className="icon-react dark-green">
                    <MdQuiz />
                  </i>
                </div>
                <span className="card-details"></span>
              </div>
              <div className="grade--card light-blue">
                <div className="card--hearder">
                  <div className="amount">
                    <span className="title">
                      Number of student taking this course.
                    </span>
                    <span className="amount-value ">300</span>
                  </div>
                  <i className="icon-react dark-blue">
                    <FaPeopleGroup />
                  </i>
                </div>
                <span className="card-details"></span>
              </div>
              <div className="grade--card light-yellow">
                <div className="card--hearder">
                  <div className="amount">
                    <span className="title">Lecturers rating (1-10).</span>
                    <span className="amount-value ">7/10</span>
                  </div>
                  <i className="icon-react dark-yellow">
                    <MdStarRate />
                  </i>
                </div>
                <span className="card-details"></span>
              </div>
              <div className="grade--card light-gray">
                <div className="card--hearder">
                  <div className="amount">
                    <span className="title">Number of projects.</span>
                    <span className="amount-value ">3</span>
                  </div>
                  <i className="icon-react dark-gray">
                    <FaRProject />
                  </i>
                </div>
                <span className="card-details"></span>
              </div>
            </div>
          </div>

          <div className="tabular--wrapper">
            <div className="main--title">Course display.</div>
            <div className="table--container">
              <table>
                <thead>
                  <tr>
                    <th>Course code</th>
                    <th>Lecturer</th>
                    <th>T/A</th>
                    <th>Lecture days</th>
                    <th> Time</th>
                    <th>Semester</th>
                    <th>Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>DCIT201</td>
                    <td>Paul Armaah</td>
                    <td>N/A</td>
                    <td>Monday</td>
                    <td>1:30pm</td>
                    <td>2</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>DCIT203</td>
                    <td>Aziz Dwunfor</td>
                    <td>N/A</td>
                    <td>Wednesday</td>
                    <td>1:30pm</td>
                    <td>2</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>DCIT205</td>
                    <td>Micheal Soli</td>
                    <td>Danquiver</td>
                    <td>Monday</td>
                    <td>7:30am</td>
                    <td>2</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>DCIT207</td>
                    <td>Micheal Tettey</td>
                    <td>N/A</td>
                    <td>Thursday</td>
                    <td>7:30am</td>
                    <td>2</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>DCIT209</td>
                    <td>Enchil Ekow</td>
                    <td>kojo john</td>
                    <td>Friday</td>
                    <td>2:00pm</td>
                    <td>2</td>
                    <td>200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
