// keep business logic pure → easier to test / move to backend later

export const isAdult = (dob) => {
    const age = new Date().getFullYear() - new Date(dob).getFullYear();
    return age >= 18;
};

export const checkDuplicatePAN = (applications, pan) => {
    const now = Date.now();

    return applications.find((app) => {
        const sixMonths = 6 * 30 * 24 * 60 * 60 * 1000;
        return app.pan === pan && now - app.createdAt < sixMonths;
    });
};

export const calculateLimit = (income) => {
    if (income <= 200000) return 50000;
    if (income <= 300000) return 75000;
    if (income <= 500000) return 1000000;
    return "Subjective";
};

export const evaluateApplication = ({ creditScore, income }) => {
    if (creditScore > 800) {
        return {
            status: "APPROVED",
            limit: calculateLimit(income),
        };
    }

    return {
        status: "REJECTED",
        limit: 0,
    };
};