import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const MetaDataSkeleton = () => {
  return (
    <SkeletonTheme color="rgb(204,204,204)" highlightColor="rgb(214,214,214)">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Skeleton style={{ width: '70%', margin: '1em 0' }} />
        <Skeleton style={{ width: '40%' }} />
      </div>
    </SkeletonTheme>
  );
};

export default MetaDataSkeleton;
