'use client';

import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FadeIn, SlideIn } from '@/components/animations';

type Post = {
  title: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  slug: string;
  image: string;
};

export default function BlogPostClient({ post }: { post: Post }) {
  return (
    <article className="container py-12 md:py-20">
      <SlideIn direction="left">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </SlideIn>
      
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="aspect-video mb-8 rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex items-center gap-2 mb-4">
            <Badge>{post.category}</Badge>
            <span className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString()}
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>
      </div>
    </article>
  );
}