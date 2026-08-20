"use server";

import { revalidatePath } from "next/cache";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/sliders`;

export async function createSliderAction(formData: FormData) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: formData, 
    });

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const textResponse = await res.text();
      console.error("Non-JSON Server Response:", textResponse);
      return { success: false, message: "Server returned non-JSON response. Check backend URL." };
    }

    const data = await res.json();

    if (!res.ok) {
      return { success: false, message: data.error || "Failed to add slide on server." };
    }
    
    revalidatePath("/hero-slider"); 
    return { success: true, data };
  } catch (error: any) {
    console.error("Server Action Error:", error);
    return { success: false, message: error?.message || "Something went wrong!" };
  }
}

// ২. নির্দিষ্ট স্লাইডের ডিটেইলস আনার সার্ভার অ্যাকশন (Get Details)
export async function getSliderByIdAction(id: string) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "GET",
      cache: "no-store", // লেটেস্ট ডাটা পাওয়ার জন্য
    });

    if (!res.ok) {
      return { success: false, message: "Failed to fetch slider details." };
    }

    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    console.error("Get Slider Details Error:", error);
    return { success: false, message: "Something went wrong!" };
  }
}

// ৩. স্লাইড আপডেট বা এডিট করার সার্ভার অ্যাকশন (Update / Edit)
export async function updateSliderAction(id: string, formData: FormData) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      body: formData, // মুল্টার বা বডির ডেটা পাঠানোর জন্য FormData ব্যবহার করা হয়েছে
    });

    if (!res.ok) {
      return { success: false, message: "Failed to update slide." };
    }

    const data = await res.json();

    revalidatePath("/admin/hero-slider");
    // যদি এডিট পেজ বা অন্য কোনো স্পেসিফিক পেজ রিভ্যালিডেট করতে চান:
    revalidatePath(`/admin/hero-slider/edit/${id}`);

    return { success: true, data };
  } catch (error) {
    console.error("Update Slider Error:", error);
    return { success: false, message: "Something went wrong!" };
  }
}

// ৪. স্লাইড ডিলিট করার সার্ভার অ্যাকশন
export async function deleteSliderAction(id: string | number) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      return { success: false, message: "Failed to delete slide." };
    }

    revalidatePath("/admin/hero-slider");
    return { success: true, message: "Slide deleted successfully." };
  } catch (error) {
    console.error("Delete Slider Error:", error);
    return { success: false, message: "Something went wrong!" };
  }
}