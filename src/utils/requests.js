export const getMostPopularVideos = (pageToken = '') =>
  `/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=20&pageToken=${pageToken}`;

export const getChannelDetails = (channelId) =>
  `/channels?part=snippet%2Cstatistics&id=${channelId}`;

export const getVideoDetails = (videoId) =>
  `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`;

export const getVideosByCategory = (category) =>
  `/search?part=snippet&maxResults=20&q=${category}&type=video`;
