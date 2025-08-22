import "../../Css/index.tailwind.css";

const ContactSection = () => {
  return (
    <>
      <section id="contact" className="tw:pt-36 tw:pb-32">
        <div className="tw:container">
          <div className="tw:w-full tw:px-4">
            <div className="tw:max-w-xl tw:mx-auto tw:text-center tw:mb-16">
              <h4 className="tw:uppercase tw:font-semibold tw:text-lg tw:text-sub tw:mb-2 tw:lg:text-2xl">
                Contact
              </h4>
              <h2
                className="tw:font-bold tw:text-lg tw:text-primary tw:mb-2 tw:sm:text-xl
              tw:text-md"
              >
                Let’s Connect
              </h2>
              <p className="tw:font-medium tw:text-md tw:text-secondary tw:md:text-lg tw:mb-2">
                Have a project in mind or just want to connect? I’d love to hear
                from you.
              </p>
            </div>
          </div>

          <form>
            <div className="tw:w-full tw:md:w-2/3 tw:lg:w-1/3 tw:md:mx-auto tw:bg-background-2 tw:p-4 tw:rounded-2xl">
              <div className="tw:w-full tw:px-4 tw:mb-4 ">
                <label
                  htmlFor="name"
                  className="tw:text-base tw:font-bold tw:text-sub"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="tw:w-full tw:bg-inputfill tw:text-inputtext tw:border tw:border-inputborder tw:rounded-md tw:py-1 tw:px-2  tw:text-base tw:focus:outline-secondary"
                />
              </div>

              <div className="tw:w-full tw:px-4 tw:mb-4">
                <label
                  htmlFor="email"
                  className="tw:text-base tw:font-bold tw:text-sub"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="tw:w-full tw:bg-inputfill tw:text-inputtext tw:border tw:border-inputborder tw:rounded-md tw:py-1 tw:px-2  tw:text-base tw:focus:outline-secondary"
                />
              </div>

              <div className="tw:w-full tw:px-4 tw:mb-4">
                <label
                  htmlFor="message"
                  className="tw:text-base tw:font-bold tw:text-sub"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  className="tw:w-full tw:bg-inputfill tw:text-inputtext tw:border tw:border-inputborder tw:rounded-md tw:py-1 tw:px-2  tw:text-base tw:focus:outline-secondary tw:h-32"
                ></textarea>
              </div>
              <div className="tw:w-full tw:flex">
                <button className="tw:mx-5 tw:ml-auto tw:text-base tw:font-semibold tw:py-3 tw:px-8 tw:md:px-5 tw:rounded-full tw:text-buttontext tw:bg-button tw:hover:text-texthover tw:hover:bg-hover tw:transition-colors tw:duration-300 tw:ease-in-out tw:shadow-lg">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
