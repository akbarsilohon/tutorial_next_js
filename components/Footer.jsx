import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footerInner">
                <div className="footerLeft">
                    <Link href="/" className="foorerHomes">
                        <Image
                            src="/next.svg"
                            className="footerBrand"
                            alt="Tutorial Next.js"
                            width={280}
                            height={60}
                        />
                    </Link>

                    <p className="footerDesc">
                        Belajar Next.js dari nol melalui tutorial,
                        panduan, dan praktik langsung untuk membangun
                        website modern menggunakan Next.js.
                    </p>

                    <div className="footerOtherLinks">
                        <Link
                            href="https://t.me/silohon94"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sosmedItem"
                            title="Telegram"
                        >
                            <i className="fa-brands fa-telegram"></i>
                        </Link>

                        <Link
                            href="https://github.com/akbarsilohon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sosmedItem"
                            title="GitHub"
                        >
                            <i className="fa-brands fa-github"></i>
                        </Link>

                        <Link
                            href="mailto:emailkamu@example.com"
                            className="sosmedItem"
                            title="Email"
                        >
                            <i className="fa-regular fa-envelope"></i>
                        </Link>
                    </div>
                </div>

                {/* Footer Right */}
                <div className="footerRight">

                    {/* Group 1 */}
                    <div className="widgetCol">
                        <span className="widgetTitle">Tutorial</span>

                        <ul className="listItemWg">
                            <li>
                                <Link href="/tutorial/next-js" className="itemWg">
                                    Next.js
                                </Link>
                            </li>
                            <li>
                                <Link href="/tutorial/laravel" className="itemWg">
                                    Laravel
                                </Link>
                            </li>
                            <li>
                                <Link href="/tutorial/wordpress" className="itemWg">
                                    WordPress
                                </Link>
                            </li>
                            <li>
                                <Link href="/tutorial/hugo" className="itemWg">
                                    Hugo
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Group 2 */}
                    <div className="widgetCol">
                        <span className="widgetTitle">Informasi</span>

                        <ul className="listItemWg">
                            <li>
                                <Link href="/about" className="itemWg">
                                    Tentang
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="itemWg">
                                    Kontak
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="itemWg">
                                    Kebijakan Privasi
                                </Link>
                            </li>
                            <li>
                                <Link href="/disclaimer" className="itemWg">
                                    Disclaimer
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Group 3 */}
                    <div className="widgetCol">
                        <span className="widgetTitle">Hubungi Saya</span>

                        <ul className="listItemWg">
                            <li>
                                <Link
                                    href="https://t.me/silohon94"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="itemWg"
                                >
                                    Telegram
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://github.com/akbarsilohon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="itemWg"
                                >
                                    GitHub
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="mailto:emailkamu@example.com"
                                    className="itemWg"
                                >
                                    Email
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footerBottom">
                <p>
                    © 2026 Copyright KodingLog.com.
                    All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}