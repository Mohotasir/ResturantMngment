import { Parallax } from 'react-parallax';

export default function Cover({heading,description,img}) {
  return (
    <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
       <div className=' bg-cover bg-no-repeat bg-full  h-[60vh] flex justify-center items-center' style={{ backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, .6))` }}>
            <div className='w-10/12 md:w-7/12 mx-auto bg-black bg-opacity-70 text-center text-white  py-12 px-3 md:px-24'>
                <h1 className='text-3xl md:text-5xl font-semibold mb-2'>{heading}</h1>
                <p>{description}</p>
            </div>
    </div>
    </Parallax>
    
  )
}
