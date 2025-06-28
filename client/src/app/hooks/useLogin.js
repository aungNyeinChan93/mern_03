import { useState } from "react";


const useLogin = () => {


    const [error, setError] = useState();
    const [isLoading, setLoading] = useState(false);

    const login = async (url, payload) => {
        try {
            setLoading(true);
            const response = await fetch(`${url}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (!response.ok) {
                if (data?.error) {
                    throw new Error(data?.error)
                };
                throw new Error('Login Fail')
            };
            return data;
        } catch (error) {
            console.error(error)
            setError(error.message)
        } finally {
            setLoading(false)
        }

    };

    return { login, error, isLoading }
};

export default useLogin;