"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCalendarAlt, FaClock, FaUser, FaShareAlt } from "react-icons/fa";
import { NewsItem } from "@/app/(main)/data/news";


export default function NewsDetailClient({ news }: { news: NewsItem }) {
  return (
    <article className="container mx-auto px-4 py-12">
      <Link href="/news" className="inline-flex items-center gap-2 text-teal-200/70 hover:text-amber-400 mb-6">
        <FaArrowLeft /> Back to News
      </Link>
      <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        <Image src={news.image} alt={news.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-8">
          <span className={`inline-block bg-gradient-to-r ${news.categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg mb-3`}>
            {news.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white">{news.title}</h1>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 text-sm text-teal-200/60 mt-6 border-b border-white/10 pb-4">
        <span><FaCalendarAlt className="inline mr-1 text-amber-400" /> {news.date}</span>
        <span><FaClock className="inline mr-1 text-amber-400" /> {news.readTime}</span>
        <span><FaUser className="inline mr-1 text-amber-400" /> {news.author}</span>
        <button className="ml-auto"><FaShareAlt className="inline mr-1" /> Share</button>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 prose prose-invert prose-lg">
        <div className="text-teal-100/80 whitespace-pre-line">{news.content}</div>
      </motion.div>
      <div className="mt-12 bg-gradient-to-r from-emerald-950/80 to-cyan-900/80 border border-white/10 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white">Ready to <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">Book?</span></h3>
        <Link href="/contact" className="mt-4 inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold px-8 py-3 rounded-xl shadow-lg">Contact Now</Link>
      </div>
    </article>
  );
}