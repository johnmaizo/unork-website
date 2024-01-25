
const StartUp = () => {
    const StartUpData = [
        {
          id: 1,
          iconSrc: 'https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62f23055b2506e3766b33082_icons8-sign-up-256%20(3).png',
          color: "#5032C1",
          title: "Beautifully Designed.",
          text: "Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers."
        },
        {
            id: 2,
            iconSrc: 'https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62f230f6b2506eb401b33302_icons8-smartphone-tablet-256%20(1).png',
            color: "#FBB348",
            title: "Fully Responsive.",
            text: "Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers."
        },
        {
            id: 3,
            iconSrc: 'https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62f2313740a2c300453b8c46_icons8-user-male-256.png',
            color: "#3CCF91",
            title: "Friendly Support.",
            text: "Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers."
        },
      ]


  return (
    StartUpData.map((startup) => (
        <div key={startup.id} className=" bg-[#111111] p-8 md:p-10 lg:max-w-[27em] mb-7 mx-1">
            <div className="p-12 rounded-full w-[6.25em] h-[6.25em] flex items-center justify-center" style={{backgroundColor: startup.color}}>
                <img src={startup.iconSrc} alt="" aria-hidden className=" aspect-square max-w-[3.5em]" />
            </div>
            <p className=" mt-5 font-semibold text-[1.1rem] md:text-[1.2rem] leading-[1.3em]">{startup.title} <span className=" opacity-80">{startup.text}</span></p>
        </div>
    ))
  )
}

export default StartUp