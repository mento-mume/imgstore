import React from 'react';
import { Box, Image, Text, Flex, Center, Spacer } from '@chakra-ui/react';

function ImgCard() {
  return (
    <Box width={{ base: '100%', md: '45%', lg: '30%' }} mb="10">
      <Image src={require('../../assets/product2.png')} borderRadius="15" />
      <Flex mt="2">
        <Image
          src={require('../../assets/product3.png')}
          borderRadius="15"
          width="32%"
        />
        <Spacer />
        <Image
          src={require('../../assets/product4.png')}
          borderRadius="15"
          width="32%"
        />
        <Spacer />
        <Image
          src={require('../../assets/product5.png')}
          borderRadius="15"
          width="32%"
        />
      </Flex>

      <Text noOfLines={1} fontSize="medium" fontWeight="bold" pt="3">
        Amazing Digital Collection
      </Text>

      <Text noOfLines={1} fontSize="small" fontWeight="medium" pt="1">
        By Jimmy Falon
      </Text>
    </Box>
  );
}

export default ImgCard;
