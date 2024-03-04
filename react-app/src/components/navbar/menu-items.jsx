import React from "react";
import { FaCaretDown } from "react-icons/fa6";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const MenuItems = () => {
  return (
    <>
      <ul className="sm:flex hidden items-center">
        {Menu.map((data) => (
          <li key={data.id}>
            <a
              href={data.link}
              className="inline-block px-4 hover:text-primary"
            >
              {data.name}
            </a>
          </li>
        ))}
        {/* Simple Dropdown and Links */}
        <li className="group relative cursor-pointer">
          <a href="#" className="flex items-center gap-[2px] py-2">
            Trending
            <span>
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
          </a>
          <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white p-2 text-black rounded-md shadow-md">
            <ul>
              {DropdownLinks.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
};

export default MenuItems;

/*
 */
