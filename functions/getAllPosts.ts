import notion from "@/lib";
import { PostItem } from "@/types";
import { convertToPost } from "./convertToPost";

export const getAllPosts = async (): Promise<PostItem[]> => {
  const databaseId = process.env.NOTION_DATABASE_ID!;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "status",
      select: {
        equals: "Published",
      },
    },
    sorts: [
      {
        property: "date",
        direction: "ascending",
      },
    ],
  });

  const publishedPosts: PostItem[] = response.results.map((e) =>
    convertToPost(e)
  );

  return publishedPosts;
};
