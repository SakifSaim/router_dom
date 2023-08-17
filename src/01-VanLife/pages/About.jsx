import { Link } from 'react-router-dom'
import bgImage from '../assets/images/about-hero.png'

function About() {
  return (
    <div className="about-page-container">
      <img src={bgImage} className="about-hero-image" />
      <div className="about-page-content">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, nihil.
          Magnam repellat a quis fugit tenetur fugiat consequatur illo dolor.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          officia velit temporibus, veritatis tempore mollitia dolorum magni,
          adipisci molestias corporis soluta?
        </p>
      </div>
      <div className="about-page-cta">
        <h2>
          Lorem ipsum dolor sit. <br /> Lorem ipsum dolor sit.
        </h2>
        <Link to={'/vans'} className="link-button">
          Explore Our Vans
        </Link>
      </div>
    </div>
  )
}

export default About
