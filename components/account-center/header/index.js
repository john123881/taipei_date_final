import React from "react";
import Headroom from "react-headroom";
// import Link from "next/link";
import { FaBookmark } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { RxBell } from "react-icons/rx";


import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    DropdownMenu,
    DropdownTrigger,
    Avatar,
    Dropdown,
    DropdownItem,
} from "@nextui-org/react";
import { Logo } from "@/components/account-center/header/Logo.jsx";

export default function Header() {
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];
    const login = true;
    return (
        <>
            <div style={{ height: "100vh" }}>
                <Navbar
                    disableAnimation
                    isBordered
                    className="px-4"
                    maxWidth={"full"}
                >
                    {/* <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle />
                </NavbarContent> */}
                    <NavbarContent className="pr-3 " justify="start">
                        <NavbarBrand>
                            <Link href="/">
                                <Logo />
                            </Link>
                            {/* <p className="font-bold text-inherit">ACME</p> */}
                        </NavbarBrand>
                    </NavbarContent>

                    <NavbarContent
                        className="hidden gap-4 sm:flex"
                        justify="center"
                    >
                        {/* <NavbarBrand>
                        <Logo />
                        <p className="font-bold text-inherit">ACME</p>
                    </NavbarBrand> */}
                        <NavbarItem  className="text-center" isActive>
                            <Link className="text-sm text-base text-neongreen sm:pr-1 lg:pr-4" href="#">
                                配對交友
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link className="text-sm text-base text-white sm:pr-1 lg:pr-4" href="#">
                                社群媒體
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link className="text-sm text-base text-white sm:pr-1 lg:pr-4" href="#">
                                行程規劃
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link className="text-sm text-base text-white sm:pr-1 lg:pr-4" href="#">
                                酒吧探索
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link className="text-sm text-base text-white sm:pr-1 lg:pr-4" href="#">
                                電影探索
                            </Link>
                        </NavbarItem>
                    </NavbarContent>

                    <NavbarContent justify="end">
                        <NavbarItem className={login ? "hidden" : "block"}>
                        <Button
                                className="font-bold bg-primary text-dark border-dark border-1"
                                as={Link}

                                href="#"
                                variant="flat"
                            >
                                Login
                            </Button>
                        </NavbarItem>
                        <NavbarItem className={login ? "hidden" : "block"}>
                            <Button
                                className="font-bold bg-dark text-primary border-primary border-1"
                                as={Link}
                                
                                href="#"
                                variant="flat"
                            >
                                Sign Up
                            </Button>
                        </NavbarItem>
                        <NavbarItem className={login ? "hidden" : "block"}>
                            <Link className="text-4xl text-black align-middle" href="#">
                                <MdAccountCircle />
                            </Link>
                        </NavbarItem>

                        <NavbarItem className= {login ? "block hidden lg:flex" : "hidden"}>
                            <Link className="text-3xl text-black" href="#">
                                <FaBookmark />
                            </Link>
                        </NavbarItem>
                        <NavbarItem className={login ? "block hidden lg:flex" : "hidden"}>
                            <Link className="text-3xl text-black" href="#">
                                <RxBell />
                            </Link>
                        </NavbarItem>
                        <NavbarItem  className={login ? "block hidden lg:flex hover:block" : "hidden"}>
                            <Dropdown placement="bottom-end" className="border-white bg-dark border-1 text-default">
                                <DropdownTrigger>
                                    <Avatar
                                        isBordered
                                        as="button"
                                        className="text-3xl transition-transform"
                                        color="primary"
                                        name="Jason Hughes"
                                        size="sm"
                                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                    />
                                </DropdownTrigger>
                                <DropdownMenu
                                
                                    aria-label="Profile Actions"
                                    variant="flat"
                                >
                                    <DropdownItem
                                        key="profile"
                                        className="gap-2 h-14"
                                    >
                                        <p className="font-semibold">
                                            Signed in as
                                        </p>
                                        <p className="font-semibold">
                                            zoey@example.com
                                        </p>
                                    </DropdownItem>
                                    <DropdownItem key="settings">
                                        My Settings
                                    </DropdownItem>
                                    <DropdownItem key="team_settings">
                                        Team Settings
                                    </DropdownItem>
                                    <DropdownItem key="logout" color="danger">
                                        登出
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavbarItem>
                    </NavbarContent>

                    {/* <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color={
                                    index === 2
                                        ? "warning"
                                        : index === menuItems.length - 1
                                        ? "danger"
                                        : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu> */}
                </Navbar>
            </div>
        </>
    );
}
