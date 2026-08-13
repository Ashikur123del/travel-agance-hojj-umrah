// app/news/page.tsx (Server Component – কোনো "use client" নেই)

import Image from "next/image";
import Link from "next/link";

import { FaArrowRight, FaCalendarAlt, FaClock, FaNewspaper, FaUser } from "react-icons/fa";
import { newsData } from "../data/news";
import ServiceHero from "../services/ServiceHero";

export default function NewsPage() {
  return (
    <main>
      
      <ServiceHero
        title="Travel News"
        subtitle="Stay Updated"
        icon={<FaNewspaper />}
        description="Latest updates on visas, flights, tours, and travel tips from our experts."
        bgImage="https://assets3.thrillist.com/v1/image/2795146/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70"
      />

      {/* News Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900 via-emerald-950 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/40 transition-all group"
              >
                <Link href={`/news/${item.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute top-3 left-3 bg-gradient-to-r ${item.categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}
                    >
                      {item.category}
                    </div>
                    {item.featured && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        🔥 Featured
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-teal-200/40 mb-2">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="w-3 h-3" /> {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="w-3 h-3" /> {item.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUser className="w-3 h-3" /> {item.author}
                    </span>
                  </div>
                  <Link href={`/news/${item.slug}`}>
                    <h3 className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="mt-2 text-teal-100/60 text-sm line-clamp-2">
                    {item.excerpt}
                  </p>
                  <Link
                    href={`/news/${item.slug}`}
                    className="mt-3 inline-block text-amber-400 text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read More <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}