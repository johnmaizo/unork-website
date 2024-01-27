const Team = () => {
  const IconLinks = [
    {
      src: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9d614b3685e7d35cd0b4_linkedin.png",
      name: "LinkedIn",
      link: "https://www.linkedin.com/",
    },
    {
      src: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9d614b36853d535cd0b2_instagram.png",
      name: "Instagram",
      link: "https://www.instagram.com/",
    },
    {
      src: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9d614b3685060f5cd0b6_facebook.png",
      name: "Twitter",
      link: "https://twitter.com/",
    },
    {
      src: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9d614b3685c5c25cd0b8_dribbble.png",
      name: "Dribble",
      link: "https://dribbble.com/",
    },
  ];

  const Teams = [
    {
      id: 1,
      src: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62e8f5cadbfdcc62c4d2884f_team-1.jpeg",
      name: "John D.",
      role: "Co Founder",
    },
    {
      id: 2,
      src: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62e8f5cadbfdcc3a59d28846_team-2.jpg",
      name: "Maria L.",
      role: "Designer",
    },
    {
      id: 3,
      src: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62e8f5cadbfdcc283bd2884c_team-3.jpg",
      name: "Arty D.",
      role: "Developer",
    },
  ];

  return (
    Teams.map((team) => (
        <div key={team.id} className=" bg-[#212121] text-center p-8 rounded-2xl mx-2">
            <img src={team.src} alt={team.name} className=" rounded-full bg-contain aspect-square w-full max-w-[11em] mx-auto" />

            <div className=" my-7 text-[1rem] font-semibold">
                <h3>{team.name}</h3>
                <p className=" opacity-60">{team.role}</p>
            </div>

            <div className=" footer_icon flex gap-5 justify-center">
                {IconLinks.map((icon, index) => (
                <a key={index} href={icon.link} className="">
                    <img src={icon.src} alt={icon.name} width={18} />
                </a>
                ))}
            </div>
        </div>
    ))
  );
};

export default Team;