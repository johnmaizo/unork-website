import { Link } from "react-router-dom";

const Footer = () => {
    let Links = [
        {
          name: "Home",
          linkTo: "/",
        },
        {
          name: "About",
          linkTo: "/about",
        },
        {
          name: "News",
          linkTo: "/news",
        },
        {
          name: "Contact",
          linkTo: "/contact",
        },
    ];

    const IconLinks = [
        {
            src: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9d614b3685e7d35cd0b4_linkedin.png",
            name: "LinkedIn",
            link: "https://www.linkedin.com/"
        },
        {
            src: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9d614b36853d535cd0b2_instagram.png",
            name: "Instagram",
            link: "https://www.instagram.com/"
        },
        {
            src: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9d614b3685060f5cd0b6_facebook.png",
            name: "Twitter",
            link: "https://twitter.com/"
        },
        {
            src: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9d614b3685c5c25cd0b8_dribbble.png",
            name: "Dribble",
            link: "https://dribbble.com/"
        },
    ]

  return (
    <footer className="  py-10 pb-5 text-white lg:max-w-[80em] lg:mx-auto">
        <div className="mx-auto px-5 w-full max-w-[1300px] lg:px-10">
            <div className=" lg:flex lg:justify-between">
                <div className=" lg:max-w-[32em]">
                    <img src="https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62e93c3aea2fab791deb32f8_logo.png" alt="unork" width={90} />
                        <p className=" opacity-60 text-[1.25rem] font-semibold my-10 lg:leading-[1.3em]">Use Unork&#39;s interactive design tools. It&#39;s ton of customization options to customize anything.</p>
                        <div className=" opacity-60 flex gap-3">
                            {
                                Links.map((link,index) => (
                                    <Link to={link.linkTo} key={index} className=" text-[1.25rem] underline underline-offset-8">{link.name}</Link>
                                ))
                            }
                        </div>
                </div>
                    <div>
                        <div className=" hidden footer_icon lg:flex gap-3 ">
                            {
                                IconLinks.map((icon,index) => (
                                    <a key={index} href={icon.link} className=""><img src={icon.src} alt={icon.name} width={18}/></a>
                                ))
                            }
                        </div>
                        <p className=" opacity-60 mt-10 lg:mt-5 font-semibold text-[1.2rem]">1800 832 993</p>
                    </div>
            </div>

                <p className=" lg:mt-16 opacity-60 mt-8 font-semibold text-[1rem] leading-[1.7em]">&copy; This is a <a href="https://webflow.com/templates/designers/deni-bozo" className=" underline underline-offset-2"  target="_blank" rel="noreferrer">Deni Bozo</a> template coded by <a href="https://github.com/johnmaizo" className=" underline underline-offset-2 hover:opacity-100" target="_blank" rel="noreferrer">John Robert Maizo</a>. Made with React JS.</p>
            
        </div>
    </footer>
  )
}

export default Footer