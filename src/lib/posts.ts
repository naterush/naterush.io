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
};

export type PostDataWithContent = PostData & {
  content: string;
};

export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: PostData[] = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data
    } as PostData;
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostIds(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames;
}

export function getPostData(id: string): PostDataWithContent {
  const fullPath = path.join(postsDirectory, `${id}`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult.data,
    content: matterResult.content
  } as PostDataWithContent;
}
