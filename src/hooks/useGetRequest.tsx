import { useEffect, useState } from "react";
import { axios } from "~/services";


export const useGetRequest = (url: string) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | Error>(null);
    const [response, setResponse] = useState<any>(undefined);

    useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then((res) => {
                setLoading(false);
                setResponse(res);
            })
            .catch((e) => {
                setError(e)
                setLoading(false);
            });

    }, [url])

    return { response, loading, error }

}