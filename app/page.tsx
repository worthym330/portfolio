'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github, Linkedin, Mail, Star, GitFork } from 'lucide-react';
import Link from 'next/link';
import { FadeIn, FadeInStagger, SlideIn, AnimatedCard } from '@/components/animations';
import { useEffect, useState } from 'react';

type Repository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  language: string | null;
  updated_at: string;
};

export default function Home() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);
        // Replace 'YOUR_GITHUB_USERNAME' with your actual GitHub username
        const response = await fetch('https://api.github.com/users/worthym330/repos?sort=updated&per_page=3');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        // Ensure data is an array before setting it
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Error fetching repos:', error);
        setError(error instanceof Error ? error.message : 'Failed to load repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const renderRepoSection = () => {
    if (error) {
      return (
        <Card className="p-6 text-center">
          <p className="text-muted-foreground">{error}</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </Card>
      );
    }

    if (loading) {
      return Array.from({ length: 3 }).map((_, i) => (
        <Card key={i} className="p-6 space-y-4">
          <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
          <div className="h-4 bg-muted rounded w-full animate-pulse" />
          <div className="h-4 bg-muted rounded w-2/3 animate-pulse" />
        </Card>
      ));
    }

    if (repos.length === 0) {
      return (
        <Card className="p-6 text-center">
          <p className="text-muted-foreground">No repositories found</p>
        </Card>
      );
    }

    return repos.map((repo) => (
      <AnimatedCard key={repo.id}>
        <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <Card className="p-6 h-full hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{repo.name}</h3>
                <p className="text-muted-foreground line-clamp-2">
                  {repo.description || 'No description available'}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {repo.language && (
                  <Badge variant="secondary">
                    {repo.language}
                  </Badge>
                )}
                {repo.topics?.slice(0, 2).map((topic) => (
                  <Badge key={topic} variant="outline">
                    {topic}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  {repo.stargazers_count}
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="h-4 w-4" />
                  {repo.forks_count}
                </div>
                <div className="text-xs">
                  Updated {new Date(repo.updated_at).toLocaleDateString()}
                </div>
              </div>
            </div>
          </Card>
        </Link>
      </AnimatedCard>
    ));
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <SlideIn direction="down">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to My Portfolio
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  I'm a full-stack developer passionate about building beautiful and functional web applications.
                </p>
              </div>
            </SlideIn>
            <FadeIn delay={0.2}>
              <div className="space-x-4">
                <Link href="/projects">
                  <Button>
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button variant="outline">
                    Read Blog
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter">
                Recent Projects
              </h2>
              <Link href="https://github.com/worthym330" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <Github className="h-4 w-4" />
                  View All Projects
                </Button>
              </Link>
            </div>
          </FadeIn>
          
          <FadeInStagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {renderRepoSection()}
            </div>
          </FadeInStagger>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <SlideIn direction="up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Let's Connect
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Feel free to reach out for collaborations or just a friendly chat.
              </p>
            </SlideIn>
            <FadeIn delay={0.3}>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/worthym330" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://www.linkedin.com/in/basantmandal330/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:mandalbasant330@gmail.com">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}