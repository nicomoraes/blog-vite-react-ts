import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useTheme } from 'styled-components';

export const FilterBarSkeleton = () => {
  const {
    COLORS: { PRIMARY_GREY_200, PRIMARY_GREY_300, PRIMARY_BLACK_500 },
  } = useTheme();

  const borderStyle = {
    border: `2px solid ${PRIMARY_BLACK_500}`,
  };

  return (
    <SkeletonTheme baseColor={PRIMARY_GREY_200} highlightColor={PRIMARY_GREY_300}>
      <Skeleton width={90} height={40} style={borderStyle} />
      <Skeleton width={90} height={40} style={borderStyle} />
    </SkeletonTheme>
  );
};
