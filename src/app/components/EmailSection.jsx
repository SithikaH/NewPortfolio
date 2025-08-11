import React from "react";
// import GithubIcon from "public\images\bg.png";
// import LinkedInIcon from "public\images\icons8-linkedin.svg";
import Link from "next/link";
import Image from "next/image";

function EmailSection() {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gp-4 relative">
      <div className="bg-[radial-gradient(elipse-at-center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-8 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2">
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
      <p className="text-[#ADB7BE] mb-4 max-w-md">
        {""}
        fwfwefwebfjhewbfejhbwjhfbjwefb Lorem 
        ipsum dolor, sit amet consectetur
         adipisicing elit. Illo dolorum inventore modi nihil placeat cumque amet dolorem esse rerum quos aliquam, iusto porro numquam maiores molestiae sequi accusantium. Neque, vero.
        </p>
        <div className="Socials flex flex-row gap-2"></div>
        <Link href="github.com">
          image
          {/* <Image src={GithubIcon} alt="GitHub" /> */}
        </Link>
        <Link href="Linkedin.com">
          image
          {/* <Image src={LinkedIn} alt="Linkedin" /> */}
        </Link>
        <Link href="facebook.com">
          image
          {/* <Image src={facebook} alt="Facebook" /> */}
        </Link>
        </div>
        <div>
          <form className="flex flex-col">
            <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2  text-sm font-medium">Your Email</label>
            <input
              name="email"
              type="email" id="email" required
              className="bg-[#18191E] border border-[#33353F] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              placeholder="sithikahimandith11883@gmail.com"
            
            />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
            <input
              name="subject"
              type="text" id="subject" required
              className="bg-[#18191E] border border-[#33353F] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Write your idea"
            
            /></div>
            <div className="mb-6">
              <label htmlFor="message"
              className="text-white block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Leave your message..."
                />
            </div>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-2 rounded-lg w-full">
              Submit
            </button>
          </form>
        </div>
        </div>
    </section>
  );
};

export default EmailSection;
