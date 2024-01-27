import {Link} from "react-router-dom";

import Checkbox from "../components/Checkbox"
import FunFact from "../components/FunFact"
import StartUp from "../components/StartUp"
import Team from "../components/Team"
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";

const AboutPage = () => {

  return (
    <>
      <section className=" text-white font-semibold pt-[8em] md:pt-[10em] lg:pt-[20em] lg:pb-[2em]">
        <div className="mx-auto px-5 w-full max-w-[1300px] md:px-10 ">
          <div className=" lg:flex lg:justify-between lg:items-center lg:flex-wrap lg:gap-y-[5em]">
            <h1 className=" text-[2.3rem] md:text-[4rem] lg:text-[5rem]">About Unork</h1>
            <p className=" text-[1.5rem] leading-[1.3em] mt-10 md:mt-[3em] lg:mt-0 lg:max-w-[33ch] lg:mr-10">We are a team of great designers, <span className=" opacity-60">problem solvers, and passionate collaborators.</span></p>
          </div>

          <div className=" lg:flex lg:justify-between lg:flex-row-reverse lg:gap-10 lg:mt-[15em]">
            <img src="https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9643758eea6947097943_photo-5-p-1080.jpg" alt="" aria-hidden className=" mt-[7em] lg:mt-0 lg:flex-none lg:max-w-[39em]" />
            
            <div className=" lg:max-w-[60ch]">
              <p className=" text-[1.5rem] leading-[1.3em] mt-10"><span className=" opacity-60">Think of the world&#39;s most iconic and successful brands. They are easily recognizable, findable, and impactful.</span> That&#39;s not by accident - visibility and trust are the superpowers of exceptional design.</p>
              <p className=" text-[1.5rem] leading-[1.3em] mt-10 opacity-60">We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born.</p>
              <p className=" text-[1.5rem] leading-[1.3em] mt-10 opacity-60">Intuition and strategy integrate the research methodology that we also apply to traditional media.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className=" text-white my-[8em] md:mb-[15em]">
        <div className="mx-auto px-5 w-full max-w-[1300px] lg:px-10">
          <div>
            <h2 className=" text-[#DC9D3F] font-semibold text-[1rem] md:text-[1.2rem]">Our Services</h2>
            <p className=" font-semibold text-[2.5rem] leading-[1em] pt-5">We help startup&#39;s build their websites</p>
          </div>

          <div className=" mt-[5em] lg:flex justify-between gap-4 flexSm:flex-wrap">
            <StartUp />
          </div>

          <div className=" mt-[10em] md:mt-[16em] mx-auto relative text-center">
            <span className=" font-semibold text-[25rem] md:text-[35rem] opacity-10 absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] -z-10">U</span>
            <span className=" bg-[#FF6996] p-1 rounded-full text-sm uppercase font-bold px-4">Carefully Crafted Template</span>
            <p className=" text-[2.5rem] leading-[1.1em] mt-3 mb-10 lg:max-w-[16em] font-medium  lg:text-[3rem] mx-auto">“If you think good design is expensive, you should look at the cost of bad design.”</p>
            <button className=" text-black bg-white p-4 rounded-md font-bold text-[1rem]">
              View on Designer
            </button>
          </div>
        </div>
      </section>


      {/* Team */}
      <section className=" bg-[#111111] py-[5em] md:py-[10em] text-white">
        <div className="mx-auto px-5 w-full max-w-[1300px] lg:px-10">
          <div className=" text-center font-semibold">
            <h2 className=" text-[#FBB348] text-[1rem] md:text-[1.2rem]">Team</h2>
            <p className=" text-[2.5rem] mt-5 md:text-[3rem] md:mt-10">Meet our Heroes</p>
          </div>

          <div className=" mt-[5em] grid gap-7 grid_auto_fit_teams md:gap-x-4 lg:max-w-[75em] lg:mx-auto ">
            <Team />
          </div>
        </div>
      </section>


      {/* Fun Facts */}
      <section className=" py-10 text-white lg:pt-20">
        <div className="mx-auto px-5 w-full max-w-[1300px] lg:px-10">
          <h2 className=" text-center font-bold text-xl opacity-40 mt-3">Fun Facts</h2>

          <div className=" grid gap-5 my-10 grid_auto_fit_fun_fact">
            <FunFact />
          </div>

          <div className=" my-20 lg:mt-[8em]">
            <h2 className=" text-center text-[#F2AD45] font-bold text-[1.15rem] mb-10">Let&#39;s make some magic together</h2>

            <div className="lg:max-w-[35em] lg:mx-auto">
              <div className=" lg:relative flex flex-col gap-3">
                <input type="email" name="" id="" placeholder="Enter your email..." className=" px-5 py-5 font-semibold rounded-full bg-[#171717] text-[1rem] lg:p-8 lg:pr-[13em]"/>
                <button className=" lg:inline-block font-extrabold text-[1rem] rounded-full bg-[#3C5CCF] p-2 py-3 hover:bg-[#212121] focus:bg-[#212121] transition-colors lg:p-5 lg:w-[11em] lg:absolute lg:translate-y-[-50%] lg:top-[50%] lg:right-[1em]">Get Started</button>
              </div>

              <div className=" flex gap-3 items-center mt-5">
                <Checkbox />
                <p className=" text-[0.9rem] font-semibold"><span className=" opacity-60">By signing up you agree to our</span> <Link to={"/"} className=" underline text-white">Terms & Conditions.</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className=" text-white text-center pb-[8em] ">
        <div className="mx-auto px-5 w-full max-w-[1300px] lg:px-10">
          <h2 className=" text-xl font-semibold opacity-60">Testimonials</h2>
          <p className=" text-4xl font-semibold mt-4 lg:text-[3.2rem] lg:mt-5">Clients About Us</p>

          <div className=" grid gap-8 mt-20 grid_auto_fit_featured_work lg:max-w-[78em] lg:mx-auto">
            <Testimonial />
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

export default AboutPage