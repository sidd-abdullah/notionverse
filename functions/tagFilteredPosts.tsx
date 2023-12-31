import notion from "@/lib";
import { PostItem } from "@/types";
import { convertToPost } from "./convertToPost";

export const getTagFilteredPosts = async ({
  slug,
}: {
  slug: string;
}): Promise<PostItem[]> => {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID!;
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "tags",
        multi_select: {
          contains: `${slug}`,
        },
      },
      sorts: [
        {
          property: "date",
          direction: "ascending",
        },
      ],
    });

    const tagFilteredPosts: PostItem[] = response.results.map((e) =>
      convertToPost(e)
    );

    return tagFilteredPosts;
  } catch (error) {
    // Handle the error, log it, or throw a more specific exception if needed.
    console.error("Error fetching tag-filtered posts:", error);
    throw error;
  }
};
