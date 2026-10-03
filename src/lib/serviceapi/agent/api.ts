import {
    Agent,
    CreateAgentInput,
    UpdateAgentInput,
} from "@/types/agent.type";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

/**
 * ১. সব এজেন্টের ডাটা নিয়ে আসার জন্য (GET All)
 */
export async function getAllAgents(): Promise<Agent[]> {
    const response = await fetch(`${API_BASE_URL}/api/agents`, {
        method: "GET",
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch agents");
    }

    return response.json();
}

/**
 * ২. আইডি দিয়ে নির্দিষ্ট এজেন্টের ডাটা আনার জন্য (GET Single)
 */
export async function getAgentById(id: string): Promise<Agent> {
    const response = await fetch(`${API_BASE_URL}/api/agents/${id}`, {
        method: "GET",
    });

    if (!response.ok) {
        throw new Error("Agent not found");
    }

    return response.json();
}

/**
 * 🔽 ৩. নাম ও মোবাইল নম্বর দিয়ে এজেন্ট ভেরিফাই করার জন্য (NEW)
 */
export async function verifyAgent(
    name: string,
    mobileNo: string
): Promise<{ message: string; agent: Agent }> {
    const response = await fetch(`${API_BASE_URL}/api/agents/verify`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, mobileNo }),
    });

    const resData = await response.json();

    if (!response.ok) {
        throw new Error(resData.error || resData.message || "Verification failed");
    }

    return resData;
}

/**
 * ৪. নতুন এজেন্ট তৈরি করার জন্য (POST)
 */
export async function createAgent(data: CreateAgentInput): Promise<{ message: string; newAgent: Agent }> {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("fathersName", data.fathersName);
    formData.append("mobileNo", data.mobileNo);
    formData.append("bkashNumber", data.bkashNumber);
    formData.append("presentAddress", data.presentAddress);
    formData.append("permanentAddress", data.permanentAddress);
    formData.append("emergencyName", data.emergencyName);
    formData.append("emergencyRelation", data.emergencyRelation);
    formData.append("emergencyMobile", data.emergencyMobile);
    formData.append("emergencyAddress", data.emergencyAddress);

    if (data.photo) {
        formData.append("photo", data.photo);
    }

    const response = await fetch(`${API_BASE_URL}/api/agents`, {
        method: "POST",
        body: formData,
    });

    const resData = await response.json();

    if (!response.ok) {
        throw new Error(resData.error || "Failed to create agent");
    }

    return resData;
}

/**
 * ৫. এজেন্টের ডাটা আপডেট করার জন্য (PATCH)
 */
export async function updateAgent(
    id: string,
    data: UpdateAgentInput
): Promise<{ message: string; updatedAgent: Agent }> {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            if (key === "photo" && value instanceof File) {
                formData.append("photo", value);
            } else if (typeof value === "string") {
                formData.append(key, value);
            }
        }
    });

    const response = await fetch(`${API_BASE_URL}/api/agents/${id}`, {
        method: "PATCH",
        body: formData,
    });

    const resData = await response.json();

    if (!response.ok) {
        throw new Error(resData.error || "Failed to update agent");
    }

    return resData;
}

/**
 * ৬. এজেন্ট ডিলিট করার জন্য (DELETE)
 */
export async function deleteAgent(id: string): Promise<{ message: string }> {
    const response = await fetch(`${API_BASE_URL}/api/agents/${id}`, {
        method: "DELETE",
    });

    const resData = await response.json();

    if (!response.ok) {
        throw new Error(resData.error || "Failed to delete agent");
    }

    return resData;
}