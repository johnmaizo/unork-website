import {Link} from "react-router-dom";

import Checkbox from "../components/Checkbox";
import Market from "../components/Market";

const NewsPage = () => {
  return (
    <>
      <section className=" text-white font-semibold pt-[8em] md:pt-[10em] lg:pt-[20em] lg:pb-[2em]">
        <div className="mx-auto px-5 w-full max-w-[1300px] md:px-10 ">
          <div className=" lg:flex lg:justify-between lg:items-center lg:flex-wrap lg:gap-y-[5em] mb-[8em] lg:mb-[15em]">
              <h1 className=" text-[2.3rem] md:text-[4rem] lg:text-[5rem]">Our News</h1>
              <p className=" text-[1.5rem] leading-[1.3em] mt-10 md:mt-[3em] lg:mt-0 lg:max-w-[33ch] lg:mr-10 opacity-60">Catch up on all our latest musings and thoughts below.</p>
          </div>

          <div className=" grid gap-10 gap-y-6 grid_auto_fit_featured_work">
              <Market />
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
    </>
  );
};

export default NewsPage;
