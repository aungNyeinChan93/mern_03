import { useState } from "react";


const useGetNote = () => {
    // const [note, setNote] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getNote = async (url, token) => {
        try {
            setLoading(true);
            const response = await fetch(`${url}`, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
            });
            const noteData = await response.json();
            // console.log(noteData);
            return noteData
        } catch (error) {
            console.error(error);
            setError(error.message)
        } finally {
            setLoading(false)
        }

    }
    return { getNote, isLoading, error };
};

export default useGetNote;