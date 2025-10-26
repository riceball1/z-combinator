import Link from 'next/link'

interface NavLinkProps {
    text: string
    url: string
}

export default function NavLink ({text, url} : NavLinkProps) {
    return (
        <Link href={url} className="text-black hover:text-green-800">{text}</Link>
    )
}