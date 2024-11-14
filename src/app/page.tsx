import Link from 'next/link';

export default function Home() {
  return (
      <div>
        <h1>Welcome</h1>
        <nav>
          <ul>
            <li>
              <Link href="/users/">Users</Link>
            </li>
            <li>
              <Link href="/posts/">Posts</Link>
            </li>
            <li>
              <Link href="/comments/">Comments</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}
