import React from 'react';
import vg from "../assets/2.webp";
import "../styles/Home.css";
import{
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
}from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>NexTech</h1>
            <p>Empowering Ideas, Engineering Solutions</p>
        </main>
    </div>

    <div className='home2'>
        <img src={vg} alt='Graphics'/>
        <div>
            <p>
            Welcome to NexTech Solutions – your premier destination for innovative tech services. Our expert team specializes in web development, mobile apps, cybersecurity, and more, crafting tailored solutions to propel your business forward in the digital age. With a commitment to excellence and a passion for innovation, we're here to redefine the way you experience technology.
            </p>
        </div>
        </div>
        
    <div className='home3' id='about'>
            <div>
                <h1>who we are</h1>
                <p>Expertise: Our team consists of highly skilled professionals with expertise in various domains of technology, including web development, mobile applications, cybersecurity, cloud computing, and more.</p>

                 <p>Innovation: We are committed to staying at the forefront of technological advancements, constantly exploring new technologies and methodologies to provide innovative solutions to our clients.</p> 

<p>Tailored Solutions: We understand that every business is unique, which is why we take a tailored approach to meet the specific needs and goals of each client, ensuring maximum effectiveness and efficiency.</p>

<p>Client-Centric: Our clients are at the heart of everything we do. We prioritize clear communication, collaboration, and transparency throughout the project lifecycle to ensure client satisfaction and success.</p>

<p>Quality: We uphold the highest standards of quality in our work, adhering to best practices and industry standards to deliver solutions that are robust, scalable, and reliable.</p>

<p>Partnership: We view our clients as partners and strive to build long-term relationships based on trust, mutual respect, and shared success. We are dedicated to supporting our clients on their journey to digital transformation and growth.</p>

<p>By embodying these principles, we aim to be a trusted partner and leader in the tech industry, empowering businesses to thrive in the digital world.</p>
            </div>
        </div>
    <div className='home4' id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle />
                     <p>Google</p>
                </div>

                <div style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle />
                     <p>Amazon</p>
                </div>

                <div style={{animationDelay:"0.7s"}}>
                    <AiFillYoutube />
                     <p>YouTube</p>
                </div>

                <div style={{animationDelay:"1s"}}>
                    <AiFillInstagram />
                     <p>Instagram</p>
                </div>


            </article>
        </div>
        </div>    
    </>
  );
};  

export default Home