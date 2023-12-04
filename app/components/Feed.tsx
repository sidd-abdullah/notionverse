import Link from "next/link";

export default function Feed() {
  return (
    <div className="max-w-2xl m-auto px-4">
      <Link href="/">
        <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:[animation-duration:_4s] mb-4">
          <div className="rounded-[10px] bg-white p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
              10th Oct 2022
            </time>

            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              How to center an element using JavaScript and jQuery
            </h3>

            <p className="mt-2 line-clamp-2">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>

            <div className="mt-4 space-x-1">
              <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                Snippet
              </span>

              <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                JavaScript
              </span>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
}
