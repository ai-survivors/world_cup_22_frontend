import axios from 'axios';
import useSWR from 'swr';


export const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL +'api/v1/matches/';
import { useAuth } from '../contexts/auth'

export default function useMatch() {

    const {tokens , logout } = useAuth()



    const { data, error, mutate } = useSWR([apiUrl, tokens], fetchMatches);

    async function fetchMatches(url) {

       
        try {
            const response = await axios.get(url);

            return response.data;

        } catch (error) {
            handleError(error);
        }
    }

    async function createMatch(info) {

        try {
            await axios.post(apiUrl, info, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function deleteMatch(id) {

        try {
            const url = apiUrl + id;
            await axios.delete(url, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function updateMatch(match ,voteupdate) {
        /* console.log(match.id)
        console.log(voteupdate)

     try{
        const url = apiUrl + match.id +'/';
        console.log(url)
        await axios.patch(url,voteupdate,config())

     } catch (error){
         handleError(error)

     } */
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
console.log("s",data)
    return {
        matchesResource: data,
        error,
        loading: tokens && !error && !data,
        createMatch,
        deleteMatch,
        updateMatch,
    }
}