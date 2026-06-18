import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";
import { apiRequest } from "@/lib/api";

export const dynamic = "force-dynamic";

export const metadata = {
title:
"LED Video Wall Rental Blog | SIDDHI ENTERPRISES",

description:
"Explore LED Video Wall Rental guides, wedding LED screen ideas, corporate event display solutions, exhibition LED walls and event technology updates.",

alternates: {
canonical: "/blog",
},

openGraph: {
title:
"LED Video Wall Rental Blog | SIDDHI ENTERPRISES",


description:
  "Expert insights on LED walls, wedding displays, corporate event screens and exhibition display solutions.",

url: "/blog",

type: "website",


},
};

export default async function AllPostsPage() {
let posts = [];

try {
const res = await apiRequest(
`${process.env.NEXT_PUBLIC_API_URL}/api/posts?page=1&limit=50`
);

```
posts = res.data || [];
```

} catch (err) {
console.error("SSR posts fetch failed:", err);
}

return ( <div className="bg-slate-50 min-h-screen">


  {/* Hero */}

  <section className="pt-32 pb-16 bg-gradient-to-br from-[#7C3AED] via-[#9333EA] to-[#EC4899]">

    <div className="max-w-7xl mx-auto px-5 lg:px-8">

      <div className="max-w-3xl text-white">

        <span className="inline-flex px-4 py-2 rounded-full bg-white/10 backdrop-blur text-sm">
          Event Technology & LED Displays
        </span>

        <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
          LED Video Wall
          <span className="block">
            Insights & Guides
          </span>
        </h1>

        <p className="mt-5 text-white/90 text-lg leading-relaxed">
          Explore expert articles on LED video walls,
          wedding LED screens, corporate event displays,
          exhibition solutions and the latest event
          technology trends.
        </p>

      </div>

    </div>

  </section>

  {/* Blog Grid */}

  <section className="py-16">

    <div className="max-w-7xl mx-auto px-5 lg:px-8">

      {posts.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-slate-900">
            No Articles Available
          </h2>

          <p className="mt-2 text-slate-500">
            New content will be published soon.
          </p>
        </div>
      ) : (
        <>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {posts.map((post, index) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                prefetch={false}
                className="group bg-white rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition"
              >
                <div className="relative aspect-[16/10] overflow-hidden">

                  <Image
                    src={
                      post.coverImage ||
                      "/placeholder.png"
                    }
                    alt={post.title}
                    fill
                    loading={
                      index < 3 ? "eager" : "lazy"
                    }
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="p-6">

                  {post.categories?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.categories
                        .slice(0, 2)
                        .map((cat) => (
                          <span
                            key={cat._id}
                            className="text-xs font-medium px-3 py-1 rounded-full bg-purple-100 text-purple-700"
                          >
                            {cat.name}
                          </span>
                        ))}
                    </div>
                  )}

                  <h2 className="text-xl font-bold text-slate-900 line-clamp-2 group-hover:text-[#7C3AED] transition">
                    {post.title}
                  </h2>

                  <p className="mt-3 text-slate-600 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between text-sm text-slate-500">

                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />

                      {new Date(
                        post.createdAt
                      ).toLocaleDateString()}
                    </div>

                    <span>
                      {post.readTime || 3} min read
                    </span>

                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 text-[#7C3AED] font-semibold">
                    Read Article
                    <ArrowRight size={18} />
                  </div>

                </div>
              </Link>
            ))}

          </div>
        </>
      )}

    </div>

  </section>
</div>


);
}
