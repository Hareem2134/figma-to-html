import Card from "../../components/Card";
import Featured_Card from "../../components/Featured_Card";
import Image from "next/image";

export default function Home(){
  return(
    <>
    <div>

      <div className="hero-text">
        <h1>Hi, I am John,</h1>
        <h1>Creative Technologist</h1>
      </div>
      <p className="hero-para">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..</p>
      <button className="hero-button">Download Resume</button>

      <div>
      <Image src="/hero-image.png" alt="Hero Image" className="hero-image" width="280" height="280"/>
      </div>

    </div>
    
    <div className="recent-post-container">

      <div className="recent-post-heading">
        <h4>Recent Post</h4>
      </div>
      <div className="view-all-button">
        <h4>View All</h4>
      </div>

        <div className="inline-flex">
          <Card 
            title="Making a design system from scratch" 
            date="12 Feb 2020" 
            tag="Design Pattern"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          /> 
        </div>

        <div className="inline-flex">
          <Card
            title="Making a design system from scratch" 
            date="12 Feb 2020" 
            tag="Design Pattern"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </div>
    </div>


    <div className='featured-container'>
      <div className="featured-works-heading">
          <h4>Featured Works</h4>
      </div>
      
        <div className="inline-flex">
          <Featured_Card
          image="/featured-image1.png"
          title="Designing Dashboards"
          date="2020"
          tag="Dashboard"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </div>

        <div className="inline-flex">
          <Featured_Card
          image="/featured-image2.png"
          title="Designing Dashboards"
          date="2020"
          tag="Dashboard"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </div>
        
        <div className="inline-flex">
          <Featured_Card
          image="/featured-image3.png"
          title="Designing Dashboards"
          date="2020"
          tag="Dashboard"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </div>
    </div>
    </>
  );
}