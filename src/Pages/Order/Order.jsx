import Cover from "../Shared/Cover/Cover";
import cover from "../../../public/assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu/useMenu";
import SingleCard from "../Home/RecomendedFooedCard/SingleCard";
export default function Order() {
    const [tab,setTab] = useState(0);
    const [menu] = useMenu();
  const desert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div className="">
      <Cover
        img={cover}
        heading={"OUR SHOP"}
        description={"WOULD YOU LIKE TO TRY A DISH?"}
      ></Cover>
      <div className="text-center my-6">
        <Tabs defaultIndex={tab} onSelect={(index) => setTab(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel >
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
             {
                salad.map(item => <SingleCard key={item._id} img={item.image} title={item.name} des={item.recipe}></SingleCard>)
             }
             </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
             {
                pizza.map(item => <SingleCard key={item._id} img={item.image} title={item.name} des={item.recipe}></SingleCard>)
             }
             </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
             {
                soup.map(item => <SingleCard key={item._id} img={item.image} title={item.name} des={item.recipe}></SingleCard>)
             }
             </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
             {
                desert.map(item => <SingleCard key={item._id} img={item.image} title={item.name} des={item.recipe}></SingleCard>)
             }
             </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
             {
                drinks.map(item => <SingleCard key={item._id} img={item.image} title={item.name} des={item.recipe}></SingleCard>)
             }
             </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
