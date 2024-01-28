import Image from "next/image";
import logo from "@/public/assets/logo.png";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="w-max-5xl m-auto flex items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="Rocket Jobs logo" width={40} height={40} />
          <span className="text-xl font-bold tracking-tighter">
            Rocket Jobs
          </span>
        </Link>
        <Button asChild>
          <Link href="/jobs/new">Post a Job</Link>
        </Button>
      </nav>
    </header>
  );
}
