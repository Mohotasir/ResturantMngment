
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import SingleMenu from "./SingleMenu";
import useMenu from "../../../hooks/useMenu/useMenu";


export default function PopularMenu() {
  const [menu] = useMenu();
  const popularData = menu.filter(d =>d.category === 'popular')
  return (
    <section>
        <SectionHeader
         heading={"---Check it out---"}
         subHeading={"FROM OUR MENU"}
        ></SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto my-12 gap-4">
          {
            popularData.map(m => <SingleMenu key={m._id} m={m}></SingleMenu>)
          }
      </div>
    </section>

  )
}
