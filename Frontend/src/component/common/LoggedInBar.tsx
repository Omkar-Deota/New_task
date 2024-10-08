import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserProvider";

const LoggedInBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const Navigate = useNavigate();
  const { logout } = useUserContext();
  const handleLogout=()=>{
    logout();
    Navigate("/")
  }
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
   const navItems = [
    { label: "My Subscriptions"},
    { label: "Performance"},
    { label: "NewsLetter"},
    { label: "Contribute"},
  ];
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">Virtuality</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item: any, index: any) => (
               <li key={index}>
                <Link to="/">{item.label}</Link>
              </li>
              
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <button type="button" onClick={handleLogout} className="py-2 px-3 border rounded-md bg-slate-600">
              Sign out
            </button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item:any, index:any) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link to="/login" className="py-2 px-3 border rounded-md">
                Sign Out
              </Link>
            </div>
          </div>
        )}
      </div>

    </nav>
  );
};

export default LoggedInBar;
