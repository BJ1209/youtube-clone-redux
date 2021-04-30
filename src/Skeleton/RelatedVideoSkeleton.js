import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const RelatedVideoSkeleton = () => {
  return (
    <SkeletonTheme color="rgb(204,204,204)" highlightColor="rgb(214,214,214)">
      <div style={{ display: 'flex' }}>
        <Skeleton width={142} height={80} />
        <div style={{ display: 'flex', flexDirection: 'column', margin: '0 0.5em' }}>
          <Skeleton width={180} height={20} style={{ marginBottom: '0.5em' }} />
          <Skeleton width={100} height={20} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default RelatedVideoSkeleton;
