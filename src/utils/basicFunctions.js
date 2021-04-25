import moment from 'moment';
import numeral from 'numeral';

export const getDuration = (time) => {
  const seconds = moment.duration(time).asSeconds();
  const duration = moment.utc(seconds * 1000).format('mm:ss');
  return duration;
};

export const getCount = (views) => numeral(views).format('0.00a');

export const getPublishedDate = (date) => moment(date).fromNow();
