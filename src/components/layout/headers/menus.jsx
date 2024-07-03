  'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// internal
import menu_data from '@/data/menu-data';
import axios from "axios";

const Menus = () => {
  const [menu, setMenu] = useState([])

  useEffect(() => {
    MenusAndSubMenus();
  }, []);

  const MenusAndSubMenus = () => {
    axios
      .get("https://sreevidhya.co.in/file/wp-json/wp/v2/top-nav")
      .then((res) => {
        console.log("✌️resmenu --->", res);
        setMenu(res.data);
      })
      .catch((err) => {
        console.log("✌️err --->", err);
      });
  };

  console.log("menu: ", menu);
  return (
    <ul>
      {menu_data.map((menu, i) => (
        <li key={i} className={`has-dropdown ${menu.megaMenu ? 'has-mega-menu' : ''}`}>
          <Link href={menu.link}>
            {menu.title}
          </Link>
          {menu.hasDropdown && <ul className="submenu">
            {menu.submenus.map((sub, i) => (
              <li key={i}>
                <Link href={sub.link}>
                  {sub.title}
                </Link>
              </li>
            ))}
          </ul>}
          {menu.mega_menus && <ul className="mega-menu">
            {menu.mega_menus.map((mega, i) => (
              <li key={i}>
                <Link href={mega.link} className="mega-menu-title">
                  {mega.title}
                </Link>
                <ul>
                  {mega.submenus.map((sub_mega, i) => (
                    <li key={i}>
                      <Link href={sub_mega.link}>
                        {sub_mega.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>}
        </li>
      ))}

    </ul>
  );
};

export default Menus;