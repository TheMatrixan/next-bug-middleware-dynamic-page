import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/404">/404</Link>
        </li>
        <li>
          <Link href="/dynamic/123">/dynamic/123 - exists - should be dynamic page</Link>
        </li>
        <li>
          <Link href="/dynamic/456">/dynamic/456 - exists - should be dynamic page</Link>
        </li>
        <li>
          <Link href="/dynamic/798">/dynamic/798 - does not exist - should be 404</Link>
        </li>
      </ul>
    </div>
  );
}
