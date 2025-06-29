import { useEffect, useState } from "react";

const useGetNotes = (url, token) => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    const getNotes = async (url, token) => {
        try {
            setIsLoading(true)
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const notesData = await response.json();
            if (!response.ok) {
                if (notesData.error) {
                    throw new Error(notesData.error);
                };
                throw new Error('Get All Note fetching Fail ')
            };

            notesData && notesData?.result && setNotes(notesData.result)
        } catch (error) {
            console.error(error)
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        getNotes(url, token)
    }, [url, token])
    return { notes, isLoading, error }
};

export default useGetNotes;