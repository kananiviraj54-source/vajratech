import Link from "next/link";
import { PageHero } from "@/components/Marketing";
export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404 / PAGE NOT FOUND"
        title="Let’s get you back on track."
        description="This page may have moved, or the address may be incorrect."
      />
      <section className="container section">
        <Link href="/" className="button">
          Back to home
        </Link>
      </section>
    </>
  );
}
