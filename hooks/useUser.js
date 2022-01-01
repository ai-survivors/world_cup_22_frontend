import axios from 'axios';
import useSWR from 'swr';


export const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL +'api/v1/register/';

export default function useUser() {

    const { data, error, mutate } = useSWR(apiUrl , fetchResource);

    async function fetchResource(url) {

        if (!tokens) {
            return;
        }

        try {
            const response = await axios.get(url);

            return response.data;

        } catch (error) {
            handleError(error);
        }
    }

    async function createUser(info) {
        console.log("hello",info)

        try {
            console.log(apiUrl)
            await axios.post(apiUrl, info);
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function deleteUser(id) {

        try {
            const url = apiUrl + id;
            await axios.delete(url);
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function updateUser(resource) {
     try{


     } catch (error){
         handleError(error)

     }
    }


    // helper function to handle getting Authorization headers EXACTLY right
    function handleError(error) {
        console.error(error);
        // currently just log out on error
        // but a common error will be short lived token expiring
        // STRETCH: refresh the access token when it has expired
        logout();
    }

    return {
        usersResources: data,
        error,
        userLoading: !error && !data,
        createUser,
        deleteUser,
        updateUser,
    }
}