"use server";

import { drizzleDb } from "@/src/db/drizzle";
import { postsTable } from "@/src/db/drizzle/schemas";
import { postRepository } from "@/src/repositories/post";
import { asyncDelay } from "@/src/utils/async-delay";
import { logColor } from "@/src/utils/log-color";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
  await asyncDelay(2000);
  logColor("Deleting post with ID: " + id);

  if (!id || typeof id !== "string") {
    return {
      error: "Dados inválidos",
    };
  }

  const post = await postRepository.findById(id).catch(() => undefined);

  if (!post) {
    return {
      error: "Post não encontrado",
    };
  }

  await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));
  revalidateTag("posts", "page");
  revalidateTag(`post-${post.slug}`, "page");

  return {
    error: "",
  };
}
