"use client";

import { useState } from "react";
import { FaCloudUploadAlt, FaSpinner } from "react-icons/fa";

export default function AddGalleryPage() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Submit logic here
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Add Gallery Image</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Image Title / Caption</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 text-sm"
            placeholder="Enter caption..."
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Upload Image File</label>
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-xl p-6 cursor-pointer hover:border-emerald-500 transition">
            <FaCloudUploadAlt className="text-3xl text-slate-400 mb-2" />
            <span className="text-sm text-slate-600">{image ? image.name : "Browse gallery image"}</span>
            <input type="file" onChange={(e) => e.target.files && setImage(e.target.files[0])} accept="image/*" className="hidden" />
          </label>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2"
        >
          {loading && <FaSpinner className="animate-spin text-sm" />}
          Upload to Gallery
        </button>
      </form>
    </div>
  );
}