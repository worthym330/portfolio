'use client';

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { FadeIn, FadeInStagger, AnimatedCard } from '@/components/animations';

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with Next.js and Supabase",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Project Two",
    description: "Mobile-first e-commerce platform with real-time updates",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React Native", "Node.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Project Three",
    description: "AI-powered data analytics dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "TensorFlow", "React", "D3.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-20">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
      </FadeIn>
      <FadeInStagger>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedCard key={index}>
              <Card className="overflow-hidden group">
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href={project.githubUrl}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href={project.liveUrl}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </FadeInStagger>
    </div>
  );
}