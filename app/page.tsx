import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-background to-muted">
      <div className="text-center space-y-8 max-w-2xl">
        <h1 className="text-5xl font-bold text-foreground">Hello World! 👋</h1>

        <p className="text-xl text-muted-foreground">
          Welcome to Next.js with Image Optimization
        </p>

        {/* Example 1: Responsive image with automatic format optimization */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Optimized Images
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Placeholder image with next/image optimization */}
            <div className="relative aspect-square rounded-lg overflow-hidden border border-border">
              <Image
                src="/colorful-abstract-art.png"
                alt="Optimized placeholder image 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="relative aspect-square rounded-lg overflow-hidden border border-border">
              <Image
                src="https://plus.unsplash.com/premium_photo-1764546983241-9e33d0c26893?q=80&w=1620&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Optimized placeholder image 2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground bg-card p-6 rounded-lg border border-border">
          <p className="font-semibold text-card-foreground">
            ✨ changing something here!!!:
          </p>
          <ul className="list-disc list-inside space-y-1 text-left">
            <li>Automatic format optimization (WebP, AVIF)</li>
            <li>Responsive image loading with sizes prop</li>
            <li>Lazy loading by default (except priority images)</li>
            <li>Built-in blur placeholder support</li>
            <li>Automatic width and height inference</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
