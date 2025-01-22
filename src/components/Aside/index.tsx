import { Box, Heading, Text } from '@chakra-ui/react';

export default function Aside() {
  return (
    <Box as="aside" width="20%" p="4">
      <Heading size="md">Aside</Heading>
      <Text>Some content for the aside.</Text>
    </Box>
  );
}
