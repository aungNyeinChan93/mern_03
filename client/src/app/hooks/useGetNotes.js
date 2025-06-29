import { useEffect, useState } from "react";

const useGetNotes = (url, token) => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isRateLimit, setIsRateLimit] = useState(false);

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
                if (response.status == 429) {
                    setIsRateLimit(true)
                    throw new Error('Rate limit Full !')
                }
                if (notesData.error) {
                    throw new Error(notesData.error);
                };
                throw new Error('Get All Note fetching Fail ')
            };

            notesData && notesData?.result && setNotes(notesData.result)
            notesData && setIsRateLimit(false);
        } catch (error) {
            console.error(error)
            setError(error.message)
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getNotes(url, token)
    }, [url, token])
    return { notes, isLoading, error, isRateLimit }
};

export default useGetNotes;