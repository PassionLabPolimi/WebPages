"use client";
import Link from "next/link";
import { useI18n } from "./I18nProvider";

export default function Navbar() {
  const { strings, links, setLang } = useI18n();
  const s = strings?.navbar || {};
  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>
          <figure className="image" style={{ maxWidth: '20px' }}>
            <img className="is-rounded is-square" src="/assets/images/logo.png" alt="icon" />
          </figure>
          <b>PLP</b>
        </a>
        <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false"
          onClick={() => {
            const burger = document.querySelector('.navbar-burger');
            const menu = document.getElementById('navMenu');
            burger?.classList.toggle('is-active');
            menu?.classList.toggle('is-active');
          }}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu" id="navMenu">
        <div className="navbar-start">
          <a className="navbar-item" href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>{s.home || ''}</a>
          <Link className="navbar-item" href="/wechatgroups">{s.groups || ''}</Link>
          <Link className="navbar-item" href="/events">{s.events || ''}</Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" href="/work">{s.more || ''}</Link>
            <div className="navbar-dropdown">
              <a className="navbar-item" href={links?.instagram || '#'}>{s.instagram || ''}</a>
              <a className="navbar-item" href={links?.rednote || '#'}>{s.rednote || ''}</a>
              <Link className="navbar-item" href="/work">{s.sponsor || ''}</Link>
              <Link className="navbar-item" href="/work">{s.ourTeam || ''}</Link>
              <hr className="navbar-divider" />
              <Link className="navbar-item" href="/work">{s.contactUs || s.contactUS || ''}</Link>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-dark" href="#" onClick={(e) => { e.preventDefault(); setLang('en'); }}>EN</a>
              <a className="button is-dark" href="#" onClick={(e) => { e.preventDefault(); setLang('zh'); }}>中</a>
              <a className="button is-primary" href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}><strong>{s.aboutUs || ''}</strong></a>
              <Link className="button is-light" href="/join-us">{s.joinUs || ''}</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}


