import { getAllPosts } from "@/functions/getAllPosts";
import Feed from "./components/Feed";
import { PostItem } from "@/types";
import Pagination from "./components/Pagination";
import { postsPerPage } from "@/constants";

const HomePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const page = Number(searchParams.page) || 1;

  const publishedPosts: PostItem[] = await getAllPosts();
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToShow = publishedPosts.slice(startIndex, endIndex);
  const totalPosts = publishedPosts.length;
  
  return (
    <>
      <Feed postsToShow={postsToShow} />
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(totalPosts / postsPerPage)}
      />
    </>
  );
};

export default HomePage;
