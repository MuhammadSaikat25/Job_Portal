import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
type Props = {
  menu: boolean;
  setMenu: (menu: boolean) => void;
};
const MobileSideBar = ({ menu, setMenu }: Props) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="absolute top-0 bg-gray-950 bg-opacity-30 w-full h-screen lg:hidden">
      <div
        ref={sidebarRef}
        style={{ transform: menu ? "translateX(0)" : "translateX(-200px)" }}
        className="w-fit h-full bg-[#FFFFFF] fixed text-black px-2 py-1 z-[20] top-0 left-0 transition-transform duration-300"
      >
        <h1>Hello Hero</h1>
        <NavLink to={"dashboard-hero"}>Dashboard</NavLink>
      </div>
    </div>
  );
};

export default MobileSideBar;
