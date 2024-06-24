// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), '_posts');

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

export function getAllPostIds(): { params: { id: string } }[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
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
