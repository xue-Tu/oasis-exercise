import Logo from "/logo-dark.png";
import { MenuData } from "../../data/MenuData.jsx";
import Menu from "./Menu.jsx";

function Sidebar() {
  return (
    <aside className="md:w-[60px] xl:w-[200px] w-0  bg-white md:border md:border-r-gray-100 md:px-2 xl:px-5 md:py-8 row-span-full h-screen ease-out duration-300">
      {/* Logo Section */}
      <div className="hidden xl:block xl:px-3 ">
        <img src={Logo} alt="dark-logo" className="xl:w-[140px]" />
      </div>
      {/* Menu Section  */}
      <nav className="mt-12 hidden md:block">
        <ul className="space-y-5  ">
          {MenuData.map((menu) => (
            <Menu key={menu.id} menu={menu} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
