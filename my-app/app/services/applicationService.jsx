import { addApplication, getApplications } from "../store/storage";
import {
    isAdult,
    checkDuplicatePAN,
    evaluateApplication,
} from "../lib/rules";

// simulate API delay + random failure
const simulate = () =>
    new Promise((res, rej) => {
        setTimeout(() => {
            if (Math.random() < 0.1) return rej("API Failed");
            res();
        }, 800);
    });

// mock credit score
const getCreditScore = async () => {
    // in real world → external bureau API
    return Math.floor(650 + Math.random() * 200);
};

export const submitApplication = async (data) => {
    await simulate();

    const applications = getApplications();

    if (!isAdult(data.dob)) {
        throw new Error("User must be 18+");
    }

    if (checkDuplicatePAN(applications, data.pan)) {
        throw new Error("Application exists in last 6 months");
    }

    const creditScore = await getCreditScore();

    const result = evaluateApplication({
        creditScore,
        income: data.income,
    });

    const app = {
        id: "APP-" + Date.now(),
        ...data,
        creditScore,
        ...result,
        createdAt: Date.now(),
    };

    addApplication(app);

    return app;
};

export const getApplicationById = async (id) => {
    await simulate();

    const apps = getApplications();
    return apps.find((a) => a.id === id);
};