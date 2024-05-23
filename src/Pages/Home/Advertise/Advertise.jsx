
import img from '../../../../public/assets/home/slide2.jpg'
export default function Advertise() {
  return (
    <div className='max-w-screen-xl mx-auto bg-cover bg-no-repeat bg-full my-28 h-[50vh] flex justify-center items-center' style={{ backgroundImage: `url(${img}), linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1))` }}>
            <div className='w-10/12 md:w-7/12 mx-auto bg-white text-center  py-12 px-3 md:px-24'>
                <h1 className='text-3xl mb-2'>Bistro Boss</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
    </div>
  )
}
