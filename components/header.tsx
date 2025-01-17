'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Portfolio</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/" className="text-foreground/60 hover:text-foreground">
            Home
          </Link>
          <Link href="/projects" className="text-foreground/60 hover:text-foreground">
            Projects
          </Link>
          <Link href="/blog" className="text-foreground/60 hover:text-foreground">
            Blog
          </Link>
          <Link href="/contact" className="text-foreground/60 hover:text-foreground">
            Contact
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b">
            <nav className="container py-4 flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground/60 hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-foreground/60 hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="text-foreground/60 hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-foreground/60 hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}