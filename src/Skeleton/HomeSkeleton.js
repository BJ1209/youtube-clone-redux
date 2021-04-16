import Skeleton from 'react-loading-skeleton';

const HomeSkeleton = () => {
  return (
    <div>
      <Skeleton width={296} height={180} />
      <div style={{ display: 'flex', marginTop: '0.5em' }}>
        <Skeleton circle height={30} width={30} />
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '0.5em' }}>
          <Skeleton height={15} width={235} />
          <Skeleton height={15} width={175} />
        </div>
      </div>
    </div>
  );
};

export default HomeSkeleton;
