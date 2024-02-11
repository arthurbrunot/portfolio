import {Container} from "@/components/Container";
import {FadeIn} from "@/components/FadeIn";
import Link from "next/link";

export default async function Page() {
  return (
    <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
      <FadeIn className="flex max-w-xl flex-col items-center text-center">
        <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
          C&apos;est pour bientôt !
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          href="/"
          className="mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
        >
          Go to the home page
        </Link>
      </FadeIn>
    </Container>
  )
}
