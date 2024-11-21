import { defineQuery } from "next-sanity";

export const BLOGS_QUERY = defineQuery(`*[_type == "blogs" && defined(slug.current) && (!defined($search) || title match $search || category match $search || author->name match $search)] | order(_createdAt desc) {
  _id, title, slug, _createdAt, author->{_id, name, image, bio}, views, description, category, image
}`);



export const BLOGS_BY_ID_QUERY = defineQuery(
  `*[_type =="blogs"&&_id==$id][0]{
  _id ,title, slug,_createdAt,author->{_id , name,image,bio,username},views,description,
    category,image,pitch,
}`
);