import Link from "next/link";

export default function NavBar(){
    return (
        <div className="Nav">
            <Link className="nav-works" href="/">Works</Link>
            <Link className="nav-blog" href="Blog">About</Link>
            <Link className="nav-contact" href="contact">Contact</Link>
        </div>
    );
}