import { BlogPost } from '../types';

const defaultPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Best Time to Prune Different Types of Trees",
    excerpt: "Learn about the optimal seasons and techniques for pruning various tree species to promote healthy growth and prevent disease.",
    content: "",
    author: "John Watson",
    date: "March 15, 2024",
    image: "/assets/Trimming1.webp"
  },
  {
    id: "2",
    title: "Signs Your Tree Might Be Diseased",
    excerpt: "Discover the early warning signs of common tree diseases and what steps you can take to protect your trees.",
    content: "",
    author: "Sarah Watson",
    date: "March 10, 2024",
    image: "/assets/DeadWoodingTree.webp"
  },
  {
    id: "3",
    title: "Storm Damage Prevention: Protecting Your Trees",
    excerpt: "Essential tips for preparing your trees for severe weather and minimizing the risk of storm damage.",
    content: "",
    author: "Mike Watson",
    date: "March 5, 2024",
    image: "/assets/EmergencyTree1.webp"
  }
];

import matter from 'gray-matter';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author?: string;
  date: string;
  image?: string;
  slug: string;
}

export async function loadBlogPosts(): Promise<BlogPost[]> {
  const files = import.meta.glob('/src/content/blog/*.md', { as: 'raw' });

  const posts: BlogPost[] = [];

  for (const path in files) {
    const raw = await files[path]();
    const { data, content } = matter(raw);

    posts.push({
      id: data.id || data.slug || path,
      title: data.title,
      excerpt: data.excerpt || content.slice(0, 150),
      content: content,
      author: data.author || 'Unknown',
      date: data.date,
      image: data.image || '',
      slug: data.slug || path.split('/').pop()?.replace('.md', '') || ''
    });
  }


  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}


export { defaultPosts };