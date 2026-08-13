

import { notFound } from "next/navigation";
import NewsDetailClient from "./NewsDetailClient";
import { newsData } from "@/app/data/news";

export async function generateStaticParams() {
  return newsData.map((item) => ({
    slug: item.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params; // ✅ must await
  const news = newsData.find((item) => item.slug === slug);
  if (!news) notFound();
  return (
    <main className="bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900 min-h-screen">
      <NewsDetailClient news={news} />
    </main>
  );
}