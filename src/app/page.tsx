import { Raleway, Montserrat } from '@next/font/google';

const raleway = Raleway({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export default function Responsive() {
  return (
    <div className="maindiv">
      <div className="header" role="navigation">
        <a href="#default" className="logo" style={{ fontFamily: raleway.style.fontFamily }} aria-label="Digital Diaries Logo">Digital Diaries</a>
        <div className="header-right">
          <a className="active" href="#home" aria-current="page">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <h3 className="footer-title">Digital Diaries</h3>
          <div className="footer-description">
            <p >Welcome to Digital Diaries, where technology meets creativity! Dive into insightful articles, cutting-edge trends, <br />and expert guides designed to keep you ahead in the digital age. Whether you’re a tech novice or a seasoned <br /> pro, our content covers everything from coding tips to the latest in cybersecurity. Join our community of tech <br /> enthusiasts and embark on a journey through the fascinating world of IT.</p>

          </div>
          <div className="footer-description">

            <p>Email: digitalDiaries@yahoo.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </footer>

      <div className='parentContainer'>

        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
            <img src="path_to_image.jpg" alt="Description of the image" />
          </div>

          <h1 className="title">Tech Trends to Watch in 2024</h1>
          <p className="description">
            As we look ahead to 2024, several tech trends are set to shape the digital landscape.{" "}
          </p>
          <button className="readMore">Read More</button>
        </div>
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
            <img src="path_to_image.jpg" alt="Description of the image" />
          </div>

          <h1 className="title">The Role of AI in Enhancing Productivity</h1>
          <p className="description">
            Artificial Intelligence is revolutionizing how we work and live. {" "}
          </p>
          <button className="readMore">Read More</button>
        </div>
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
            <img src="path_to_image.jpg" alt="Description of the image" />
          </div>

          <h1 className="title"> 5 Must-Know Tips for Aspiring Web Developers</h1>
          <p className="description">
            Starting a career in web development can be daunting, but with the right tips, you can set yourself up for success!{" "}
          </p>
          <button className="readMore">Read More</button>
        </div>
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
            <img src="path_to_image.jpg" alt="Description of the image" />
          </div>

          <h1 className="title">Exploring the Intersection of Art and Technology</h1>
          <p className="description">
            Technology isn’t just about coding and cybersecurity; it also fuels creativity! {" "}
          </p>
          <button className="readMore">Read More</button>
        </div>
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
            <img src="path_to_image.jpg" alt="Description of the image" />
          </div>

          <h1 className="title">Cybersecurity Basics: Protecting Your Digital Life</h1>
          <p className="description">
            As technology advances, so do the threats lurking online. {" "}
          </p>
          <button className="readMore">Read More</button>
        </div>
        <div className="childContainer bounce-in-right">
          <div className="imageContainer">
            <img src="path_to_image.jpg" alt="Description of the image" />
          </div>

          <h1 className="title">The Future of Coding: Embracing No-Code Platforms</h1>
          <p className="description">
            In today’s digital landscape, the need for coding skills is evolving{" "}
          </p>
          <button className="readMore">Read More</button>
        </div>


      </div>
    </div>


    // {/* <div className="parentContainer">

    // </div> */}
  );
}