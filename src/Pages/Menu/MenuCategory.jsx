
import SingleMenu from "../Home/PopularMenu/SingleMenu";
export default function MenuCategory({items}) {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto my-12 gap-4">
          {
            items.slice(0,7).map(m => <SingleMenu key={m._id} m={m}></SingleMenu>)
          }
      </div>
      
    </div>
  )
}
