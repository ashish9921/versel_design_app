import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { CustomCursor } from "@/components/site/CustomCursor";
import { BottomBlur } from "@/components/site/BottomBlur";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-serif text-[120px] leading-none text-accent/70">404</div>
        <h2 className="mt-4 text-2xl font-serif">Page not found</h2>
        <p className="mt-3 text-sm text-muted-foreground font-light">
          The page you&apos;re looking for has been moved or never existed.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-7 py-3 bg-foreground text-background eyebrow hover:bg-accent transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-serif">Something interrupted us</h1>
        <p className="mt-3 text-sm text-muted-foreground font-light">
          Please try again or return to the home page.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="px-6 py-3 bg-foreground text-background eyebrow hover:bg-accent transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="px-6 py-3 border border-foreground/15 eyebrow hover:border-foreground transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "STOA — Architecture & Interior Design Studio" },
      {
        name: "description",
        content:
          "STOA is an architecture and interior design studio crafting residential, commercial, interior and landscape projects rooted in material honesty and quiet permanence.",
      },
      { name: "author", content: "STOA Studio" },
      { property: "og:title", content: "STOA — Architecture & Interior Design Studio" },
      {
        property: "og:description",
        content:
          "Architecture and interior design rooted in material honesty and quiet permanence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
      <BottomBlur />
      <CustomCursor />
    </QueryClientProvider>
  );
}
