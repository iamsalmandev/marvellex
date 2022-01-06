import { useEffect, useState } from 'react';
import { axios } from '~/services';

export const useFetchProtectedImage = (url: string) => {
    const [src, setSrc] = useState('')
    useEffect(() => {
        axios.get(url).then(res => {
            setSrc(res.data)
        }).catch(e => console.log("nftcard", e))

    }, [url]);

    return src
};

