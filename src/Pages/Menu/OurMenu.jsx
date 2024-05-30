import Cover from "../Shared/Cover/Cover";
import img from "../../../public/assets/menu/banner3.jpg";
import img1 from "../../../public/assets/menu/soup-bg.jpg";
import img2 from "../../../public/assets/menu/pizza-bg.jpg";
import useMenu from "../../hooks/useMenu/useMenu";
import MenuCategory from "./MenuCategory";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import Button from "../Shared/Button/Button";

export default function OurMenu() {
  const [menu] = useMenu();
  const desert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offerd = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Cover
        img={img}
        heading={"OUR MENU"}
        description={"Would You Like to Try a dish ?"}
      ></Cover>
      <div className="my-6">
        <SectionHeader
          heading={"---Don't miss---"}
          subHeading={"TODAY'S OFFER"}
        ></SectionHeader>
      </div>
      <div className="my-3">
        <MenuCategory items={offerd}></MenuCategory>
        <Button
        text={"OFFER YOUR FAVOURITE FOOD"}
        ></Button>
      </div>
      <div>
        <Cover
        img={img1}
        heading={"DESSERTS"}
        description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        ></Cover>
        <MenuCategory
        items={desert}
        ></MenuCategory>
        <Button
        text={"OFFER YOUR FAVOURITE FOOD"}
        ></Button>
      </div>
      <div>
        <Cover
        img={img2}
        heading={"PIZZA"}
        description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        >
        </Cover>
        <MenuCategory items={pizza}></MenuCategory>
        <Button
        text={"OFFER YOUR FAVOURITE FOOD"}
        ></Button>
      </div>
      <div>
        <Cover
        img={img2}
        heading={"SALAD"}
        description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        >
        </Cover>
        <MenuCategory items={salad}></MenuCategory>
        <Button
        text={"OFFER YOUR FAVOURITE FOOD"}
        ></Button>
      </div>
      <div>
        <Cover
        img={img1}
        heading={"SOUP"}
        description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        >
        </Cover>
        <MenuCategory items={soup}></MenuCategory>
        <Button
        text={"OFFER YOUR FAVOURITE FOOD"}
        ></Button>
      </div>
    </div>
  );
}
