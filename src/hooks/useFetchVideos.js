import axios from '../utils/axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPageToken, setHomeVideos, setPageToken } from '../features/videoSlice';
import { getMostPopularVideos } from '../utils/requests';

function useFetchVideos() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState('');
  const pageToken = useSelector(selectPageToken);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const res = await axios.get(getMostPopularVideos(pageToken));
        dispatch(setHomeVideos(res.data.items));
        setPage(res.data.nextPageToken);
        setLoading(false);
      } catch (error) {
        alert(error.message);
      }
    };

    fetchResults();
  }, [pageToken]);

  return { loading, page };
}

export default useFetchVideos;
