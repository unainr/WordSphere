import { client } from "@/sanity/lib/client";
import { BLOGS_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import markdownit from "markdown-it";
const md = markdownit();
const Blogs = async ({ params }: { params: Promise<{ id: string }> }) => {
	const id = (await params).id;
	const post = await client.fetch(BLOGS_BY_ID_QUERY, { id });
	if (!post) return notFound();
	const parsedContent = md.render(post?.pitch || "");

	return (
		<>
			<section className="pink_container bg-black !min-h-[230px]">
				<p className="tag">{new Date(post?._createdAt).toLocaleDateString()}</p>

				<h1 className="heading">{post.title}</h1>
				<p className="sub-heading !max-w-5xl">{post.description}</p>
			</section>

			<section className="section_container">
				<img
					src={post.image}
					alt="thumbnail"
					className="w-full h-auto rounded-xl"
				/>

				<div className="space-y-5 mt-10 max-w-4xl mx-auto">
					<div className="flex-between gap-5">
						<div className="flex gap-2 items-center mb-3">
							<Image
								src={post.author.image}
								alt="avatar"
								width={64}
								height={64}
								className="rounded-full drop-shadow-lg"
							/>

							<div>
								<p className="text-20-medium">{post.author.name}</p>
								<p className="text-16-medium !text-black-300">
									@{post.author.name}
								</p>
							</div>
						</div>

						<p className="text-sm font-medium bg-blue-100 text-blue-800 py-1 px-3 rounded-full shadow-sm inline-block">
							{post.category}
						</p>
					</div>

					<h3 className="font-bold"> Details</h3>
					{parsedContent ? (
						<article
							className="prose max-w-4xl font-work-sans break-all"
							dangerouslySetInnerHTML={{ __html: parsedContent }}
						/>
					) : (
						<p className="no-result">No details provided</p>
					)}
				</div>

				<hr className="divider" />
				{/* <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense> */}


			</section>
		</>
	);
};

export default Blogs;
