import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import img from '../../../../public/assets/home/featured.jpg'
export default function Feature() {
  return (
    <section className="py-16 bg-no-repeat bg-cover my-24 bg-fixed" style={{backgroundImage:` linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)),url(${img})`}}>
        <div className="max-w-screen-xl mx-auto">
            <div className="text-white"> 
                <SectionHeader 
                heading={"---Check it out---"}
                subHeading={"FROM OUR MENU"}
                ></SectionHeader>
            </div>
            <div className="flex gap-4 justify-around my-12  items-center">
                <img className="w-[40%]" src={img} alt="" />
                <div className="w-[40%] text-white">
                    <p>March 20, 2023</p>
                    <h2>WHERE CAN I GET SOME?</h2>
                    <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn border-b-white bg-inherit outline-none text-white border-b-4 hover:bg-white hover:text-black">Read More</button>
                </div>
            </div>
        </div>
    </section>
  )
}
