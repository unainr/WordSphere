import MoreBlogs from "@/components/MoreBlogs";
import SubBeams from "@/components/SubBeams";
import { WorldMapDemo } from "@/components/SubRemote";
import { client } from "@/sanity/lib/client";
import { BLOGS_QUERY } from "@/sanity/lib/queries";
export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const query = (await searchParams).query;
	const params = { search: query || null };
	const posts = await client.fetch(BLOGS_QUERY, params);

	return (
		<>
			<div>
				<SubBeams query={query} />

				<h1 className="text-xl font-semibold uppercase sm:text-2xl lg:text-3xl pl-4 sm:pl-6 lg:pl-8 mt-6">
					{query ? `Search results for "${query}"` : "All Posts"}
				</h1>

				<div className="mt-12 grid mx-4 gap-2 sm:grid-cols-2 lg:grid-cols-3 mb-5">
					{posts?.length > 0 ? (
						posts
							.slice(0, 6)
							.map((post: any) => <MoreBlogs key={post?._id} post={post} />)
					) : (
						<p className="no-results">No Post found</p>
					)}
				</div>
				<WorldMapDemo/>
			</div>
		</>
	);
}
