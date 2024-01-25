import { Link } from "react-router-dom"

import FeaturedWork from "../components/FeaturedWork"
import FunFact from "../components/FunFact"
import StartUp from "../components/StartUp"
import Checkbox from "../components/Checkbox"
import Testimonial from "../components/Testimonial"
import Contact from "../components/Contact"
import Market from "../components/Market"

const Home = () => {
  
  return (
    <>
      {/* Hero */}
      <section className=" pt-[7em] text-white lg:pt-[10em] pb-[10em]">
        <div className="mx-auto px-5 w-full max-w-[1300px] lg:px-10">
          <div className=" lg:flex flex-row-reverse justify-between items-center">
            <div>
              <img src="https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62eb89715787c63447f58db7_photo-2.jpg" alt="Girl holding a phone" className=" w-full lg:max-w-lg" />
            </div>
            <div>
              <div className=" max-w-[40em] lg:pr-10">
                <h1 className=" text-[2.3rem] leading-[1em] font-semibold py-7 lg:text-[5rem]">Create fast websites, in no time.</h1>
                <p className=" text-[1.5rem] leading-[1.2em] font-semibold mb-8">Use Unork&#39;s interactive design tools. <span className=" text-[#787878]">It&#39;s ton of customization options to customize anything.</span></p>
              </div>
              <div>
                <div className=" grid grid-cols-3 items-center opacity-80 md:justify-between max-w-[35em] lg:max-w-[30em] w-full flexSm:max-w-none">
                  <img src="https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea95d4f01323d20ac1067a_file%20(26).svg" className=" " alt="Colab Logo" />
                  <img src="https://assets.website-files.com/627298b34d84a873409730b9/62948e04394a4ca8365abbd3_file%20(15).svg" className=" " alt="Vision Logo" />
                  <img src="https://assets.website-files.com/627298b34d84a873409730b9/62948da133518fd4d14fc0da_file%20(13).svg" className=" " alt="PinPoint Logo" />
                </div>
                <p className=" text-[#3C5CCF] text-[1rem] ml-2 font-semibold">*Join over 7,000 satisfied customers</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      {/* Services */}
      <section className=" text-white">
        <div className="mx-auto px-5 w-full max-w-[1300px] lg:px-10">
          <div>
            <h2 className=" text-[#DC9D3F] font-semibold text-[1rem] md:text-[1.2rem]">Our Services</h2>
            <p className=" font-semibold text-[2.5rem] leading-[1em] pt-5">We help startup&#39;s build their websites</p>
          </div>

          <div className=" mt-[5em] lg:flex justify-between gap-4 flexSm:flex-wrap">
            <StartUp />
          </div>

          <div className=" mt-[16em] mx-auto relative text-center">
            <span className=" font-semibold text-[25rem] md:text-[35rem] opacity-10 absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] -z-10">U</span>
            <span className=" bg-[#FF6996] p-1 rounded-full text-sm uppercase font-bold px-4">Carefully Crafted Template</span>
            <p className=" text-[2.5rem] leading-[1.1em] mt-3 mb-10 lg:max-w-[16em] font-medium  lg:text-[3rem] mx-auto">“If you think good design is expensive, you should look at the cost of bad design.”</p>
            <button className=" text-black bg-white p-4 rounded-md font-bold text-[1rem]">
              View on Designer
            </button>
          </div>
        </div>
      </section>

      {/* Crafted */}
      <section className=" text-white mt-[8em] md:mt-[15em] xl:mt-[15em] lg:mt-[1em] mb-[5em] lg:py-[15em]">
        <div className="mx-auto px-5 w-full max-w-[1300px] lg:px-10">
          <div className=" xl:grid justify-between grid-cols-2 gap-10 items-center xl:relative">
            <div>
              <img src="https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62f237c50b52a68497002314_ipad-p-1600.jpg" alt="" aria-hidden className=" xl:absolute xl:left-[-20em] xl:w-[60em] xl:top-[50%] xl:translate-y-[-50%]" />
            </div>

            <div>
              <p className=" text-[#3C5CCF] text-[1.2rem] font-semibold mt-8 mb-5">Crafted with Love</p>
              <h2 className=" lg:text-[3.5rem] lg:max-w-[15.5ch] text-[2.5rem] leading-[1.1em] font-semibold">Unork scales as your business grows</h2>
              <p className=" text-[1.5rem] lg:max-w-[27ch] font-semibold leading-[1.3em] mt-5 max-w-[80%]"><span className=" opacity-50">We are passionate about creating</span> high quality templates on Webflow.</p>
            </div>
                    </div>
          </div>
      </section>


      {/* Featured Work */}
      <section className=" pt-20 pb-10 lg:pb-[5em] text-white bg-[#111111] ">
        <div className="mx-auto px-5 w-full max-w-[1300px] lg:px-10">
          <div className=" text-center">
            <p className=" text-[#707070] font-bold text-xl">Featured Work</p>
            <h2 className=" mt-5 text-[2.5rem] leading-[1em] font-semibold">We turn ideas into reality</h2>

            <div className=" mt-16 grid grid_auto_fit_featured_work gap-8 lg:gap-y-0 lg:max-w-[64.5em] lg:mx-auto">
              <FeaturedWork />
            </div>
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
      <section className=" text-white text-center py-0 lg:pb-[8em] ">
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


      {/* Market */}
      <section className=" py-20 text-white lg:pt-[8em]">
        <div className="mx-auto px-5 w-full max-w-[1300px] lg:px-10">


          <div className=" grid gap-10 gap-y-6 grid_auto_fit_featured_work">
            <Market />
          </div>


          <div className=" text-center mt-10 lg:mt-[10em]">
            <h2 className=" font-semibold text-[2.5rem] leading-[1em] lg:text-[6em] lg:max-w-[15ch] lg:mx-auto lg:leading-[1.r">Get started with Unork today</h2>
            <p className=" my-10 text-[1.5rem] opacity-60 font-semibold">Make sure your business puts people first.</p>
            <div className="lg:flex lg:justify-center items-center lg:gap-5 lg:flex-row-reverse">
              <p className=" text-[1rem] font-semibold mt-10 lg:mt-0"><span className="opacity-60 ">Or call us:</span> 1800 832 993</p>
              <button className=" mt-5 lg:mt-0 font-bold text-[1rem] p-4 rounded-md bg-[#3CCF91] transition-colors hover:bg-[#222]">View on Designer</button>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default Home