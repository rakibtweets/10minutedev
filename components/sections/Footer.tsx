import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mx-auto mt-20 w-full max-w-6xl px-4 py-12">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold">
              10minute<span className="text-orange-500">Dev</span>
            </h3>
            <p className="text-gray-400">
              Empowering developers through free, high-quality video courses.
            </p>
          </div>
          <div className="flex flex-col items-start lg:items-center">
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-green-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="transition-colors hover:text-green-400"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-green-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-green-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start lg:items-center">
            <h4 className="mb-4 text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/rakibtweets"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-green-400"
              >
                <Github className="size-6" />
              </Link>
              <Link
                href="https://twitter.com/rakibtweets"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-green-400"
              >
                <Twitter className="size-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/rakibofficial007/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-green-400"
              >
                <Linkedin className="size-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} 10minutedev platform. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
