import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

const featuredPosts: Record<string, string> = {
  'Unintelligent Design': "A book I wrote about decision making. Use at your own peril.",
  'Enlightenment Maybe': "Is the world getting better? That depends on our extinction risk.",
  'Everyone\'s Dog Died This Year': "Design for uncorrelated failure modes, to best support your friends.",
  'Why Version Control is Not Version Control': "Collaboration on current state >> mucking with historical state. ",
  //'Client-side Code and User Guarantees': "Back when I was doing Blockchain",
};

const categoryColors: Record<string, string> = {
  'creative-writing': '#FFB7C5',
  'world-model': '#B2E7E8',
  'ai-safety': '#B3C7D6',
  'invention': '#FDEB9D',
  'blockchain': '#F3C5F5',
  'reflection': '#C4E1F7',
  'creative': '#FFDAC1',
  'product': '#FFFACD',
  'spreadsheets': '#D4EBDA',
  'blog': '#E6E6FA',
  'media': '#FFE4E1',
  'inventions': '#FDE2E4',
  'evolution': '#FFCCCB',
  'security': '#D1C4E9',
  'system-design': '#D0ECE7',
  'math': '#FAD6A5',
};

// Utility function to generate a color based on a string (category name)
const stringToColor = (str: string) => {
  return categoryColors[str] || '#000000';
};

export default function Home() {
  const allPostsData = getSortedPostsData();
  let featuredPostsData = allPostsData.filter(post => Object.keys(featuredPosts).includes(post.title));
  // Sort featured posts by the order they appear in the featuredPosts object
  featuredPostsData.sort((a, b) => Object.keys(featuredPosts).indexOf(a.title) - Object.keys(featuredPosts).indexOf(b.title));

  return (
    <div className="container mx-auto px-4 prose prose-lg">
      <header className="my-8">
        <h1 className="text-4xl font-bold">Nate Rush</h1>
        <p className="mt-2">
          I’m a product designer and engineer whose spent the past five years scaling my startup from zero to 400k in ARR. I’m passionate about software engineering because I love writing code, and I’m dedicated to product design because I want the code I write to impact real-people in the real-world. I’m shifting my focus to building safe AI systems.
        </p>
      </header>
      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featuredPostsData.map(({ id, date, title, categories }) => (
            <Link href={`/posts/${id}`} key={id}>
              <div className="flex flex-col justify-between border p-4 rounded shadow hover:bg-gray-100 cursor-pointer h-full">
                <div>
                  <div className="text-blue-600">{title}</div>
                  <p>{featuredPosts[title]}</p>
                </div>
                <div className="mt-2 flex flex-wrap">
                  {categories.map(category => (
                    <span
                      key={category}
                      className="text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded"
                      style={{ backgroundColor: stringToColor(category), color: 'black' }}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">All Posts</h2>
          <ul className="list-none p-0">
            {allPostsData.map(({ id, date, title, categories }) => (
              <Link key={id} href={`/posts/${id}`}>
                <li className="mb-4 p-0">
                  <div className="text-blue-600">{title}</div>
                  <div className="flex flex-wrap">
                    {categories.map(category => (
                      <span
                      key={category}
                      className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                      style={{ backgroundColor: stringToColor(category), color: 'black' }}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <small className="text-gray-500">{date.split(' ')[0]}</small>
                </li>
              </Link>
            ))}
          </ul>
        </section>
      </main>
      <footer className="py-8">
        <section>
          <p>Contact me @ <code>f{'"'}nate&#123;last_name.lower()&#125;&#123;1998-1&#125;@gmail.com{'"'}</code></p>
        </section>
      </footer>
    </div>
  );
}