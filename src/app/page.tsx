import { Suspense } from "react";
import { SpinLoader } from "../components/SpinLoader";
import { PostsList } from "../components/PostsList";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import { PostHeading } from "../components/PostHeading";
import { PostCoverImage } from "../components/PostCoverImage";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{
            href: "/post/asdfasdf",
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: "/images/bryen_9.png",
            alt: "Alt da imagem",
            priority: true,
          }}
        />

        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="text-slate-600 block text-sm/tight"
            dateTime="2026-02-20"
          >
            20/02/2026 10:00
          </time>

          <h1 className="text-2xl/tight font-extrabold sm:text-4xl">
            <Link href="#">Título do post</Link>
          </h1>

          <PostHeading as="h1" url="#">
            Rerum, vel ex? Impedit ullam harum blanditiis
          </PostHeading>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            eos nesciunt molestiae mollitia accusamus? Perferendis rem facilis,
            inventore nisi laborum eveniet vitae itaque quam expedita nihil qui,
            accusamus corporis magnam.
          </p>
        </div>
        <div></div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className="text-6xl font-bold text-center py-8">Footer</p>
      </footer>
    </Container>
  );
}
