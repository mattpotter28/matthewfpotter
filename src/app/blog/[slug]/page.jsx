import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Card from "@/components/ui/Card";
import CardContent from "@/components/ui/CardContent";
import CardHeading from "@/components/ui/CardHeading";
import Image from "next/image";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

export default function Page({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <Card>
      {post.cover && (
        <div className="aspect-h-3 aspect-w-5 mb-1.5 overflow-hidden rounded-md">
          <Image
            src={post.cover}
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
      )}
      <CardContent>
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="mt-1.5 font-medium">{post.title}</h1>

        <div
          className="prose prose-sm mt-4 max-w-none border-t border-dashed border-gray-200 pt-4"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </CardContent>
    </Card>
  );
}
