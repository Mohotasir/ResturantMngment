import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../../public/assets/home/02.jpg";
import img2 from "../../../../public/assets/home/01.jpg";
import img3 from "../../../../public/assets/home/03.png";
import Category from "../Category/Category";

export default function Home() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        showArrows={true}
        showStatus={true}
        showIndicators={true}
      >
        <div>
          <img src={img1} alt="Legend 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img2} alt="Legend 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img3} alt="Legend 3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
       <Category></Category>
    </div>
  );
}
