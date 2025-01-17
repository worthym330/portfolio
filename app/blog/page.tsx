'use client';

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FadeIn, FadeInStagger, AnimatedCard } from '@/components/animations';

const posts = [
  {
    title: "Getting Started with Next.js 13",
    excerpt: "Learn how to build modern web applications with Next.js 13 and its new app directory structure.",
    date: "2024-03-20",
    category: "Development",
    tags: ["Next.js", "React", "Web Development"],
    slug: "getting-started-with-nextjs-13",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
    date: "2024-03-18",
    category: "Technology",
    tags: ["Web Development", "AI", "Future Tech"],
    slug: "future-of-web-development",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Building Scalable Applications",
    excerpt: "Best practices for building scalable and maintainable applications in 2024.",
    date: "2024-03-15",
    category: "Architecture",
    tags: ["Architecture", "Scalability", "Best Practices"],
    slug: "building-scalable-applications",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
  },
];

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-20">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
      </FadeIn>
      <FadeInStagger>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <AnimatedCard>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow group">
                  <div className="relative aspect-video">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge>{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedCard>
            </Link>
          ))}
        </div>
      </FadeInStagger>
    </div>
  );
}