import "../../Css/index.tailwind.css";
import project1 from "../../Images/Projects/Project-1.png";
import project2 from "../../Images/Projects/Project-2.png";
import project3 from "../../Images/Projects/Project-3.png";

const PortfolioSection = () => {
  return (
    <>
      <section id="portfolio" className="tw:pt-36 tw:pb-32 tw:bg-background-2">
        <div className="tw:container">
          <div className="tw:w-full tw:px-4">
            <div className="tw:max-w-xl tw:mx-auto tw:text-center tw:mb-16">
              <h4 className="tw:uppercase tw:font-semibold tw:text-2xl tw:lg:text-3xl tw:text-sub tw:pb-2">
                Portfolio
              </h4>
              <h2 className="tw:font-bold tw:text-md tw:text-xl tw:sm:text-2xl tw:mb-2 tw:text-primary">
                Projects
              </h2>
              <p className="tw:font-medium tw:text-sm tw:text-secondary">
                Every pixel tells a story. These projects showcase my approach
                to clean design, responsive layouts, and purposeful UI
                decisions—built with React, Tailwind, and a lot of curiosity.
              </p>
            </div>
          </div>

          <div className="tw:w-full tw:px-4 tw:flex tw:flex-wrap tw:justify-center tw:xl:w-10/12 tw:xl:mx-auto tw:bg-background-2 tw:md:bg-background tw:md:rounded-2xl tw:md:py-5">
            <div className="tw:mb-12 tw:p-5 tw:md:w-1/2 tw:rounded-2xl">
              <div className="tw:rounded-md tw:shadow-md tw:overflow-hidden tw:hover:-translate-y-2 tw:transition tw:duration-300 tw:ease-in-out">
                <a
                  href="https://harisenin-mission-4.vercel.app/"
                  target="_blank"
                >
                  <img src={project1} alt="Project-1" width="w-full" />
                </a>
              </div>
              <h3 className="tw:font-semibold tw:text-xl tw:text-primary tw:mt-5 tw:mb-3">
                List To Do - Web
              </h3>
              <p className="tw:font-medium tw:text-base tw:text-secondary">
                A simple task manager using HTML, CSS, and JavaScript with
                localStorage for saving tasks. Clean UI and smooth interactions
                highlight DOM control and client-side storage.
              </p>
            </div>

            <div className="tw:mb-12 tw:p-4 tw:md:w-1/2 tw:rounded-2xl">
              <div className="tw:rounded-md tw:shadow-md tw:overflow-hidden tw:hover:-translate-y-2 tw:transition tw:duration-300 tw:ease-in-out">
                <a
                  href="https://harisenin-mission-fe-1-b.vercel.app/"
                  target="_blank"
                >
                  <img src={project2} alt="Project-2" width="w-full" />
                </a>
              </div>
              <h3 className="tw:font-semibold tw:text-xl tw:text-primary tw:mt-5 tw:mb-3">
                Film - Web
              </h3>
              <p className="tw:font-medium tw:text-base tw:text-secondary">
                Built with React and styled using HTML & CSS, this movie site
                uses Vite for fast builds and smooth performance. A clean UI and
                dynamic components highlight modern frontend practices.
              </p>
            </div>

            <div className="tw:mb-12 tw:p-4 tw:md:w-1/2">
              <div className="tw:rounded-md tw:shadow-md tw:overflow-hidden tw:hover:-translate-y-2 tw:transition tw:duration-300 tw:ease-in-out">
                <a href="#" target="_blank">
                  <img src={project3} alt="Project-3" width="w-full" />
                </a>
              </div>
              <h3 className="tw:font-semibold tw:text-xl tw:text-primary tw:mt-5 tw:mb-3">
                Wedding Invitation - Web
              </h3>
              <p className="tw:font-medium tw:text-base tw:text-secondary">
                Responsive invitation site built with HTML, CSS, and Bootstrap.
                Clean layout and fast UI development using Bootstrap components.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
