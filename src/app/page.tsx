import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

const featuredPosts: Record<string, string> = {
  'Unintelligent Design': "A book I wrote about decision making. Use at your own peril.",
  'Enlightenment Maybe': "Is the world getting better? That depends on our extinction risk.",
  'Everyone\'s Dog is Dead': "Design for uncorrelated failure modes, to best support your friends.",
  'Why Version Control is Not Version Control': "Collaboration on current state >> mucking with historical state. ",
  //'Client-side Code and User Guarantees': "Back when I was doing Blockchain",
};

function hexToRgba(hex: string, alpha = 0.1) {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, '');

  // Parse the r, g, b values
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  // Return the rgba color with the specified opacity
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const categoryColors: Record<string, string> = {
  'creative-writing': '#FF6F8E',
  'world-model': '#66CFD1',
  'ai-safety': '#678FAD',
  'invention': '#FBD63B',
  'blockchain': '#E78BEB',
  'reflection': '#89C3EF',
  'creative': '#FFB583',
  'product': '#F467F7',
  'spreadsheets': '#A9D7B5',
  'blog': '#CDCDF5',
  'media': '#FFC9C3',
  'inventions': '#FBC5C9',
  'evolution': '#FF9997',
  'security': '#A389D3',
  'system-design': '#A1D9CF',
  'math': '#F5AD4B',
};

// Utility function to generate a color based on a string (category name)
const stringToColor = (str: string) => {
  return categoryColors[str] || '#000000';
};

function Tag(props: { category: string }) {
  const color = stringToColor(props.category)
  const lighter = hexToRgba(color);
  return (
    <div className='flex flex-row items-center text-xs font-semibold mr-2 p-1.5 rounded-full' style={{ backgroundColor: lighter, color: color }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
        <path d="M8.80249 5.82001L5.60248 2.61649C5.29048 2.30399 4.85849 2.125 4.41699 2.125H1.867C1.182 2.125 0.625 2.68251 0.625 3.36801V5.9205C0.625 6.368 0.799479 6.78951 1.11548 7.10651L4.31598 10.31C4.69048 10.685 5.08898 10.875 5.50098 10.875C5.91248 10.875 6.31149 10.685 6.68549 10.31L8.802 8.1915C9.5665 7.427 9.56649 6.58451 8.80249 5.82001ZM8.27252 7.6615L6.15601 9.78C5.69701 10.2385 5.30398 10.2375 4.84698 9.78L1.64697 6.57651C1.47147 6.40101 1.37549 6.168 1.37549 5.9205V3.36801C1.37549 3.09601 1.59599 2.875 1.86749 2.875H4.41748C4.66148 2.875 4.90001 2.97401 5.07251 3.14651L8.27252 6.35001C8.74352 6.82201 8.74352 7.1895 8.27252 7.6615ZM11.375 7.00949C11.3745 7.41549 11.1805 7.813 10.7995 8.1915L8.68549 10.31C8.31749 10.6845 7.918 10.875 7.5 10.875C7.293 10.875 7.125 10.707 7.125 10.5C7.125 10.293 7.293 10.125 7.5 10.125C7.7095 10.125 7.92853 10.0095 8.15253 9.78201L10.2695 7.66C10.5055 7.426 10.6245 7.207 10.625 7.008C10.6255 6.8075 10.506 6.58601 10.27 6.35001L7.07001 3.14499C6.91501 2.98749 6.70702 2.89399 6.48102 2.87949C6.27402 2.86599 6.11698 2.68749 6.13098 2.48099C6.14398 2.27399 6.34099 2.12001 6.52899 2.13101C6.94049 2.15751 7.32203 2.33051 7.60303 2.61801L10.8005 5.8205C11.1825 6.202 11.376 6.60249 11.375 7.00949ZM3.25 4.25C3.25 4.526 3.02698 4.75 2.75098 4.75C2.47598 4.75 2.25 4.526 2.25 4.25C2.25 3.974 2.47102 3.75 2.74652 3.75H2.75153C3.02703 3.75 3.25 3.974 3.25 4.25Z" fill={color}/>
      </svg>
      <span className='ml-1 mr-1'>
        {props.category}
      </span>
    </div>
  );
}

export default function Home() {
  const allPostsData = getSortedPostsData();
  let featuredPostsData = allPostsData.filter(post => Object.keys(featuredPosts).includes(post.title));
  // Sort featured posts by the order they appear in the featuredPosts object
  featuredPostsData.sort((a, b) => Object.keys(featuredPosts).indexOf(a.title) - Object.keys(featuredPosts).indexOf(b.title));

  return (
    <div className="container mx-auto px-4 prose">
      <header className="mt-20 mb-8">
        <h1 className="text-4xl font-bold font-medium" style={{
          color: '#292929',
        }}>
          Nate Rush
        </h1>
        <p className="mt-2 leading-snug font-normal">
          I’m a product designer and engineer whose spent the past four years scaling my startup from zero to $400,000 in ARR. I’m passionate about software engineering because I love writing code, and I’m dedicated to product design because I want the code I write to impact real-people in the real-world. I’m shifting my focus to building safe AI systems.
        </p>
        <div className="container flex flex-row items-center">
          <a href="https://github.com/naterush" className="flex items-center space-x-1 group hover:no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:fill-[#4848F7]">
              <g clipPath="url(#clip0_49_165)">
                <path fillRule="evenodd" clipRule="evenodd" d="M6 0C2.685 0 0 2.685 0 6C0 8.655 1.7175 10.8975 4.1025 11.6925C4.4025 11.745 4.515 11.565 4.515 11.4075C4.515 11.265 4.5075 10.7925 4.5075 10.29C3 10.5675 2.61 9.9225 2.49 9.585C2.4225 9.4125 2.13 8.88 1.875 8.7375C1.665 8.625 1.365 8.3475 1.8675 8.34C2.34 8.3325 2.6775 8.775 2.79 8.955C3.33 9.8625 4.1925 9.6075 4.5375 9.45C4.59 9.06 4.7475 8.7975 4.92 8.6475C3.585 8.4975 2.19 7.98 2.19 5.685C2.19 5.0325 2.4225 4.4925 2.805 4.0725C2.745 3.9225 2.535 3.3075 2.865 2.4825C2.865 2.4825 3.3675 2.325 4.515 3.0975C4.995 2.9625 5.505 2.895 6.015 2.895C6.525 2.895 7.035 2.9625 7.515 3.0975C8.6625 2.3175 9.165 2.4825 9.165 2.4825C9.495 3.3075 9.285 3.9225 9.225 4.0725C9.6075 4.4925 9.84 5.025 9.84 5.685C9.84 7.9875 8.4375 8.4975 7.1025 8.6475C7.32 8.835 7.5075 9.195 7.5075 9.7575C7.5075 10.56 7.5 11.205 7.5 11.4075C7.5 11.565 7.6125 11.7525 7.9125 11.6925C10.2825 10.8975 12 8.6475 12 6C12 2.685 9.315 0 6 0Z" fill="#868686"/>
              </g>
              <defs>
                <clipPath id="clip0_49_165">
                  <rect width="12" height="12" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span className="text-[#868686] font-inter font-medium underline group-hover:text-[#4848F7]">Github</span>
          </a>
          <div className="mx-2 w-px h-4 bg-[#868686]"></div>
          <a href="mailto:naterush1997@gmail.com" className="flex items-center space-x-1 group hover:no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none" className="group-hover:fill-[#4848F7]">
              <path d="M9 10.875H3C1.791 10.875 1.125 10.209 1.125 9V4.5C1.125 3.291 1.791 2.625 3 2.625H9C10.209 2.625 10.875 3.291 10.875 4.5V9C10.875 10.209 10.209 10.875 9 10.875ZM3 3.375C2.2115 3.375 1.875 3.7115 1.875 4.5V9C1.875 9.7885 2.2115 10.125 3 10.125H9C9.7885 10.125 10.125 9.7885 10.125 9V4.5C10.125 3.7115 9.7885 3.375 9 3.375H3ZM6.51453 7.0895L8.97046 5.3035C9.13796 5.182 9.17498 4.947 9.05298 4.7795C8.93148 4.6125 8.69755 4.5745 8.52905 4.697L6.073 6.483C6.029 6.515 5.97051 6.515 5.92651 6.483L3.47046 4.697C3.30146 4.5745 3.06803 4.613 2.94653 4.7795C2.82453 4.947 2.86155 5.1815 3.02905 5.3035L5.48499 7.09C5.63899 7.202 5.81951 7.2575 5.99951 7.2575C6.17951 7.2575 6.36103 7.2015 6.51453 7.0895Z" fill="#868686"/>
            </svg>
            <span className="text-[#868686] font-inter font-medium underline group-hover:text-[#4848F7]">naterush1997@gmail.com</span>
          </a>
          <div className="mx-2 w-px h-4 bg-[#868686]"></div>
          <a href="https://www.linkedin.com/in/nate-rush-045357b8/" className="flex items-center space-x-1 group hover:no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none" className="group-hover:fill-[#4848F7]">
              <g clipPath="url(#clip0_49_174)">
                <path d="M10.2 0.5H1.8C0.805887 0.5 0 1.30589 0 2.3V10.7C0 11.6941 0.805887 12.5 1.8 12.5H10.2C11.1941 12.5 12 11.6941 12 10.7V2.3C12 1.30589 11.1941 0.5 10.2 0.5Z" fill="#868686"/>
                <path d="M3.32812 4.60156C3.80706 4.60156 4.19531 4.21331 4.19531 3.73438C4.19531 3.25544 3.80706 2.86719 3.32812 2.86719C2.84919 2.86719 2.46094 3.25544 2.46094 3.73438C2.46094 4.21331 2.84919 4.60156 3.32812 4.60156Z" fill="white"/>
                <path d="M5.71875 5.04688V9.6875V5.04688ZM3.32812 5.04688V9.6875V5.04688Z" fill="white"/>
                <path d="M5.71875 5.04688V9.6875M3.32812 5.04688V9.6875" stroke="white" strokeWidth="1.54688"/>
                <path d="M6.46875 7.10938C6.46875 6.64062 6.77344 6.17188 7.3125 6.17188C7.875 6.17188 8.08594 6.59375 8.08594 7.22656V9.6875H9.63281V7.03906C9.63281 5.60938 8.88281 4.95312 7.85156 4.95312C7.05469 4.95312 6.65625 5.39844 6.46875 5.70312" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_49_174">
                  <rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
              </defs>
            </svg>
            <span className="text-[#868686] font-inter font-medium underline group-hover:text-[#4848F7]">LinkedIn</span>
          </a>
        </div>
      </header>
      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-medium mb-4">My Favorites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featuredPostsData.map(({ id, date, title, categories, readingTime }) => (
            <Link href={`/posts/${id}`} key={id}>
              <div className="group perspective">
                <div className="flex flex-col justify-between border p-5 rounded shadow-sm hover:bg-gray-100 cursor-pointer h-full rounded-[16px] transition-transform duration-300 ease-in-out transform group-hover:-rotate-2">
                  <div>
                    <div>{title} <span className='text-[#868686]'>({readingTime})</span></div>
                    <p className='not-prose my-2 leading-snug text-normal text-[#868686] font-normal'>{featuredPosts[title]}</p>
                  </div>
                  <div className="mt-2 flex flex-wrap">
                    {categories.map(category => (
                      <Tag key={category} category={category} />
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        </section>
        <section>
          <h2 className="text-2xl font-medium mb-4">All the rest of &apos;em</h2>
          <ul className="list-none p-0">
            {allPostsData.map(({ id, date, title, categories, excerpt, readingTime }) => (
              <Link key={id} href={`/posts/${id}`} className="group">
                <li className="mb-4 p-0">
                  <div className="group-hover:text-[#868686] transition-colors duration-200">
                    {title} <span className='text-[#868686]'>({readingTime})</span>
                  </div>
                  <p className='not-prose text-normal leading-snug font-normal text-[#868686]'>
                    {excerpt}
                  </p>
                  <p className="not-prose text-sm my-2 font-normal text-[#868686]">
                    {date.split(' ')[0]}
                  </p>
                  <div className="flex flex-wrap">
                    {categories.map(category => (
                      <Tag key={category} category={category} />
                    ))}
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}