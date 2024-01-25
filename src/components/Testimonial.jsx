const Testimonial = () => {
    const Testimonials = [
        {
            id: 1,
            logoSrc: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea95d4f01323d20ac1067a_file%20(26).svg",
            text: "100% up time, great support and many possibilities to make efficient sales campaigns.",
            authorSrc: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62e8f5cadbfdccd50dd28852_user-5.jpeg",
            authorName: "Thomas L.",
            authorRole: "Colab Founder"
        },
        {
            id: 2,
            logoSrc: "https://assets.website-files.com/627298b34d84a873409730b9/62948e04394a4ca8365abbd3_file%20(15).svg",
            text: "If you have any questions you can call the support and have the answer within 5 minutes.",
            authorSrc: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62e8f5cadbfdcc983fd28854_user-1.jpeg",
            authorName: "Emily V.",
            authorRole: "Vision Founder"
        },
        {
            id: 3,
            logoSrc: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62f3cd9f0ae83fe61069ccf4_file%20(28).svg",
            text: "Makes my prospecting a lot easier, and it's easy to book appointments. Thank you StartIt.",
            authorSrc: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62e8f5cadbfdccc68bd28853_user-2.jpeg",
            authorName: "John D.",
            authorRole: "Sitemark Founder"
        },
    ]


    



  return (
    Testimonials.map((testimonial) => (
        <figure key={testimonial.id} className=" rounded-md p-8 bg-[#171717] text-start">
            <blockquote>
                <img src={testimonial.logoSrc} alt="" aria-hidden className=" w-[10em]" />
                <p className=" text-[1.01rem] font-semibold opacity-80 mt-5 leading-[1.2em]">&#34;{testimonial.text}&#34;</p>
            </blockquote>
            <figcaption className=" flex  items-center gap-3 mt-10"> 
                <div className="flex-none">
                    <img src={testimonial.authorSrc} alt={testimonial.authorName} className=" rounded-full bg-contain aspect-square w-full max-w-[4.5em] " />
                </div>
                <div className=" text-[1.1rem] font-semibold">
                    <h4>{testimonial.authorName}</h4>
                    <p className=" opacity-60 text-[1rem]">{testimonial.authorRole}</p>
                </div>
            </figcaption>
        </figure>
    ))

  )
}

export default Testimonial