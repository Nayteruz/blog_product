import { FC, memo } from 'react';
import { Flex, IFlexProps } from '../Flex/Flex';

type TVStackProps = Omit<IFlexProps, 'direction'>;

export const VStack: FC<TVStackProps> = memo((props) => {
  const { align = 'stretch' } = props;
  return <Flex direction="column" {...props} align={align} />;
});
