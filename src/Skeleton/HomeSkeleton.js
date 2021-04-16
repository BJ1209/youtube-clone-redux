import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const HomeSkeleton = () => {
  return (
    <div>
      <SkeletonTheme color="rgb(204,204,204)" highlightColor="rgb(214,214,214)">
        <Skeleton width={296} height={180} />
        <div style={{ display: 'flex', marginTop: '0.5em' }}>
          <Skeleton circle height={30} width={30} />
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '0.5em' }}>
            <Skeleton height={15} width={235} />
            <Skeleton height={15} width={175} />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default HomeSkeleton;
