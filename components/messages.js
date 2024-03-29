/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Flex, Heading, Paragraph, Box, Button } from 'theme-ui'
import Image from 'next/image'

const Messages = ({ gridArea }) => {
  return (
    <Flex
      as="section"
      sx={{
        ...gridArea,
        flexDirection: ['column', 'row'],
        backgroundColor: 'white',
        mx: -5,
        px: 5,
        pt: 5,
        pb: 6,
        width: ['initial', '160%'],
        position: 'relative',
      }}
    >
      <Box>
        <Heading
          variant="smallHeadingSecondary"
          sx={{ color: 'color_300', fontSize: 5, mb: 4 }}
        >
          Sir, you’ve got some&nbsp;messages
        </Heading>
        <Paragraph variant="paragraph.large">
          This site was a parting gift from the team at Liferay.Design.
        </Paragraph>
        <Paragraph variant="paragraph.large">
          We wrote you some farewell messages.
        </Paragraph>
        <Button
          as="a"
          href="/aufweidersein"
          sx={{ width: ['100%', 'initial'], mt: 4 }}
        >
          Read Messages
        </Button>
      </Box>
      <Box as="span" sx={{ margin: 'auto' }} />
      <Box
        sx={{
          order: [-1, 2],
          mt: [-4, -5],
          height: [100, 200],
          width: [110, 220],
          position: ['absolute', 'relative'],
          right: [4, -5],
        }}
      >
        <Image
          src="/images/stamp.png"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </Box>
    </Flex>
  )
}

export default Messages
