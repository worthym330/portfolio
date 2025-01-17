import BlogPostClient from './BlogPostClient';

const posts = [
  {
    title: "Getting Started with Next.js 13",
    content: `
      Next.js 13 introduces several groundbreaking features that revolutionize how we build web applications. The new app directory structure provides a more intuitive way to organize your code, while server components offer improved performance and reduced client-side JavaScript.

      ## Key Features

      1. **App Directory**: A new file-system based router built on top of Server Components
      2. **Server Components**: Improved performance by reducing client-side JavaScript
      3. **Streaming**: Load UI components progressively
      4. **Built-in SEO Support**: Enhanced metadata API
      
      ## Getting Started

      To create a new Next.js 13 project, you can use:
      
      \`\`\`bash
      npx create-next-app@latest my-app
      \`\`\`

      This will set up a new project with all the latest features enabled by default.
    `,
    date: "2024-03-20",
    category: "Development",
    tags: ["Next.js", "React", "Web Development"],
    slug: "getting-started-with-nextjs-13",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "The Future of Web Development",
    content: `
      The web development landscape is constantly evolving, with new technologies and methodologies emerging regularly. Let's explore some of the most exciting trends that are shaping the future of web development.

      ## Emerging Trends

      1. **AI-Powered Development**: Integration of AI tools in development workflows
      2. **WebAssembly**: Running high-performance code in browsers
      3. **Edge Computing**: Moving computation closer to users
      4. **Web3 Technologies**: Decentralized applications and blockchain

      ## Impact on Developers

      These changes are transforming how developers work and the skills they need to stay competitive in the industry.
    `,
    date: "2024-03-18",
    category: "Technology",
    tags: ["Web Development", "AI", "Future Tech"],
    slug: "future-of-web-development",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Building Scalable Applications",
    content: `
      Creating scalable applications requires careful planning and the right architectural decisions. This guide covers essential principles and best practices.

      ## Key Principles

      1. **Microservices Architecture**: Breaking down applications into manageable services
      2. **Containerization**: Using Docker and Kubernetes for deployment
      3. **Caching Strategies**: Implementing effective caching layers
      4. **Database Optimization**: Choosing the right database and optimization techniques

      ## Best Practices

      - Write clean, maintainable code
      - Implement comprehensive testing
      - Monitor performance metrics
      - Plan for horizontal scaling
    `,
    date: "2024-03-15",
    category: "Architecture",
    tags: ["Architecture", "Scalability", "Best Practices"],
    slug: "building-scalable-applications",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
  },
];

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return null;
  }

  return <BlogPostClient post={post} />;
}