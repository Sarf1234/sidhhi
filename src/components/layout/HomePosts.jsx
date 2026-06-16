export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";
import { apiRequest } from "@/lib/api";

export default async function HomePosts() {
let posts = [];

try {
const res = await apiRequest(
`${process.env.NEXT_PUBLIC_API_URL}/api/posts?page=1&limit=4`
);


posts = res.data || [];


} catch (err) {
console.error(err);
return null;
}

if (!posts.length) return null;

const featured = posts[0];
const others = posts.slice(1);

return ( <section className="py-20 bg-slate-50"> <div className="max-w-7xl mx-auto px-5 lg:px-8">


    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto mb-14">
      <span className="inline-flex px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
        Latest Updates
      </span>

      <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900">
        Event Insights &
        <span className="block bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">
          LED Display Solutions
        </span>
      </h2>

      <p className="mt-4 text-slate-600">
        Discover expert tips, event technology trends, LED wall setup
        guides and solutions for weddings, exhibitions, concerts and
        corporate events.
      </p>
    </div>

    {/* Layout */}

    <div className="grid lg:grid-cols-12 gap-8">

      {/* Featured */}

      <Link
        href={`/blog/${featured.slug}`}
        className="lg:col-span-7 group overflow-hidden rounded-3xl bg-white border shadow-sm hover:shadow-xl transition"
        prefetch={false}
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={featured.coverImage || "/placeholder.png"}
            alt={featured.title}
            fill
            priority
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6">

          <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
            <CalendarDays size={16} />
            {new Date(featured.createdAt).toLocaleDateString()}
          </div>

          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#7C3AED] transition">
            {featured.title}
          </h3>

          <p className="mt-3 text-slate-600 line-clamp-3">
            {featured.excerpt}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 font-semibold text-[#7C3AED]">
            Read More
            <ArrowRight size={18} />
          </div>

        </div>
      </Link>

      {/* Sidebar Posts */}

      <div className="lg:col-span-5 space-y-5">
        {others.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug}`}
            className="group flex gap-4 bg-white rounded-2xl border p-4 shadow-sm hover:shadow-lg transition"
            prefetch={false}
          >
            <div className="relative w-32 h-24 shrink-0 rounded-xl overflow-hidden">
              <Image
                src={post.coverImage || "/placeholder.png"}
                alt={post.title}
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>

            <div>

              <div className="text-xs text-slate-500">
                {new Date(post.createdAt).toLocaleDateString()}
              </div>

              <h3 className="font-semibold text-slate-900 line-clamp-2 group-hover:text-[#7C3AED] transition">
                {post.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                {post.excerpt}
              </p>

            </div>
          </Link>
        ))}
      </div>
    </div>

    {/* CTA */}

    <div className="text-center mt-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#7C3AED] text-white font-semibold hover:opacity-90"
      >
        View All Articles
        <ArrowRight size={18} />
      </Link>
    </div>
  </div>
</section>


);
}
