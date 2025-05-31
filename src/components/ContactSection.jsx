function ContactSection() {
  return (
    <address className="bg-[#181818] text-white">
      <div className="px-6 py-12 bg-[#181818] mx-10 my-5 flex flex-wrap justify-between items-center gap-12 md:px-[50px] md:py-[100px] max-w-[1400px] md:mx-auto">
        <div>
          <h1 className="font-bold text-3xl md:text-4xl">Let's work together on your next project.</h1>
          <p className="font-semibold text-[.9rem] mt-5 text-[#cecece]">
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Alias,<br />
            dolores. amet consectetur adipisicing
          </p>
        </div>
        <button className="bg-[#f83241] border-none text-white w-[150px] p-4 mt-8 text-xl font-semibold cursor-pointer">
          CONTACT
        </button>
      </div>
    </address>
  );
}

export default ContactSection;
