import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SearchScreenSkeleton = () => {
  return (
    <SkeletonTheme color="rgb(204,204,204)" highlightColor="rgb(214,214,214)">
      <Skeleton style={{ marginTop: '1em' }} height={180} width="100%" />
    </SkeletonTheme>
  );
};

export default SearchScreenSkeleton;
