import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import SingleCard from "./SingleCard";
import img1 from '../../../../public/assets/home/slide1.jpg'
import img2 from '../../../../public/assets/home/slide2.jpg'
import img3 from '../../../../public/assets/home/slide3.jpg'
export default function RecomCard() {
  return (
    <section className="max-w-screen-xl mx-auto">
          <SectionHeader
          heading={"---Should Try---"}
          subHeading={"CHEF RECOMMENDS"}
          ></SectionHeader>
          <div className="my-16">
             <div className="flex flex-col md:flex-row mx-3 md:mx-0 gap-3 justify-center items-center">
                 <SingleCard img={img1}></SingleCard>
                 <SingleCard img={img2}></SingleCard>
                 <SingleCard img={img3}></SingleCard>
                 
             </div>
          </div>
    </section>
  )
}
