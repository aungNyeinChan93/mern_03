import axios from 'axios';

const test_fetch = async () => {
    try {
        const response = await fetch(`http://localhost:4000/api/v1/notess`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVlNWYzYzU1Mjk1ZTViZjI4NTZjNmYiLCJpYXQiOjE3NTEyNTAzOTB9.cjau2QI7gB_B4EL3a_Q3KGB_22YyrIZtq5NZjh7zBpU`
            }
        });
        console.log(response.statusText);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('404 error')
            }
        }
    } catch (error) {
        console.log(error.message);
    }
};

await test_fetch();


const testAxios = async () => {
    try {
        const response = await axios.get(`http://localhost:4000/api/v1/notess`, { // s del
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVlNWYzYzU1Mjk1ZTViZjI4NTZjNmYiLCJpYXQiOjE3NTEyNTAzOTB9.cjau2QI7gB_B4EL3a_Q3KGB_22YyrIZtq5NZjh7zBpU`
            }
        });
        console.log(response.status);
        console.log(response.statusText);
    } catch (error) {
        // console.error(error)
        console.error(error.message)
        console.error(error.response.status) // 404
    }
};
await testAxios();



