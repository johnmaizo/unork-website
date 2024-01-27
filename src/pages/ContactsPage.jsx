import Contact from "../components/Contact"

const ContactsPage = () => {
  return (
    <>
      <section className=" text-white font-semibold pt-[8em] md:pt-[10em] lg:pt-[20em] lg:pb-[2em]">
        <div className="mx-auto px-5 w-full max-w-[1300px] md:px-10 ">
            <div className=" lg:flex lg:justify-between lg:items-center lg:flex-wrap lg:gap-y-[5em] mb-[8em] lg:mb-[15em]">
                <h1 className=" text-[2.3rem] md:text-[4rem] lg:text-[5rem]">Contact Us</h1>
                <p className=" text-[1.5rem] leading-[1.3em] mt-10 md:mt-[3em] lg:mt-0 lg:max-w-[33ch] lg:mr-10 opacity-60">Get the price and proposal to your Email!</p>
            </div>
        </div>
      </section>

      {/* Contact */}
      <section className=" py-10 pb-16 bg-[#111111] text-white font-semibold lg:py-[8em]">
        <div className="mx-auto px-5 w-full max-w-[1300px] lg:px-10">
          <div className=" lg:flex justify-between">
            <div className=" lg:max-w-[34em]">
              <h2 className=" text-[#3C5CCF] text-[1.2rem]">Contact Us</h2>
              <p className=" text-[2.5rem] leading-[1.2em] mt-5 lg:text-[3.5rem]">Get in touch with our friendly team.</p>
            </div>
            <div className=" lg:max-w-[35em] lg:mr-10">
              <Contact />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactsPage