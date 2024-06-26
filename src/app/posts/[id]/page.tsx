// app/posts/[id]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
  const postIds = getAllPostIds();
  return postIds.map(postId => ({
    id: postId,
  }));
}

export default async function Post(params: any) {
  const postData = getPostData(params.params.id);
  if (!postData) {
    notFound();
  }

  const processedContent = await remark().use(html).process(postData.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="container mx-auto px-4">
      <article className="prose my-8">
        <h1 className="text-4xl font-bold">{postData.title}</h1>
        <div className="text-gray-500 mb-4">{postData.date.split(' ')[0]}</div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
      <div className="mt-8 mb-8">
        <Link href="/">
          <div className="text-blue-600 hover:underline">← Back to home</div>
        </Link>
      </div>
    </div>
  );
}
