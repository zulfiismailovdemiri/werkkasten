import Link from 'next/link'
import { useState} from "react";
import { useRouter} from "next/router";

export default function Header() {
    const router = useRouter();
    return (
        <div className="w-full">
            <nav className="py-12 flex w-8/12 mx-auto items-center">
                <div>
                    <Link href="/">
                        <a>
                            <svg data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" className="w-14 fill-werk"
                                 viewBox="0 0 499.17 500.6">
                                <path
                                    d="M466.46 395.85a42.37 42.37 0 0 0 27.14-52.51l-87.28-274h.07L392.14 24.6a35.36 35.36 0 0 0-44.36-22.93l-44.72 14.24v.07l-274 87.28A40.92 40.92 0 0 0 4.86 124a40.93 40.93 0 0 0-2.9 31.77l87.28 274h-.07l14.25 44.73a35.36 35.36 0 0 0 44.36 22.92l44.73-14.25v-.06ZM92.5 169.3l235.52-75 75 235.52-235.52 75Z"/>
                                <rect x="416.41" y="417.84" width="82.76" height="82.76" rx="13.85"/>
                            </svg>
                        </a>

                    </Link>
                </div>
                <ul className="flex flex-wrap ml-auto font-mono">
                    <li className="mr-4">
                        <Link href="/what-we-do">
                            <a className={router.pathname === "/what-we-do" ? "text-werk" : ""}>[ Was wir machen ]</a>
                        </Link>
                    </li>
                    <li className="mr-4">
                        <Link href="/about">
                            <a className={router.pathname === "/about" ? "text-werk" : ""}>[ Über uns ]</a>
                        </Link>
                    </li>
                    <li className="mr-4">
                        <Link href="/werk">
                            <a className={router.pathname === "/werk" ? "text-werk" : ""}>[ Werk ]</a>
                        </Link>
                    </li>
                    <li className="mr-4">
                        <Link href="/impressum">
                            <a className={router.pathname === "/impressum" ? "text-werk" : ""}>[ Impressum ]</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}