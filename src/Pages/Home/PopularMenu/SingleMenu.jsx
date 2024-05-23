
export default function SingleMenu({m}) {
    const {name,recipe,image,price} = m;
  return (
    <div className="px-3">
        <div className="flex gap-3 ">
           
                 <img className=" w-[120px] h-20  border " style={{ borderRadius:'0 200px 200px 200px'}} src={image} alt="" />
            
            <div>
                <div className=" flex justify-between ">
                    <h1 className="text-gray-600 font-semibold">{name}-------</h1>
                    <p className="text-orange-500 font-bold">$ {price}</p>
                </div>
                 <h3>{recipe}</h3>
            </div>
        </div>
    </div>
  )
}
