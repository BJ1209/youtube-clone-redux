import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  selectLoading,
  selectSearchResults,
  setLoading,
  setSearchResults,
  setSearchResultsError,
} from '../features/searchSlice';
import { getSearchResults } from '../utils/requests';
import axios from '../utils/axios';
import '../css/SearchScreen.css';
import Channel from '../Components/Channel';
import VideoHorizontal from '../Components/VideoHorizontal';
import SearchScreenSkeleton from '../Skeleton/SearchScreenSkeleton';

const SearchScreen = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  // useEffect for fetching the searchResults
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(getSearchResults(query));
        dispatch(setSearchResults(data?.items));
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setSearchResultsError(error));
      }
    };
    fetchData();
  }, [query]);

  const searchResults = useSelector(selectSearchResults)?.map((result) => {
    if (result?.id?.kind === 'youtube#channel')
      return (
        <Channel
          channel={result?.snippet}
          key={result?.id?.channelId}
          channelId={result?.id?.channelId}
        />
      );
    if (result?.id?.kind === 'youtube#video')
      return (
        <VideoHorizontal
          key={result?.id?.videoId}
          video={result?.snippet}
          videoId={result?.id?.videoId}
          searchScreen
        />
      );
  });

  return (
    <div className="searchScreen">
      {!loading
        ? searchResults
        : [...new Array(15)].map((_, item) => <SearchScreenSkeleton key={item} />)}
    </div>
  );
};

export default SearchScreen;
