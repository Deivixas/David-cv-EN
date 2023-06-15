import './App.css';
import Profile from '../src/assets/3.jpg';
import Image from '../src/assets/1.png'
import {FaLinkedin} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaBirthdayCake } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
function App() {
  return (
    <div>
<div className='header'>
  <img className='profile' src={Profile} alt="profile" /> 
  <h1>Deividas Skirgaila</h1>
      <p>Front-end Developer</p>
</div>
     <div className="cv-container"> 
    
      <div className="cv-column">
         
        <section>
        <h2>Contacts</h2>
        <ul className='contact'>
        <li>
       <FaLinkedin/> <a href='https://www.linkedin.com/in/deividas-skirgaila-7a6b00253/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <li>
         <FaGithub/> <a href="https://github.com/Deivixas" target="_blank" rel="noopener noreferrer" >GitHub</a>
          </li>
          </li>
          <li>
            <FaBirthdayCake /> 1997-05-25 (26 m.)
          </li>
          <li>
            <BsTelephoneFill /> +37060312129
          </li>
          <li>
            <SiGmail /> deividas.skirgaila525@gmail.com
          </li>
          <li>
            <FaHome /> Kaunas
          </li>
        </ul>
      </section>
      <section>
            <h2>Education</h2>
            <h3>CodeAcademy</h3>
            <p>Front-end/intensive/480h-courses</p>
            <img className="photo" src={Image} alt="img" />
          </section>

      <section>
            <h2>Skills</h2>
            <ul>
              <li className="bold">React</li>
              <li className="bold">JavaScript</li>
              <li className="bold">HTML</li>
              <li className="bold">CSS</li>
              <li>Responsive Web Design</li>
              <li>Version Control (Git)</li>
              <li>Problem solving</li>
            </ul>
          </section>
         
         
      </div>
      <div className="cv-column"> 
      
     
      <section >
            <h2>About Me</h2>
            <p >
            As a passionate front-end developer, I excel in crafting user-friendly web applications using React, JavaScript, and CSS. With a proactive learning approach, I stay updated with the latest advancements in web development, enabling me to adapt swiftly and deliver innovative solutions. I thrive on pushing boundaries, creating memorable online experiences, and collaborating with forward-thinking teams. I am motivated to learn and improve in this field.
            </p>
          </section>
          <section >
            <h2>Work Experience</h2>
            <h3>Parcel Sorter</h3>
            <p>DPD Lithuania</p>
            <ul>
              <li>Sorting parcels by regions, cities.</li>
              <li>Unloading and loading parcels into trailers manually</li>
              <li>
                Unloading and loading of freight transport with an electric
                forklift
              </li>
              <li>Filling out CMR documents.</li>
              <li>Warehouse maintenance and organization.</li>
            </ul>
          </section> 
          <section >
            <h2>Languages</h2>
            <ul>
              <li>Lithuanian</li>
              <li>English</li>
            </ul> 
            </section>

      </div>
    </div>

    </div>
  );
}

export default App;
