import axios from 'axios';
import useSWR from 'swr';


export const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL +'api/v1/feedbacks/';
import { useAuth } from '../contexts/auth'



export default function useFeedback() {

    const {tokens , logout } = useAuth()
    const { data, error, mutate } = useSWR([apiUrl, tokens], fetchMatches);

    async function fetchMatches(url) {

        if (!tokens) {
            return;
        }

        try {
            const response = await axios.get(url, config());

            return response.data;

        } catch (error) {
            handleError(error);
        }
    }

    async function createFeedback(info) {
        console.log(info)

        try {
            await axios.post(apiUrl, info, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function deleteFeedback(id) {

        try {
            const url = apiUrl + id;
            await axios.delete(url, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function updateFeedback( ) {


      
    }


    // helper function to handle getting Authorization headers EXACTLY right
    function config() {

        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        }
    }

    function handleError(error) {
        console.error(error);
        // currently just log out on error
        // but a common error will be short lived token expiring
        // STRETCH: refresh the access token when it has expired
        logout();
    }

    return {
        FeadbackResource: data,
        error,
        leadbackLoading: tokens && !error && !data,
        createFeedback,
        deleteFeedback,
        updateFeedback,
    }
}