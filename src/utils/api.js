// src/utils/api.js

const BASE_URL = "https://components-api.hetprajapati80.workers.dev/components"

export const loadComponentsFromAPI = async (endpoint) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching component data:', error);
        return [];
    }
};
