export const getSliders = async () => {
  try {
    const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/sliders`;

    const res = await fetch(API_URL, {
      cache: "no-store", 
    });

    if (!res.ok) {
      throw new Error("Failed to fetch sliders");
    }

    const data = await res.json();
    
    if (Array.isArray(data)) {
      return data;
    } else if (data.sliders && Array.isArray(data.sliders)) {
      return data.sliders;
    }
    
    return [];
  } catch (error) {
    console.error("Error fetching sliders:", error);
    return [];
  }
};