
import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav"; // Untuk versi dekstop
import MobileNav from "./MobileNav"; // Untuk versi mobile

const Header = () => {
  return (
    <header className="py-2 md:py-4 text-white font-chakra">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href="/">
                <h1 className="text-3xl md:text-4xl font-semibold">
                    Dika<span className="txtaccent">.</span>
                </h1>
            </Link>

            {/* dekstop nav & hire me button*/}
            <div className="hidden md:flex items-center gap-8">
                <Nav />
                {/* <Link href="/contact">
                    <Button>Hire me</Button>
                </Link> */}
            </div>

            {/* mobile nav */}
            <div className="md:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header