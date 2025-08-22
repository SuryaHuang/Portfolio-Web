import "../../Css/index.tailwind.css";
import PortfolioPic from "../../Images/Logo/Portfolio_Pic.png";

function HeroSection() {
  return (
    <>
      <section id="home" className="tw:pt-36">
        <div className="tw:container">
          <div className="tw:flex tw:flex-wrap">
            <div className="tw:w-full tw:self-center tw:px-5 tw:lg:w-1/2">
              <h1 className="tw:text-base tw:font-semibold tw:text-primary tw:md:text-2xl">
                Hello, my name is
                <span className="tw:block tw:font-bold tw:text-sub tw:text-4xl tw:mt-1 tw:lg:text-5xl">
                  Surya Huang
                </span>
              </h1>
              <h2 className="tw:font-medium tw:text-primary tw:text-lg tw:mb-8 tw:lg:text-2xl:">
                I am <span className="tw:text-sub">Web Developer</span>
              </h2>
              <a
                className="tw:text-base tw:font-semibold tw:py-3 tw:px-8 tw:rounded-full tw:text-buttontext tw:bg-button tw:hover:text-texthover tw:hover:bg-hover tw:transition-colors tw:duration-300 tw:ease-in-out tw:shadow-lg"
                href="#contact"
              >
                Contact Me
              </a>
            </div>

            <div className="tw:w-full tw:self-end tw:px-4 tw:lg:w-1/2">
              <div className="tw:mt-10 tw:relative tw:lg:mt-9 tw:lg:right-0">
                <img
                  src={PortfolioPic}
                  alt="PortfolioPic"
                  className="tw:max-w-full tw:mx-auto"
                />
                <span className="tw:absolute tw:bottom-0 tw:-z-10 tw:left-1/2 tw:-translate-x-1/2 tw:md:scale-125">
                  <svg
                    width="300"
                    height="400"
                    viewBox="5 15 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#e2dcc8"
                      d="M64,7.2C64,32.7,32,65.4,7.4,65.4C-17.2,65.4,-34.4,32.7,-34.4,7.2C-34.4,-18.3,-17.2,-36.5,7.4,-36.5C32,-36.5,64,-18.3,64,7.2Z"
                      transform="translate(100 60) scale(1.6)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
