import Link from 'next/link'

export default function Header() {
    return (
        <div className="w-full">
            <nav className="py-12 flex w-8/12 mx-auto">
                <div>
                    <Link href="/">
                        [ Home ]
                    </Link>
                </div>
                <ul className="flex ml-auto">
                    <li className="mr-4">
                        <Link href="/what-we-do">
                            [ Was wir machen ]
                        </Link>
                    </li>
                    <li className="mr-4">
                        <Link href="/about">
                            [ Über uns ]
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}