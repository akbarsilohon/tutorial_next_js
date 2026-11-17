'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header(){
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <header className="header" id="header">
                <div className="headerInner">
                    <div className="hLeft">
                        <span className="menuOpen" id="menuOpen" onClick={() => setIsOpen(true)}>
                            <i className="fa-solid fa-bars"></i>
                        </span>
                        <Link href="/" className="brandUrl">
                            <Image
                                src="/next.svg"
                                className="brandImage"
                                alt="tutorial next js"
                                width={394}
                                height={80}
                                loading="eager"
                            />
                        </Link>
                    </div>
                    <nav className="navMenus">
                        <Link href="/" className={`navlink ${pathname === '/' ? 'active' : ''}`}>
                            <i className="fa-regular fa-house"></i>
                            <span className="menu_name">Home</span>
                        </Link>
                        <Link href="/about" className={`navlink ${pathname === '/about' ? 'active' : ''}`}>
                            <i className="fa-regular fa-user"></i>
                            <span className="menu_name">About</span>
                        </Link>
                        <Link href="/tutorial" className={`navlink ${pathname === '/tutorial' ? 'active' : ''}`}>
                            <i className="fa-solid fa-book"></i>
                            <span className="menu_name">Tutorial</span>
                        </Link>
                    </nav>
                    <Link href="#" className="actionHeader">
                        Kontak
                    </Link>
                </div>
            </header>
            <div className="header_spacer"></div>
            <div className={`flexboxMenu ${isOpen ? 'show' : ''}`} id="fexboxMenu">
                <div className="flexboxHeader">
                    <Link className="flextoHome" href="/">
                        <Image
                            src="/next.svg"
                            className="brandImage"
                            alt="tutorial next js"
                            width={394}
                            height={80}
                            loading="eager"
                        />
                    </Link>

                    <span className="menuClose" id="closeMenu" onClick={() => setIsOpen(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </span>
                </div>

                <div className="flexboxBody2">
                    <div className="flexboxGroup">
                        <Link href="/tutorial" className="flexboxItem">
                            <i className="fa-solid fa-book"></i>
                            <span className="TextMenu">Tutorial</span>
                        </Link>

                        <div className="submenuGroup">
                            <Link href="/tutorial/next-js" className="submenuItem">
                                <i className="fa-solid fa-arrow-right-long"></i>
                                <span className="submenuName">Next.js</span>
                            </Link>

                            <Link href="/tutorial/laravel" className="submenuItem">
                                <i className="fa-solid fa-arrow-right-long"></i>
                                <span className="submenuName">Laravel</span>
                            </Link>

                            <Link href="/tutorial/wordpress" className="submenuItem">
                                <i className="fa-solid fa-arrow-right-long"></i>
                                <span className="submenuName">WordPress</span>
                            </Link>
                        </div>
                    </div>

                    <div className="flexboxGroup">
                        <Link href="/resources" className="flexboxItem">
                            <i className="fa-solid fa-folder"></i>
                            <span className="TextMenu">Resources</span>
                        </Link>

                        <div className="submenuGroup">
                            <Link href="/resources/tools" className="submenuItem">
                                <i className="fa-solid fa-arrow-right-long"></i>
                                <span className="submenuName">Tools</span>
                            </Link>

                            <Link href="/resources/references" className="submenuItem">
                                <i className="fa-solid fa-arrow-right-long"></i>
                                <span className="submenuName">References</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flexboxGroup">
                        <Link href="/about" className="flexboxItem">
                            <i className="fa-solid fa-circle-info"></i>
                            <span className="TextMenu">About</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}