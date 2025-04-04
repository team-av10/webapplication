import { Outlet, Link } from "react-router-dom";
import logo from "../assets/av10-logo.png";

const Layout = () => {
  return (
    <>
      <nav className="bg-gray-900 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/">
            <img
              src={logo} // Replace with your logo path
              alt="AV10"
              className="h-12 w-auto" // Adjust height as needed
            />
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-700 rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard_tree"
                className="px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-700 rounded-md"
              >
                Tree Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard_station"
                className="px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-700 rounded-md"
              >
                Station Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
