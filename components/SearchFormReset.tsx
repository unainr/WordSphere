"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { X } from "lucide-react";
const SearchFormReset = () => {
	const reset = () => {
		const form = document.querySelector(".search-form") as HTMLFormElement;
		if (form) form.reset();
	};
	return (
		<>
			{" "}
            
			<Button
	className="relative z-10 rounded-full bg-red-500 px-3 py-2 text-xs text-white shadow-md transition-all hover:bg-red-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-300"
	type="reset"
	onClick={reset}
>
	<Link href="/" className="flex items-center">
		<X className="h-4 w-4" />
	</Link>
</Button>

          
		</>
	);
};

export default SearchFormReset;
