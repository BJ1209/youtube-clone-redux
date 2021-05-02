import { useEffect } from 'react';
import { useParams } from 'react-router';
import Comments from '../Components/Comments';
import VideoHorizontal from '../Components/VideoHorizontal';
import VideoMetaData from '../Components/VideoMetaData';
import axios from '../utils/axios';
import '../css/WatchScreen.css';
import { getRelatedVideosById, getVideoDetails } from '../utils/requests';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLoading,
  selectRelatedVideos,
  selectVideo,
  setLoading,
  setRelatedVideoNextPageToken,
  setRelatedVideos,
  setRelatedVideosError,
  setVideo,
  setVideoError,
} from '../features/selectedVideoSlice';
import MetaDataSkeleton from '../Skeleton/MetaDataSkeleton';
import RelatedVideoSkeleton from '../Skeleton/RelatedVideoSkeleton';

const WatchScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const video = useSelector(selectVideo);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(getVideoDetails(id));
        dispatch(setVideo(data?.items[0]));
      } catch (error) {
        dispatch(setVideoError(error));
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(getRelatedVideosById(id));
        dispatch(setRelatedVideoNextPageToken(data?.nextPageToken));
        dispatch(setRelatedVideos(data?.items?.filter((item) => item.snippet)));
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setRelatedVideosError(error));
      }
    };
    fetchData();
  }, [id]);

  const relatedVideos = useSelector(selectRelatedVideos);

  return (
    <div className="watchscreen">
      <div className="watchscreen__left">
        <div className="watchscreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        {!loading ? <VideoMetaData video={video} /> : <MetaDataSkeleton />}
        <Comments videoId={id} commentCount={video?.statistics?.commentCount} />
      </div>
      <div className="watchscreen__right">
        {!loading
          ? relatedVideos.map((video) => (
              <VideoHorizontal
                key={video?.id?.videoId}
                videoId={video?.id?.videoId}
                video={video?.snippet}
              />
            ))
          : [...Array(10)].map((_, index) => <RelatedVideoSkeleton key={index} />)}
      </div>
    </div>
  );
};

export default WatchScreen;
