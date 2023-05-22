import axios from "axios";

export const registerUser = async (name, email, password) => {
    try {
        const response = await axios.post("http://localhost:4000/register", {
            name: name,
            email: email,
            password: password,
        });
        return response.data;
    } catch (error) {
        throw Error("API: Error registering user: " + error);
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:4000/login", {
            email: email,
            password: password,
        });
        return response.data;
    } catch (error) {
        throw Error("API: Error login user: " + error);
    }
};

export const getCoursesDataBase = async () => {
    try {
        const response = await axios.get("http://localhost:4000/courses/all");
        return response.data;
    } catch (error) {
        throw Error("API: Error getting courses: " + error);
    }
};

export const getAuthorsDataBase = async () => {
    try {
        const response = await axios.get("http://localhost:4000/authors/all");
        return response.data;
    } catch (error) {
        throw Error("API: Error getting authors: " + error);
    }
};
