import { Link } from "react-router-dom"

const Market = () => {
    const Markets = [
        {
            id: 1,
            src: "https://assets.website-files.com/62e8f5c9dbfdcc62e8d287db/62f4cc1be7a1c5e344e5fc2f_blog-2-p-800.jpg",
            tag: "Marketing",
            color: "#3CCF91",
            date: "February 3, 2021",
            title: "Curating a workplace that inspires all of us"
        },
        {
            id: 2,
            src: "https://assets.website-files.com/62e8f5c9dbfdcc62e8d287db/62f4cc2df9b93ff8c9c4271c_blog-3-p-800.jpg",
            tag: "Design",
            color: "#5032C1",
            date: "February 25, 2021",
            title: "Designers who changed the web with Webflow"
        },
        {
            id: 3,
            src: "https://assets.website-files.com/62e8f5c9dbfdcc62e8d287db/62f4cadab5f151707c191512_blog-1-p-800.jpg",
            tag: "Code",
            color: "#FF6996",
            date: "March 9, 2021",
            title: "Talking between studio departments"
        },
    ]
  return (
    Markets.map((market) => (
        <div key={market.id} className=" overflow-hidden rounded-2xl">
            <Link to={"/"}><img src={market.src} alt="" aria-hidden /></Link>

            <div className=" bg-[#171717] p-7 ">
                <div className=" flex items-center gap-2 mb-6">
                    <button className=" p-2 px-4 rounded-full text-[0.9rem] font-semibold hover:opacity-[0.76]" style={{backgroundColor: market.color}}>{market.tag}</button>
                    <span className=" text-[1rem] opacity-60 font-semibold">{market.date}</span>
                </div>
                <Link to={"/"} className=" text-[1.5rem] font-semibold leading-[1em]">{market.title}</Link>

                <button className=" underline-offset-8 underline block mt-6 opacity-60 text-[1.1rem] font-semibold">Read More</button>
            </div>
        </div>
    ))
  )
}

export default Market