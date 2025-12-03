import "../styles/about.css";
import booksImage from "./Images/BooksWebSite.png";

export default function About() {
  return (
    <>
      
      <div className="about-header">
        <img src={booksImage} alt="Books" className="about-header-img" />
        <div className="about-header-text">
          <h1>About Us</h1>
          <p>
            Welcome to our Books Project! We aim to provide a curated collection of books
            that inspires reading, creativity, and lifelong learning.
          </p>
        </div>
      </div>

      
      <div className="about-cards-container">
        <div className="about-card">
          <h2>Who We Are</h2>
          <p>
            We are a team of passionate readers and developers committed to making books
            accessible to everyone.
          </p>
        </div>

        <div className="about-card">
          <h2>What We Provide</h2>
          <p>
            We provide a curated collection of books, reading recommendations, and
            insightful reviews to guide your reading journey.
          </p>
        </div>

        <div className="about-card">
          <h2>Our App</h2>
          <p>
            Our app helps you explore books, track your reading, and discover content
            personalized to your interests.
          </p>
        </div>
      </div>
    </>
  );
}