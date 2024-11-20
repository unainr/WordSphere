import React from 'react'
import { BackgroundBeams } from './ui/background-beams'
import Form from "next/form";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import SearchFormReset from './SearchFormReset';
import { Input } from './ui/input';
const SubBeams = ({ query }: { query?: string }) => {
  return (
	<div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
	<div className="max-w-2xl mx-auto px-4">
	  {/* Heading */}
	  <h1 className="relative z-10 text-3xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
		Welcome to WordSphere
	  </h1>
  
	  {/* Description */}
	  <p className="text-neutral-500 max-w-lg mx-auto mt-4 mb-8 text-sm md:text-base text-center relative z-10">
	  your ultimate destination for innovative solutions and exceptional services. We empower businesses to thrive with reliable, scalable, and customizable tools designed to meet your unique needs. Whether you're exploring groundbreaking ideas, expanding your network, or searching for expert insights, Wordsphare is here to guide your journey to success.
	  </p>
  
	  {/* Search Form */}
	  <Form action="/" className="search-form" scroll={false}>
		<div className="flex w-full max-w-lg mx-auto items-center space-x-2 rounded-lg bg-gradient-to-r from-slate-300 via-indigo-200 to-white p-2 shadow-lg">
		  {/* Search Input */}
		  <Input
			type="text"
			name="query"
			defaultValue=""
			className="search-input w-full relative z-10 rounded-lg bg-white/90 px-4 py-3 text-sm md:text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-400 shadow-md"
			placeholder="Search"
		  />
  
		  {/* Reset Button */}
		  <div className="flex items-center gap-2">
			{query && <SearchFormReset />}
			
			{/* Submit Button */}
			<Button
			  variant="outline"
			  size="icon"
			  type="submit"
			  className="rounded-full relative z-10 p-3 bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg focus:ring-2 focus:ring-indigo-500"
			>
			  <Search className="h-5 w-5 md:h-6 md:w-6" />
			</Button>
		  </div>
		</div>
	  </Form>
	</div>
  
	{/* Background Decoration */}
	<BackgroundBeams />
  </div>
  
  )
}

export default SubBeams