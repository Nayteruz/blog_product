import { FC, memo } from 'react';
import { Flex, IFlexProps } from '../Flex/Flex';

type THStackProps = Omit<IFlexProps, 'direction'>;

export const HStack: FC<THStackProps> = memo(props => <Flex direction="row" {...props} />);
