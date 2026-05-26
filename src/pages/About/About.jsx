import './About.css';
import { useNavigate } from 'react-router-dom';
import Profile from '../../assets/profile.png';

function About() {
    const navigate = useNavigate();
    return (
        <section className='about-section'>
            <h1>About me</h1>
            <div className='section-content'>
                <div className="about-info">
                    <h3 className='content-greeting'>Hi, I'm <span className='grad-text'>Thanus Thapasvi Thummala</span></h3>
                    <h2 className='content-role'>Fullstack Web <span>Developer</span></h2>
                    <p>I am a passionate fullstack web developer and I love creating modern web applications that are optimized for performance and good user experience with stunning design.</p>
                    <div className='button-box'>
                        <button onClick={() => navigate('/projects')} className='btn'>
                            Projects
                        </button>

                        <button onClick={() => navigate('/contact')} className='btn'>
                            Contact me
                        </button>
                    </div>
                </div>
                <div className="profile-cover flex-center shining">
                    <img src={Profile} alt="profile pic" className='profile' />
                </div>
            </div>

        </section>
    );
}

export default About;