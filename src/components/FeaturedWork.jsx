const FeaturedWork = () => {
    const FeaturedWorks = [
        {
            id: 1,
            src: "https://assets.website-files.com/62e8f5c9dbfdcc62e8d287db/62e8f5cadbfdcc7383d289a3_work-3.jpg",
            title: "Black Apple Watch",
            description: "Logo, User Interface",
            color: "#FBB348"
        },
        {
            id: 2,
            src: "https://assets.website-files.com/62e8f5c9dbfdcc62e8d287db/62e8f5cadbfdcc0399d289a4_work-4.jpg",
            title: "Ivor Application",
            description: "User Interface",
            color: "#FF6996"
        },
        {
            id: 3,
            src: "https://assets.website-files.com/62e8f5c9dbfdcc62e8d287db/62e8f5cadbfdcc0642d289a6_work-6.jpg",
            title: "Flying to the moon",
            description: "User Experiences",
            color: "#5032C1"
        },
        {
            id: 4,
            src: "https://assets.website-files.com/62e8f5c9dbfdcc62e8d287db/62e8f5cadbfdcca6a9d289a5_work-5.jpg",
            title: "Dharma Webfont",
            description: "Branding, Web Design",
            color: "#FF6996"
        },
    ]
  return (
    FeaturedWorks.map((FeaturedWork) => (
        <div key={FeaturedWork.id} className=" text-start cursor-pointer">
            <img src={FeaturedWork.src} alt="" aria-hidden className=" "/>
            <div className=" lg:flex items-center flex-row-reverse justify-between lg:mt-5 lg:mb-8">
                <p className=" p-2 rounded-full uppercase font-bold inline-block mt-5 lg:mt-0" style={{backgroundColor: FeaturedWork.color}}>{FeaturedWork.description}
                </p>
                <h3 className=" font-bold text-2xl my-4 mb-10 lg:my-0">{FeaturedWork.title}</h3>
            </div>
        </div>
    ))
  )
}

export default FeaturedWork