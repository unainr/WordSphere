"use client";
import { useState } from "react";
import { ModeToggle } from "../ui/mode-toggle";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className=" bg-background/50  border-b  sticky top-0 backdrop-blur  z-30 scroll-p-16 scroll-smooth">
			<div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
				<div className="flex items-center justify-between">
					<Link href="/">
						<Image
							src="/logo.png"
							alt="WordSphere"
							width={100} // Adjust width as needed
							height={40} // Adjust height as needed
							className="h-10 w-auto sm:h-7 dark:invert"
							priority // Optional: Ensures the image is loaded quickly if it's above the fold
						/>
					</Link>

					{/* Mobile menu button */}
					<div className="flex lg:hidden ">
						<button
							onClick={() => setIsOpen(!isOpen)}
							type="button"
							className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
							aria-label="toggle menu">
							{!isOpen ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 8h16M4 16h16"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu open: "block", Menu closed: "hidden" */}
				<div
					className={`absolute inset-x-0 z-20 bg-white dark:bg-black  w-full px-6 py-4 transition-all duration-300 ease-in-out  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
						isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
					}`}>
					<div className="flex flex-col   md:flex-row   md:mx-6 font-semibold">
						<a
							className="my-2  text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-600 md:mx-4 md:my-0"
							href="#">
							Home
						</a>
						<a
							className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-600 md:mx-4 md:my-0"
							href="#">
							Shop
						</a>
						<a
							className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-600 md:mx-4 md:my-0"
							href="#">
							Contact
						</a>
						<a
							className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-600 md:mx-4 md:my-0"
							href="#">
							About
						</a>
					</div>
					<div className="my-2 md:mx-2 items-center md:my-0">
						<SignedIn>
							<UserButton />
						</SignedIn>
						<SignedOut>
							<Button asChild className="rounded-full">
								<Link href="/sign-in">Login</Link>
							</Button>
						</SignedOut>
					</div>
					<div className="flex justify-center md:block">
						<ModeToggle />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
