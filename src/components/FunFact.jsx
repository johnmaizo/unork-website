const FunFact = () => {
    const FunFacts = [
        {
            id: 1,
            title: "Hero's member",
            number: 14,
            color: "#3C5CCF"
        },
        {
            id: 2,
            title: "Project done",
            number: 170,
            color: "#FBB348"
        },
        {
            id: 3,
            title: "Happy clients",
            number: 50,
            color: "#3CCF91"
        },
        {
            id: 4,
            title: "Years experience",
            number: 8,
            color: "#FF6996"
        },
    ]
  return (
    FunFacts.map((fact) => (
        <div key={fact.id} className=" pt-20 pb-10 text-center" style={{backgroundColor: fact.color}}>
            <p className=" text-[4rem] mb-10">{fact.id === 2 || fact.id === 3 ? fact.number + "+" : fact.number}</p>
            <h3 className=" font-semibold text-[1.2rem]">{fact.title}</h3>
        </div>
    ))
  )
}

export default FunFact