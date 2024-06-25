// app/page.tsx
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container mx-auto px-4 prose prose-lg">
      <header className="my-8">
        <h1 className="text-4xl font-bold">Nate Rush</h1>
        <p className="mt-2">I’m a product designer and engineer whose spent the past five years scaling my startup from zero to 400k in ARR. I’m passionate about software engineering because I love writing code, and I’m dedicated to product design because I want the code I write to impact real-people in the real-world. I’m shifting my focus to building safe AI systems.</p>
      </header>
      <main>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
          <ul className="list-none p-0">
            {allPostsData.map(({ id, date, title }) => (
              <li key={id} className="mb-4 p-0">
                <Link href={`/posts/${id}`}>
                  <div className="text-blue-600">{title}</div>
                </Link>
                <small className="text-gray-500">{date.split(' ')[0]}</small>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="py-8">
        <section>
          <p>Contact me @ <code>f&ldquonate&#123;last_name.lower()&#125;&#123;1998-1&#125;@gmail.com&ldquo</code></p>
        </section>
      </footer>
    </div>
  );
}
