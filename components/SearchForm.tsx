import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
	return (
		<Form action="/" className="search-form" scroll={false}>
			<div className="flex w-full max-w-sm items-center space-x-2">
				<Input
					type="text"
					name="query"
					defaultValue=""
					className="search-input"
					placeholder="Search Startups"
				/>
				<div className="flex gap-2">
					{query && <SearchFormReset />}
					<Button variant="outline" size="icon" type="submit">
						<Search />
					</Button>
				</div>
			</div>
		</Form>
	);
};

export default SearchForm;
