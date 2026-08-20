"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaNewspaper, FaArrowLeft, FaUpload, FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import { createNewsAction } from "@/lib/serviceapi/serveraction/news.service";


export default function AddNewsPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    categoryColor: "from-amber-500 to-orange-500",
    excerpt: "",
    content: "",
    date: "",
    readTime: "",
    author: "Travel Desk",
    featured: false,
  });

  // ইনপুট পরিবর্তন হ্যান্ডলার
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // ইমেজ সিলেক্ট হ্যান্ডলার
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // ফর্ম সাবমিট হ্যান্ডলার (সার্ভার অ্যাকশন সহ)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageFile) {
      toast.error("Please select a featured image!");
      return;
    }

    try {
      setIsSubmitting(true);
      const data = new FormData();
      data.append("image", imageFile);
      data.append("title", formData.title);
      data.append("slug", formData.slug);
      data.append("category", formData.category);
      data.append("categoryColor", formData.categoryColor);
      data.append("excerpt", formData.excerpt);
      data.append("content", formData.content);
      data.append("date", formData.date);
      data.append("readTime", formData.readTime);
      data.append("author", formData.author);
      data.append("featured", String(formData.featured));

      // সার্ভার অ্যাকশন কল
      const result = await createNewsAction(data);

      if (result.success) {
        toast.success("News added successfully!");
        router.push("/news"); // সফলভাবে সেভ হওয়ার পর নিউজ পেজে রিডাইরেক্ট করবে
        router.refresh();
      } else {
        toast.error(result.message || "Failed to add news!");
      }
    } catch (error) {
      console.error("Error creating news:", error);
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 sm:p-6 lg:p-10">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl border border-slate-200/70 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
              <FaNewspaper className="text-emerald-600" /> Add New Travel News
            </h1>
            <p className="text-sm text-slate-500 mt-0.5">
              Publish new articles, visa updates, or offers for travelers.
            </p>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-xl transition"
          >
            <FaArrowLeft className="text-xs" />
            Back to News
          </Link>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-6">
          
          {/* Image Upload Area */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">
              Featured Image <span className="text-rose-500">*</span>
            </label>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative h-40 w-full sm:w-72 bg-slate-100 rounded-xl overflow-hidden border-2 border-dashed border-slate-300 flex items-center justify-center">
                {imagePreview ? (
                  <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                ) : (
                  <span className="text-xs text-slate-400">No image chosen</span>
                )}
              </div>
              <div className="flex-1 w-full">
                <label className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-5 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-xl cursor-pointer transition border border-emerald-200">
                  <FaUpload className="text-sm" />
                  <span>Choose News Image</span>
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
                <p className="text-xs text-slate-400 mt-2">Supports JPG, PNG, WEBP.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Title */}
            <div className="space-y-1.5 sm:col-span-2">
              <label className="block text-sm font-semibold text-slate-700">News Title <span className="text-rose-500">*</span></label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Saudi Tourist Visa Now Open"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 text-sm"
              />
            </div>

            {/* Slug */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700">Slug (URL Name) <span className="text-rose-500">*</span></label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="e.g., saudi-tourist-visa"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 text-sm"
              />
            </div>

            {/* Category */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700">Category <span className="text-rose-500">*</span></label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="e.g., Visa Update, Offer, Travel Guide"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 text-sm"
              />
            </div>

            {/* Category Color Gradient */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700">Category Badge Gradient</label>
              <select
                name="categoryColor"
                value={formData.categoryColor}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 text-sm bg-white"
              >
                <option value="from-amber-500 to-orange-500">Amber to Orange</option>
                <option value="from-emerald-500 to-teal-500">Emerald to Teal</option>
                <option value="from-blue-500 to-cyan-500">Blue to Cyan</option>
                <option value="from-purple-500 to-pink-500">Purple to Pink</option>
              </select>
            </div>

            {/* Date */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700">Date <span className="text-rose-500">*</span></label>
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="e.g., 15 June 2026"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 text-sm"
              />
            </div>

            {/* Read Time */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700">Read Time</label>
              <input
                type="text"
                name="readTime"
                value={formData.readTime}
                onChange={handleChange}
                placeholder="e.g., 3 min read"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 text-sm"
              />
            </div>

            {/* Author */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="e.g., Travel Desk"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 text-sm"
              />
            </div>

            {/* Featured Checkbox */}
            <div className="flex items-center gap-3 pt-6 sm:col-span-2">
              <input
                type="checkbox"
                name="featured"
                id="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="w-5 h-5 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
              />
              <label htmlFor="featured" className="text-sm font-semibold text-slate-700 cursor-pointer">
                Mark as Featured News (🔥)
              </label>
            </div>

            {/* Excerpt */}
            <div className="space-y-1.5 sm:col-span-2">
              <label className="block text-sm font-semibold text-slate-700">Short Excerpt <span className="text-rose-500">*</span></label>
              <textarea
                name="excerpt"
                rows={2}
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="Write a brief summary for the card view..."
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 text-sm resize-none"
              />
            </div>

            {/* Content */}
            <div className="space-y-1.5 sm:col-span-2">
              <label className="block text-sm font-semibold text-slate-700">Full Content <span className="text-rose-500">*</span></label>
              <textarea
                name="content"
                rows={6}
                value={formData.content}
                onChange={handleChange}
                placeholder="Write the full detailed news article or highlights..."
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 text-sm resize-none"
              />
            </div>

          </div>

          {/* Submit Button */}
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl shadow-md shadow-emerald-600/25 transition disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin text-sm" />
                  <span>Publishing News...</span>
                </>
              ) : (
                <span>Publish Article</span>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}