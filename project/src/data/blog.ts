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

export async function loadBlogPosts(): Promise<BlogPost[]> {
  try {
    // First try to load posts from Decap CMS content directory
    const response = await fetch('/content/blog/index.json');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const posts = await response.json();
    return posts.map((post: any) => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      content: post.body,
      author: post.author,
      date: post.date,
      image: post.image,
      slug: post.slug
    }));
  } catch (error) {
    console.warn('Failed to load posts from CMS, using default posts:', error);
    return defaultPosts;
  }
}

export { defaultPosts };