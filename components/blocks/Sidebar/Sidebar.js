import Image from "next/image";
import React from "react";
import logoIcon from "@/base/logo-vercel-svgrepo-com.svg";
import Link from "next/link";

import { AiFillHome } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { FaLayerGroup } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__container">
        <nav className="sidebar__nav">
          <Link href="/">
            <a className="sidebar__logo-link">
              <span className="sidebar__logo-img-wrapper">
                <Image height={30} width={30} alt="logo" src={logoIcon} />
              </span>
              <span className="sidebar__logo-link-text">Logo</span>
            </a>
          </Link>

          <Link href="#">
            <a className="sidebar__item">
              <AiFillHome className="sidebar__item-icon" />
              <span className="sidebar__item-text">Главная</span>
            </a>
          </Link>
          <Link href="#">
            <a className="sidebar__item">
              <HiUserGroup className="sidebar__item-icon" />
              <span className="sidebar__item-text">Клиенты</span>
            </a>
          </Link>
          <Link href="#">
            <a className="sidebar__item">
              <FaLayerGroup className="sidebar__item-icon" />
              <span className="sidebar__item-text">Сотрудники</span>
            </a>
          </Link>
          <Link href="#">
            <a className="sidebar__item">
              <IoMdAnalytics className="sidebar__item-icon" />
              <span className="sidebar__item-text">Аналитика</span>
            </a>
          </Link>
        </nav>
      </div>
    </aside>
  );
}
