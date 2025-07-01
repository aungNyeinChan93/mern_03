import React, { useContext } from "react";
import { NavLink, Link, redirect, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/authProvider";

const Navbar = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    localStorage.removeItem("token");
    setAuth(null);
    // return redirect("/auth/login");
    return navigate("/auth/login");
  };
  return (
    <React.Fragment>
      <header className="flex shadow-lg py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between gap-4 w-full">
          <div
            id="collapseMenu"
            className="max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "hover:text-blue-700 text-blue-700 block font-medium text-[15px]"
                      : "hover:text-blue-700 text-gray-700 block font-medium text-[15px]"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                <NavLink
                  to={"/notes"}
                  className={({ isActive }) =>
                    isActive
                      ? "hover:text-blue-700 text-blue-700 block font-medium text-[15px]"
                      : "hover:text-blue-700 text-gray-700 block font-medium text-[15px]"
                  }
                >
                  Notes
                </NavLink>
              </li>
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                <NavLink
                  to={"./contact"}
                  className={({ isActive }) =>
                    isActive
                      ? "hover:text-blue-700 text-blue-700 block font-medium text-[15px]"
                      : "hover:text-blue-700 text-gray-700 block font-medium text-[15px]"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center ml-auto space-x-6">
            {auth && Object.keys(auth).length > 0 && (
              <>
                <button className="font-medium text-[15px] border-0 outline-0 cursor-pointer ">
                  <span className="text-blue-700 hover:underline">
                    {auth && auth?.name}
                  </span>
                </button>
                <div className="px-4 rounded py-2 text-sm  font-medium text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 cursor-pointer">
                  <button
                    type="button"
                    className="text-white-700 rounded hover:underline"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              </>
            )}

            {!auth && (
              <>
                <button className="font-medium text-[15px] border-0 outline-0 cursor-pointer">
                  <Link
                    to="/auth/login"
                    className="text-blue-700 hover:underline"
                  >
                    Login
                  </Link>
                </button>
                <button className="px-4 rounded py-2 text-sm  font-medium text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 cursor-pointer">
                  <Link
                    to="/auth/register"
                    className="text-white-700 rounded hover:underline"
                  >
                    Register
                  </Link>
                </button>
              </>
            )}

            <button id="toggleOpen" className="lg:hidden cursor-pointer">
              <svg
                className="w-7 h-7"
                fill="#333"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
