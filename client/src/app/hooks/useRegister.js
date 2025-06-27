import { useState } from "react";


const useRegister = () => {

    const [error, setError] = useState();
    const [isLoading, setLoading] = useState(false);

    const register = async (url, payload = {}) => {
        try {
            setLoading(true)
            const res = await fetch(`${url}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const result = await res.json();
            if (!res.ok) {
                if (result.error) {
                    throw new Error(result.error)
                }
                throw new Error('register Fial!')
            };
            // console.log(result);
            setLoading(false)
            return result && result;
        } catch (error) {
            setError(error.message)
            console.error(error.message)
        } finally {
            setLoading(false);
        }
    };

    return { register, error, isLoading }
};

export default useRegister; 