import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export function Header({ opened, toggle }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarDropdownOpen, setSidebarDropdownOpen] = useState(false);

  const services = [
    { name: "AUTO A/C REPAIR", path: "/services/auto-ac-repair" },
    { name: "BATTERY REPLACEMENT", path: "/services/battery-replacement" },
    { name: "BELTS & HOSES", path: "/services/belts-hoses" },
    { name: "BRAKE REPAIR", path: "/services/brake-repair" },
    { name: "COOLING SYSTEM REPAIR", path: "/services/cooling-system-repair" },
    { name: "ENGINE REPAIR", path: "/services/engine-repair" },
    { name: "EXHAUST SYSTEM REPAIR", path: "/services/exhaust-system-repair" },
    { name: "OIL CHANGE", path: "/services/oil-change" },
    { name: "TIRE ROTATION", path: "/services/tire-rotation" },
    { name: "TRANSMISSION REPAIR", path: "/services/transmission-repair" },
    { name: "VEHICLE INSPECTION", path: "/services/vehicle-inspection" },
    { name: "WHEEL ALIGNMENT", path: "/services/wheel-alignment" },
    { name: "WINDSHIELD WIPER REPLACEMENT", path: "/services/windshield-wiper-replacement" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleHomeClick = () => {
    if (opened) toggle();

    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      setTimeout(() => {
        const activeItem = document.querySelector(`.${classes.servicesItem}.${classes.active}`);
        if (activeItem) {
          activeItem.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 50);
    }
  }, [dropdownOpen]);

  useEffect(() => {
    if (sidebarDropdownOpen) {
      setTimeout(() => {
        const activeItem = document.querySelector(
          `.${classes.sidebarDropdownItem}.${classes.sidebarActive}`
        );
        if (activeItem) {
          activeItem.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 50);
    }
  }, [sidebarDropdownOpen]);

  useEffect(() => {}, [location.pathname]);

  const closeSidebarAndGo = (path: string) => {
    if (opened) toggle();
    navigate(path);
  };

  return (
    <>
      <header className={classes.header}>
          <h1 className={classes.logoText}>SKYZ AUTO REPAIR</h1>
        
        <nav className={classes.nav}>
          <Link
            to="/"
            className={`${classes.link} ${isActive("/") ? classes.active : ""}`}
            onClick={handleHomeClick}
          >
            HOME
          </Link>

          <Link to="/about" className={`${classes.link} ${isActive("/about") ? classes.active : ""}`}>
            ABOUT
          </Link>

          <Link
            to="/specials"
            className={`${classes.link} ${isActive("/specials") ? classes.active : ""}`}
          >
            SPECIALS
          </Link>

          <Link
            to="/financing"
            className={`${classes.link} ${isActive("/financing") ? classes.active : ""}`}
          >
            FINANCING
          </Link>

          <Link
            to="/contact"
            className={`${classes.link} ${isActive("/contact") ? classes.active : ""}`}
          >
            CONTACT
          </Link>

          <div className={classes.dropdownContainer}>
            <button className={classes.dropdownBtn} onClick={() => setDropdownOpen(!dropdownOpen)}>
              SERVICES
              <span style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
            </button>

            {dropdownOpen && (
              <div className={classes.servicesDropdown}>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className={`${classes.servicesItem} ${
                      isActive(service.path) ? classes.active : ""
                    }`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className={classes.hamburger} onClick={toggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <div className={`${classes.sidebar} ${opened ? classes.open : ""}`}>
        <div className={classes.closeBtn} onClick={toggle}>
          ×
        </div>

        <Link
          to="/"
          className={`${classes.sidebarLink} ${isActive("/") ? classes.sidebarActive : ""}`}
          onClick={handleHomeClick}
        >
          HOME
        </Link>

        <Link
          to="/about"
          className={`${classes.sidebarLink} ${isActive("/about") ? classes.sidebarActive : ""}`}
          onClick={() => closeSidebarAndGo("/about")}
        >
          ABOUT
        </Link>

        <Link
          to="/specials"
          className={`${classes.sidebarLink} ${isActive("/specials") ? classes.sidebarActive : ""}`}
          onClick={() => closeSidebarAndGo("/specials")}
        >
          SPECIALS
        </Link>

        <Link
          to="/financing"
          className={`${classes.sidebarLink} ${isActive("/financing") ? classes.sidebarActive : ""}`}
          onClick={() => closeSidebarAndGo("/financing")}
        >
          FINANCING
        </Link>

        <Link
          to="/contact"
          className={`${classes.sidebarLink} ${isActive("/contact") ? classes.sidebarActive : ""}`}
          onClick={() => closeSidebarAndGo("/contact")}
        >
          CONTACT
        </Link>

        <button
          className={classes.sidebarDropdownBtn}
          onClick={() => setSidebarDropdownOpen(!sidebarDropdownOpen)}
        >
          SERVICES
        </button>

        {sidebarDropdownOpen && (
          <div className={classes.sidebarDropdownMenu}>
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className={`${classes.sidebarDropdownItem} ${
                  isActive(service.path) ? classes.sidebarActive : ""
                }`}
                onClick={() => closeSidebarAndGo(service.path)}
              >
                {service.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
