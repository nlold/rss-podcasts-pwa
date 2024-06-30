"use client";

import React, { useContext } from "react";
import Link from "next/link";

import { CommonContext } from "../CommonContext/CommonContext";

const SideNav = () => {
  const { podcasts } = useContext(CommonContext);

  return (
    <>
      <input className="sidebar-toggle" id="sidebar-toggle" type="checkbox" />
      <section className="col sidebar">
        <Link href={"/"} className="link--unstyled">
          <section className="sidebar-header">
            <strong>Podcast RSS Listener</strong>
          </section>
        </Link>
        <nav>
          <ul className="notes-list">
            {podcasts?.map(({ id, name }, index) => (
              <li key={index}>
                <div className="sidebar-note-list-item">
                  <Link href={`/podcast/${id}`}>{name}</Link>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
};

export default SideNav;
