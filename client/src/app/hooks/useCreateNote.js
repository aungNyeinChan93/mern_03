import { useState } from "react";


const useCreateNote = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createNote = async (url, payload, token) => {

        try {
            setLoading(true)
            const response = await fetch(`${url}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });
            const createData = await response.json();
            console.log(createData);
            if (!response.ok) {
                if (createData.errors) {
                    throw new Error(createData.errors[0]?.msg)
                }
                throw new Error('note create Fail!')
            }
            if (createData?.success) {
                return createData
            };
        } catch (error) {
            console.error(error);
            setError(error.message)
        } finally {
            setLoading(false)
        }

    };

    return { createNote, error, isLoading }
};


export default useCreateNote;