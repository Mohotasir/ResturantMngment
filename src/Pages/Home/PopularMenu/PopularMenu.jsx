import { useEffect } from "react";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import { useState } from "react";
import SingleMenu from "./SingleMenu";


export default function PopularMenu() {
    const [menu , setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularData = data.filter(d =>d.category === 'popular')
                    setMenu(popularData)})
        
    },[])
  return (
    <section>
        <SectionHeader
         heading={"---Check it out---"}
         subHeading={"FROM OUR MENU"}
        ></SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto my-12 gap-4">
          {
            menu.map(m => <SingleMenu key={m._id} m={m}></SingleMenu>)
          }
      </div>
    </section>

  )
}
