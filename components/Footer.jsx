
import Link from "next/link"

export default function Component() {
  return (
    <footer className="w-full bg-muted py-6">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <p className="text-sm text-muted-foreground">&copy; 2024 Cinebuzz Inc. All rights reserved.</p>
        <nav className="flex items-center space-x-4">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}