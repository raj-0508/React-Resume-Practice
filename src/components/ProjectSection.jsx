import pic1 from "../assets/pic-1.jpg";
import pic2 from "../assets/pic-2.jpg";
import pic3 from "../assets/pic-3.jpg";
import pic4 from "../assets/pic-4.jpg";
import arrow from "../assets/arrow.svg";

function ProjectSection() {
  return (
    <div class="pt-8 max-w-[1340px] mx-auto mt-32">
      <div class="flex flex-wrap gap-5 justify-between items-center px-20">
        <div class="left">
          <h1 className="font-bold text-3xl">FEATURED PROJECTS</h1>
          <p className="text-[#cecece] mt-2 font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <button className="bg-[#f83241] border-none text-white w-[150px] p-4 mt-8 text-xl font-semibold cursor-pointer">
          VIEW ALL
        </button>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-11">
        <div class="project">
            <div class="bg-[#1e1e1e] flex justify-center items-center max-w-[600px]">
              <img
                src={pic1}
                alt="project-1"
                className=" w-full max-w-[500px] p-14"
              />
            </div>
          <div className="mt-2 ml-2.5">
            <h2 className="font-semibold text-2xl">Foodasa</h2>
            <a
              className="text-[#f83241] no-underline text-[.9rem] mt-1.5 flex gap-2 items-center"
              href="#"
            >
              KNOW MORE <img src={arrow} alt=""></img>
            </a>
          </div>
        </div>
        <div class="project">
            <div class="bg-[#1e1e1e] flex justify-center items-center max-w-[600px]">
              <img
                src={pic2}
                alt="project-2"
                className=" w-full max-w-[500px] p-14"
              />
            </div>
          <div className="mt-2 ml-2.5">
            <h2 className="font-semibold text-2xl">Foodasa</h2>
            <a
              className="text-[#f83241] no-underline text-[.9rem] mt-1.5 flex gap-2 items-center"
              href="#"
            >
              KNOW MORE <img src={arrow} alt=""></img>
            </a>
          </div>
        </div>
        <div class="project">
            <div class="bg-[#1e1e1e] flex justify-center items-center max-w-[600px]">
              <img
                src={pic3}
                alt="project-3"
                className=" w-full max-w-[500px] p-14"
              />
            </div>
          <div className="mt-2 ml-2.5">
            <h2 className="font-semibold text-2xl">Foodasa</h2>
            <a
              className="text-[#f83241] no-underline text-[.9rem] mt-1.5 flex gap-2 items-center"
              href="#"
            >
              KNOW MORE <img src={arrow} alt=""></img>
            </a>
          </div>
        </div>
        <div class="project">
            <div class="bg-[#1e1e1e] flex justify-center items-center max-w-[600px]">
              <img
                src={pic4}
                alt="project-4"
                className=" w-full max-w-[500px] p-14"
              />
            </div>
          <div className="mt-2 ml-2.5">
            <h2 className="font-semibold text-2xl">Foodasa</h2>
            <a
              className="text-[#f83241] no-underline text-[.9rem] mt-1.5 flex gap-2 items-center"
              href="#"
            >
              KNOW MORE <img src={arrow} alt=""></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
