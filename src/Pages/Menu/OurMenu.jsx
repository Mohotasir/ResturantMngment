import Cover from "../Shared/Cover/Cover";
import img from '../../../public/assets/menu/banner3.jpg'
import img1 from '../../../public/assets/menu/soup-bg.jpg'
import img2 from '../../../public/assets/menu/pizza-bg.jpg'
import PopularMenu from "../Home/PopularMenu/PopularMenu";

export default function OurMenu() {
  return (
    <div>
        <Cover
        img={img}
        heading={"OUR MENU"}
        description={"Would You Like to Try a dish ?"}
        ></Cover>
        <PopularMenu></PopularMenu>
        <Cover
        img={img1}
        heading={"SOUPS"}
        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis magni at soluta. Nesciunt esse temporibus dicta, minima omnis consequuntur veritatis."}
        ></Cover>
        <PopularMenu></PopularMenu>
        <Cover
        img={img2}
        heading={"OUR MENU"}
        description={"Would You Like to Try a dish ?"}
        ></Cover>
        <PopularMenu></PopularMenu>
    </div>
  )
}
