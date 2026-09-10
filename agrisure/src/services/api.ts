const API_URL = "http://localhost:5000/api";


export async function getCrops() {

    const response = await fetch(
        `${API_URL}/crops`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch crops");
    }

    return response.json();
}


export async function getCrop(id: string) {

    const response = await fetch(
        `${API_URL}/crops/${id}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch crop");
    }

    return response.json();
}


export async function getFertilizers() {

    const response = await fetch(
        `${API_URL}/fertilizers`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch fertilizers");
    }

    return response.json();
}


export async function loginUser(
    email: string,
    password: string
) {

    const response = await fetch(
        `${API_URL}/auth/login`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })
        }
    );

    if (!response.ok) {
        throw new Error("Login failed");
    }

    return response.json();
}