import Link from "next/link";
import React from "react";
import Image from "next/image";
const MoreBlogs = ({ post }: { post: any }) => {
	const {
		_createdAt,
		author,
		title,
		category,
		_id,
		image,
		description,
	} = post;
	return (
		<article className="max-w-lg mx-auto mt-8 shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br ">
			<div className="relative">
				<Image
					src={image}
					alt={author?.name ?? "Author"}
					width={500} // Adjust based on your requirements
					height={240} // Adjust based on your requirements
					className="w-full h-60 object-cover"
				/>
				<div className="absolute top-3 left-3 flex space-x-2">
					<span className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-md shadow-md">
						{category}
					</span>
				</div>
			</div>
			<div className="px-6 py-4">
				<h3 className="text-2xl font-bold  hover:text-blue-600 transition-colors">
					{title}
				</h3>
				<p className=" text-base mt-3 leading-relaxed line-clamp-3">
					{description.length > 100
						? `${description.slice(0, 100)}...`
						: description}
				</p>
			</div>
			<div className="px-6 pb-4 flex items-center justify-between">
				<div className="flex items-center">
					<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500 shadow">
						<Image
							src={author?.image ?? "/placeholder-avatar.jpg"}
							alt={author?.name ?? "Author"}
							width={48} // Ensure dimensions fit within the parent container
							height={48}
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="ml-3">
						<span className="block text-sm font-medium ">
							{author?.name}
						</span>
						<span className="block text-xs ">
							{new Date(_createdAt).toLocaleDateString()}
						</span>
					</div>
				</div>
				<Link href={`/blogs/${_id}`}>
					<button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm px-4 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-transform duration-200 transform hover:scale-105">
						Read More
					</button>
				</Link>
			</div>
		</article>
	);
};

export default MoreBlogs;
