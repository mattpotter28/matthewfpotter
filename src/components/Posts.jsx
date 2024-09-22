import Link from "next/link";
import Card from "./ui/Card";
import CardContent from "./ui/CardContent";
import CardHeading from "./ui/CardHeading";

import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

export default function Posts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <Card>
      <CardHeading heading="Blog" />

      <div className="mt-4 space-y-1.5">
        {posts.map((post, idx) => (
          <CardContent key={idx} className="duration-150 hover:bg-gray-100">
            <div className="w-full">
              <time
                dateTime={post.date}
                className="text-xs font-medium text-gray-600"
              >
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </time>

              <h3 className="mt-1.5 font-medium hover:underline hover:underline-offset-4">
                <Link href={post.slug}>{post.title}</Link>
              </h3>

              <p className="mt-4 max-w-lg text-gray-600">{post.excerpt}</p>

              <Link
                href={post.slug}
                className="mt-4 inline-flex font-medium hover:underline hover:underline-offset-4"
              >
                Read more
              </Link>
            </div>
          </CardContent>
        ))}
      </div>
    </Card>
  );
}
