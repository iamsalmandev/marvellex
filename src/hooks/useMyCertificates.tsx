import { axios } from '~/services';
import { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { useAppProvider } from "~/hooks"
const URL = `${process.env.REACT_APP_BACKEND_URL}`;

export interface UseMyCertificatesProps {
}

const getParams = (params: UseMyCertificatesProps): Object => {
    const params_: any = {};
    return params_;
};

const URL_ = `${URL}/certificates/`;
export const useMyCertificates = ({
    limit = 16,
    ...rest
}: UseMyCertificatesProps & { limit?: number }) => {
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState<number>(1);
    const [data, setData] = useState<any[]>([]);
    const { account = "" } = useAppProvider()

    const fetchGifs = useCallback(
        debounce(async (url, params) => {
            if (loading) return;
            setOffset(1);
            setLoading(true);
            await axios
                .get(`${url}`, { params: { limit, page: 1, ...params } })
                .then((res) => {
                    setData([...res?.data?.data]);
                })
                .catch((e) => console.log(e));
            setLoading(false);
        }, 500),
        []
    );

    const fetchMore = useCallback(
        debounce(async (url, page, params) => {
            if (loading) return;
            setLoading(true);
            await axios
                .get(url, { params: { limit, page, ...params } })
                .then((res) => {
                    if (Array.isArray(res?.data?.data) && res?.data?.data.length) {
                        setData((data) => [...data, ...res?.data?.data]);
                    }
                })
                .catch((e) => console.log(e));
            setLoading(false);
        }, 500),
        []
    );

    useEffect(() => {
        (() => {
            setData([]);
            fetchGifs(`${URL_}${account}`, getParams(rest));
        })();
    }, [JSON.stringify(rest), fetchGifs, account]);

    useEffect(() => {
        if (offset !== 1) fetchMore(`${URL_}${account}`, offset, getParams(rest));
    }, [offset, account]);

    const loadMore = () => setOffset((offset) => offset + 1);

    return { loading, data, loadMore };
};
