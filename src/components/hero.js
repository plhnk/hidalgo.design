/** @jsx jsx */

import { jsx, Styled } from 'theme-ui';
import { Text } from 'theme-ui';
import Wrapper from '../components/wrapper';

export default ({ pretitle, title, subtitle }) => (
  <Wrapper
    sx={{
      height: '88vh',
      mt: '24vh',
    }}
  >
    <Text as="span">{pretitle}</Text>
    <Styled.h1 
      as="h1" 
    >
      {title}
    </Styled.h1>
    <Text as="h2">{subtitle}</Text>
  </Wrapper>
);
