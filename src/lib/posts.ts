// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// The directory where the posts are stored is public/_posts
const postsDirectory = path.join('public/_posts');

export type PostData = {
  id: string;
  title: string;
  date: string;
  categories: string[];
  excerpt: string,
  readingTime: string;
};

export type PostDataWithContent = PostData & {
  content: string;
};

const getReadingTime = (content: string) => {
  const wordsPerMinute = 200;
  const words = content.split(' ').length;
  const minutes = words / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  if (readTime < 2) {
    return '2 min'
  }

  if (readTime > 60) {
    return `${Math.floor(readTime / 60)} hr ${readTime % 60} min`;
  }

  return `${readTime} min`;
}

const getExcerpt = (content: string) => {

  // Remove any titles, etc
  content = content.split('\n').filter(line => /^[a-zA-Z]/.test(line)).join('\n')

  // Remove any parentheticals (and everything between it) - including the starting " "
  content = content.replace(/\s?\(.*?\)/g, '');

  // Then, remove brackets (keep the content inside)
  content = content.replace('[', '');
  content = content.replace(']', '');

  // If there is no content left, return an empty string
  if (!content) {
    return '';
  }

  const sliceIndex = content.lastIndexOf(' ', 140);
  if (sliceIndex !== -1) {
    return content.slice(0, sliceIndex) + '...';
  } else {
    return content.slice(0, 140) + '...';
  }
}

export function getSortedPostsData(): PostData[] {
  const fileNames = getAllPostIds();
  const allPostsData: PostData[] = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const excerpt = getExcerpt(matterResult.content);
    const readingTime = getReadingTime(matterResult.content);

    return {
      id,
      ...matterResult.data,
      excerpt: excerpt,
      readingTime: readingTime
    } as PostData;
  });
  return allPostsData.sort((a, b) => (Date.parse(a.date) < Date.parse(b.date) ? 1 : -1));
}

export function getAllPostIds(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  // Filter out anything that starts with draft
  const validFiles = fileNames.filter(f => !f.startsWith('draft'));
  return validFiles;
}

export function getPostData(id: string): PostDataWithContent {
  const fullPath = path.join(postsDirectory, `${id}`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  
  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult.data,
    content: matterResult.content,
  } as PostDataWithContent;
}
