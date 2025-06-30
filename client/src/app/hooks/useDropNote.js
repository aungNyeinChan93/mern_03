import { useState } from "react";
import axiosClient from "../config/axiosClient"

const useDropNote = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const dropNote = async (id) => {
        try {
            setLoading(true)
            const response = await axiosClient.delete(`/api/v1/notes/${id}`);
            if (response.status === 204) {
                setLoading(false)
                return { success: true };
            }
        } catch (error) {
            console.error(error);
            if (error.response.status !== 200) {
                setError(error.message)
            }
        }
    }
    return { dropNote, isLoading, error }
};


export default useDropNote