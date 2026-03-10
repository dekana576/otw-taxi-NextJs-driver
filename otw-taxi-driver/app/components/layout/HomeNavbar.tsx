"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
} from "@heroui/react";

export const OTWLogo = () => {
  return <Image src={"img/logo/logo2black_crop.png"} height={50} />;
};

export default function HomeNavbar() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link href="/">
          <div className="flex flex-row items-center gap-2">
            <OTWLogo />
            <p>
              <strong className="font-[Sora] text-2xl text-black">OTW TL</strong>
            </p>
          </div>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
