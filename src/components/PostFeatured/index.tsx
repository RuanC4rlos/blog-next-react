import Link from "next/link";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import { PostSummary } from "../PostSummary";

export function PostFeatured() {
  const slug = "asdfasdf";
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_9.png",
          alt: "Alt da imagem",
          priority: true,
        }}
      />

      <PostSummary
        postLink={postLink}
        postHeading="h2"
        createdAt={"2024-06-01T12:00:00Z"}
        title={"Título do post em destaque"}
        excerpt={"Excerpt do post em destaque"}
      />
      <div></div>
    </section>
  );
}
