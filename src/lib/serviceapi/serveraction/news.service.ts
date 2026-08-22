"use server";

import { revalidatePath } from "next/cache";
import { NewsItem } from "@/types/news"; 

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/news`; 

export type NewsServerActionResponse<T = any> = {
  success: boolean;
  message?: string;
  data?: T;
};

export async function createNewsAction(formData: FormData): Promise<NewsServerActionResponse<NewsItem>> {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: formData, 
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      return { success: false, message: errorData?.error || "Failed to add news on server." };
    }

    const data: NewsItem = await res.json();
    revalidatePath("/news");
    return { success: true, data };
  } catch (error: unknown) {
    console.error("Server Action Error:", error);
    return { success: false, message: "Something went wrong!" };
  }
}
export async function getNewsByIdAction(id: string): Promise<NewsServerActionResponse<NewsItem>> {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      return { success: false, message: "Failed to fetch news details." };
    }

    const data: NewsItem = await res.json();
    return { success: true, data };
  } catch (error: unknown) {
    console.error("Get News Details Error:", error);
    return { success: false, message: "Something went wrong!" };
  }
}

export async function updateNewsAction(id: string, formData: FormData): Promise<NewsServerActionResponse<NewsItem>> {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PATCH", 
      body: formData, 
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      return { success: false, message: errorData?.error || "Failed to update news." };
    }

    const data: NewsItem = await res.json();
    revalidatePath("/news");
    revalidatePath(`/news/${id}`);

    return { success: true, data };
  } catch (error: unknown) {
    console.error("Update News Error:", error);
    return { success: false, message: "Something went wrong!" };
  }
}

export async function deleteNewsAction(id: string | number): Promise<NewsServerActionResponse> {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      return { success: false, message: "Failed to delete news." };
    }

    revalidatePath("/news");
    return { success: true, message: "News deleted successfully." };
  } catch (error: unknown) {
    console.error("Delete News Error:", error);
    return { success: false, message: "Something went wrong!" };
  }
}