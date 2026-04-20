// simple wrapper so we don’t repeat JSON.parse everywhere

const KEY = "backend";

export const getApplications = () => {
    try {
        return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch (e) {
        // fallback if corrupted
        return [];
    }
};

export const saveApplications = (data) => {
    localStorage.setItem(KEY, JSON.stringify(data));
};

export const addApplication = (app) => {
    const existing = getApplications();
    existing.push(app);
    saveApplications(existing);
};