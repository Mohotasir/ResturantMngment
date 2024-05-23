

export default function SectionHeader({heading,subHeading}) {
  return (
    <div className="text-center lg:w-3/12 mx-auto">
        <h1 className="text-orange-500 font-semibold">{heading}</h1>
        <h1 className="text-4xl border-y-2 py-2 text-center">{subHeading}</h1>
    </div>
  )
}
