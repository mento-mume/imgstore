import React, { useEffect, useState } from 'react';
import { Box, Text, Flex, Spacer } from '@chakra-ui/react';
// import Image from 'next/image';
import styled from 'styled-components';

const Image = styled.img`
  border-radius: 15px;
`;

function ImgCard({ title, images, user }) {
  const arr = images.splice(1, images.length);
  return (
    <Box width={{ base: '100%', md: '45%', lg: '30%' }} mb="10">
      <Image src={images[0]} width="100%" height="80%" />

      <Flex mt="2" justifyContent="space-between">
        {arr.map((i, index) => (
          <Image src={i} width="30%" key={index} />
        ))}
      </Flex>

      <Text noOfLines={1} fontSize="medium" fontWeight="bold" pt="3">
        {title}
      </Text>

      <Text noOfLines={1} fontSize="small" fontWeight="medium" pt="1">
        By {user}
      </Text>
    </Box>
  );
}

export default ImgCard;
