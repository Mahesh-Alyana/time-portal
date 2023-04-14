import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./slides.css";
function SlideShow() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "The Chronosphere",
      description:
        "A place out of space and time where all possibilities exist",
      image: "chronosphere.jpg",
    },
    {
      title: "Journey through time",
      description: "Embark on a journey through time to reach the Chronosphere",
      image: "journey.jpg",
    },
    {
      title: "The ultimate destination",
      description:
        "Reach the Chronosphere and unlock the secrets of the universe",
      image: "destination.jpg",
    },
  ];

  useEffect(() => {
    console.log(currentSlide);
    console.log(slides.length);
    if (currentSlide === slides.length - 1) {
      console.log("navigations");
      // Redirect to the next screen
      //   window.location.href = "/next-screen";
      navigate("/startGame");
    } else {
      console.log("sliding");

      // Move to the next slide after 10 seconds
      const timeoutId = setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
      }, 10000);
      return () => clearTimeout(timeoutId);
    }
  }, [currentSlide, slides.length]);

  return (
    <div className="background">
      <h1>{slides[currentSlide].title}</h1>
      <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
      <p>{slides[currentSlide].description}</p>
    </div>
  );
}

export default SlideShow;
