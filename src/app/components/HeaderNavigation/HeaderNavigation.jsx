import { useEffect, useState } from "react";
import Navbar from "../shared/Navbar.jsx";
import NavbarMenu from "../NavbarMenu/NavbarMenu.jsx";
import { disabledScrolling } from "@/app/utils/disabledScrolling.js";

const HeaderNavigation = ({ timeline }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    disabledScrolling(isOpen);
  }, [isOpen]);

  return (
    <>
      <Navbar handleMenu={handleMenu} isOpen={isOpen} timeline={timeline} />
      <NavbarMenu handleMenu={handleMenu} isOpen={isOpen} timeline={timeline} />
    </>
  );
};

export default HeaderNavigation;
