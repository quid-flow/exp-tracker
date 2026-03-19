import DesktopNav from "./DeskNav";
import MobileNav from "./MobNav";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-0/0 backdrop-blur border-none border-slate-800">
      

      <DesktopNav />
      <MobileNav />

    </nav>
  );
};

export default Navbar;