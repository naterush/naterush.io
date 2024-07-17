// app/posts/[id]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { remark } from 'remark';
import html from 'remark-html';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import Prism from 'prismjs';
import cheerio from 'cheerio';

// Load all Prism languages you need
import 'prismjs/components/prism-python';
// Add more languages as needed

function highlightCodeBlocks(htmlString: string) {
  const $ = cheerio.load(htmlString);

  $('code').each((_, element) => {
    const $element = $(element);
    const languageClass = $element.attr('class')?.split(' ').find(cls => cls.startsWith('language-'));

    if (languageClass) {
      const language = languageClass.replace('language-', '');
      const code = $element.text();

      if (code) {
        const highlightedCode = Prism.highlight(code, Prism.languages[language], language);
        $element.html(highlightedCode);
      }
    }
  });

  return $.html();
}

export async function generateStaticParams() {
  const postIds = getAllPostIds();
  return postIds.map(postId => ({
    id: postId,
  }));
}
 
type Props = {
  params: { id: string }
}
 
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const postData = getPostData(params.id);
  return {
    title: postData.title
  }
}

export default async function Post(params: any) {
  const postData = getPostData(params.params.id);
  if (!postData) {
    notFound();
  }

  const processedContent = await remark().use(html).process(postData.content);
  let contentHtml = processedContent.toString();

  // Highlight code blocks
  contentHtml = highlightCodeBlocks(contentHtml);

  return (
    <div className="container mx-auto px-8">
      <article className="prose mx-auto my-8" style={{maxWidth: '80ch'}}>
        <div className="mt-8 mb-8 mx-auto">
          <Link href="/">
            <div className="text-blue-600 hover:underline">← Back to home</div>
          </Link>
        </div>
        <h1 className="text-4xl font-bold">{postData.title}</h1>
        <div className="text-gray-500 mb-4">{postData.date.split(' ')[0]}</div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </div>
  );
}