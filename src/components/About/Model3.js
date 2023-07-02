import './Model3.css'
import Member1 from './msme.jpeg';
import Member2 from './rrecl.jpeg';
import Member3 from './patentimage.jpeg';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Model3() {
  return (
    <div id='model3' style={{background:'rgba(00,00,00,0.2)'}}>
        <h1 className='model-title' style={{paddingTop:'85px'}}>Meet the team</h1>
        <div className="divider"></div>
        <div className="members">
          <div className="member">
            <img width={250} height={250} src={Member1}/>
            <div className="description">
                <h1>A</h1>
                <h2>CEO</h2>
                <p>
               
                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div>
            </div>
          </div>
          <div className="member">
            <img width={200} height={200} src={Member2}/>
            <div className="description" style={{paddingTop:'45px'}} >
                <h1>B</h1>
                <h2>CEO</h2>
                <p>
               
                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div>
            </div>
          </div>
          <div className="member">
            <img width={200} height={200} src={Member3}/>
            <div className="description">
                <h1>C</h1>
                <h2>CEO</h2>
                <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}
