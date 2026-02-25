import PostsListAdmin from "@/src/components/PostsListAdmin";
import { SpinLoader } from "@/src/components/SpinLoader";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function AdminPostPage() {
  return (
    <Suspense fallback={<SpinLoader className="mb-16" />}>
      <PostsListAdmin />
    </Suspense>
  );
}
