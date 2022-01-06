import { axios } from '~/services';
import { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
const URL = `${process.env.REACT_APP_BACKEND_URL}`;

export interface Props {
  minCarbonOffset: string;
  maxCarbonOffset: string;
  carbonOffsetUnit: { name: string; value: string };
  location: { label: string; value: string }[];
  nanoTasks: { name: string; id: string; title: string }[];
  order: 'carbon' | 'price' | 'time';
  orderBy: { carbon: 'Descending' | 'Ascending', price: 'Descending' | 'Ascending', time: 'Descending' | 'Ascending' };
}

const getParams = (params: Props): Object => {
  const params_: any = {};

  const {
    minCarbonOffset,
    maxCarbonOffset,
    carbonOffsetUnit,
    location,
    nanoTasks,
    order,
    orderBy,
  } = params;
  if (minCarbonOffset) {
    params_.min =
      carbonOffsetUnit.value === 'g'
        ? minCarbonOffset
        : Number(minCarbonOffset) * 1000;
  }
  if (maxCarbonOffset) {
    params_.max =
      carbonOffsetUnit.value === 'g'
        ? maxCarbonOffset
        : Number(maxCarbonOffset) * 1000;
  }
  if (location?.length) {
    params_.location = location.map(({ value }) => value).join(',');
  }
  if (nanoTasks?.length) {
    params_.tasks = nanoTasks.map(({ title }) => title).join(',');
  }
  if (order) {
    if (order === 'carbon') {
      if (orderBy.carbon === 'Ascending') {
        params_.order = order + '_asc';
      } else {
        params_.order = order + '_desc';
      }
    } else if (order === 'price') {
      if (orderBy.price === 'Ascending') {
        params_.order = order + '_asc';
      } else {
        params_.order = order + '_desc';
      }
    } else if (order === 'time') {
      if (orderBy.time === 'Ascending') {
        params_.order = order + '_asc';
      } else {
        params_.order = order + '_desc';
      }
    }
  }
  return params_;
};

const URL_ = `${URL}/marketplace/certificates`;
export const useAllMarketplaceCertificates = ({
  limit = 16,
  ...rest
}: Props & { limit?: number }) => {
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState<number>(1);
  const [data, setData] = useState<any[]>([]);

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
      fetchGifs(URL_, getParams(rest));
    })();
  }, [JSON.stringify(rest), fetchGifs]);

  useEffect(() => {
    if (offset !== 1) fetchMore(`${URL_}`, offset, getParams(rest));
  }, [offset]);

  const loadMore = () => setOffset((offset) => offset + 1);

  return { loading, data, loadMore };
};
