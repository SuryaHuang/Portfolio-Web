import { useEffect, useRef, useState } from "react";
import "../Css/index.tailwind.css";
import Logo from "../Images/Logo/Logo_Navbar.png";

const NavBar = () => {
  const hamburgerRef = useRef(null);
  const navMenuRef = useRef(null);
  // Hamburger & Nav-toggle
  useEffect(() => {
    const handleClick = () => {
      hamburgerRef.current.classList.toggle("hamburger-active");
      navMenuRef.current.classList.toggle("tw:hidden");
    };

    const hamburger = hamburgerRef.current;
    const navMenu = navMenuRef.current;

    hamburger?.addEventListener("click", handleClick);
    navMenu?.addEventListener("click", handleClick);
    return () => {
      hamburger?.removeEventListener("click", handleClick);
      navMenu?.removeEventListener("click", handleClick);
    };
  }, []);

  // Fixed Nav
  const [isFixed, setIsFixed] = useState(false);
  const headerRef = useRef(null);
  useEffect(() => {
    const headerEl = headerRef.current;
    const trigger = headerEl.offsetHeight;

    const onScroll = () => {
      const y = window.pageYOffset;
      setIsFixed(y > trigger);
      if (window.pageYOffset > trigger && !isFixed) {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`tw:pr-10 tw:fixed tw:top-0 tw:left-0 tw:w-full tw:flex tw:items-center tw:z-10 tw:transition tw:duration-300 tw:ease-in-out ${
          isFixed
            ? "tw:top-0 tw:left-0 tw:w-full tw:fixed tw:z-[99] tw:bg-hover/80 tw:backdrop-blur-[5px] tw:shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.2)]"
            : "tw:absolute tw:top-0 tw:left-0 tw:w-full"
        }`}
      >
        <div className="tw:container">
          <div className="tw:flex tw:items-center tw:justify-between tw:relative">
            <div className="tw:px-4">
              <a href="#home" className="tw:block tw:py-4 tw:w-16">
                <img src={Logo} alt="Logo" />
              </a>
            </div>

            <div className="tw:flex tw:items-center tw:px-4">
              <button
                id="hamburger"
                ref={hamburgerRef}
                name="hamburger"
                type="button"
                className="tw:block tw:absolute tw:right-4 tw:lg:hidden"
              >
                <span className="hamburger-line tw:transition tw:duration-500 tw:ease-in-out tw:origin-top-left"></span>
                <span className="hamburger-line tw:transition tw:duration-400 tw:ease-in-out"></span>
                <span className="hamburger-line tw:transition tw:duration-500 tw:ease-in-out tw:origin-bottom-left"></span>
              </button>

              <nav
                id="nav-menu"
                ref={navMenuRef}
                className="tw:hidden tw:absolute tw:py-5 tw:bg-background tw:shadow-lg tw:rounded-lg tw:max-w-[250px] tw:w-full tw:right-4 tw:top-full tw:transition tw:duration-500 tw:ease-in-out tw:lg:block tw:lg:static tw:lg:bg-transparent tw:lg:max-w-full tw:lg:shadow-none tw:lg:rounded-none"
              >
                <ul className="tw:block tw:lg:flex">
                  <li className="tw:group">
                    <a
                      href="#home"
                      className="tw:text-base tw:font-semibold tw:text-primary tw:py-2 tw:mx-8 tw:flex tw:group-hover:text-texthover"
                    >
                      Home
                    </a>
                  </li>
                  <li className="tw:group">
                    <a
                      href="#about"
                      className="tw:text-base tw:font-semibold tw:text-primary tw:py-2 tw:mx-8 tw:flex tw:group-hover:text-texthover"
                    >
                      About
                    </a>
                  </li>
                  <li className="tw:group">
                    <a
                      href="#portfolio"
                      className="tw:text-base tw:font-semibold tw:text-primary tw:py-2 tw:mx-8 tw:flex tw:group-hover:text-texthover"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="tw:group">
                    <a
                      href="#contact"
                      className="tw:text-base tw:font-semibold tw:text-primary tw:py-2 tw:mx-8 tw:flex tw:group-hover:text-texthover"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
