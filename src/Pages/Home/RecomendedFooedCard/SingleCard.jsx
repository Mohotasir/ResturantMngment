export default function SingleCard({img}) {
  return (
    
      <div className=" bg-base-100 shadow-xl">
        <figure className="p-6">
          <img
            src={img}
            alt=""
            className="rounded-lg border w-full h-[40vh]"
          />
        </figure>
        <div className="flex flex-col items-center justify-center pb-8 px-4 text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. accusamus architecto.</p>
          <div className="card-actions">
            <button className="btn border-b-amber-200 border-b-4">Add to Cart</button>
          </div>
        </div>
      </div>
    
  );
}
