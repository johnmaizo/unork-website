const Contact = () => {

  return (
    <div>
        <div className=" lg:flex lg:gap-5">
            <div className=" my-2">
                <label htmlFor="FirstName" className=" opacity-40 font-semibold">First Name</label>
                <input type="text" name="FirstName" id="FirstName" className=" bg-[#222222] rounded-md p-3 w-full text-[1rem] mt-2" />
            </div>
            <div className=" my-2">
                <label htmlFor="LastName" className=" opacity-40 font-semibold">Last Name</label>
                <input type="text" name="LastName" id="LastName" className=" bg-[#222222] rounded-md p-3 w-full text-[1rem] mt-2" />
            </div>
        </div>
        <div className=" my-2">
            <label htmlFor="Email" className=" opacity-40 font-semibold">Email</label>
            <input type="email" name="Email" id="Email" className=" bg-[#222222] rounded-md p-3 w-full text-[1rem] mt-2" />
        </div>
        <div className=" my-2">
            <label htmlFor="phone" className=" opacity-40 font-semibold">Phone</label>
            <input type="text" name="phone" id="phone" className=" bg-[#222222] rounded-md p-3 w-full text-[1rem] mt-2" />
        </div>
        
        <div className=" my-2">
            <label htmlFor="message" className=" opacity-40 font-semibold">Message</label>
            <textarea name="message" id="message" rows="5" className=" bg-[#222222] rounded-md p-3 w-full text-[1rem] mt-2 resize-y" placeholder="How can we help?"></textarea>
        </div>
        <button type="submit" className=" bg-[#3C5CCF] w-full p-4 rounded-md mt-4 ">Send Message</button>
    </div>
  )
}

export default Contact