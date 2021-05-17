import React, { useEffect, useState } from 'react';
import { Box, Text, Button, Center } from '@chakra-ui/react';
import authApi from '../../firebase';

export default function Hero({ isLoggedIn }) {
  return (
    <Box width="100%" py="20" alignItems="center">
      <Text
        fontSize={{ base: '28px', md: 'xxx-large', lg: 'xxx-large' }}
        fontWeight="bold"
        textAlign="center"
      >
        {isLoggedIn ? `Welcome Back ${name}` : 'Welcome to Imagr'}
      </Text>
      <Text
        fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
        fontWeight="medium"
        color="grey"
        textAlign="center"
        lineHeight="2"
        pt="2"
        px={{ base: '0', md: '0', lg: '250' }}
      >
        Your favorite blockchain photo platform. Upload, share, view and like
        photos from thousands of people on one blockchain.
      </Text>
      {isLoggedIn ? (
        <Center py="5" width="100%">
          <Button size="md" borderRadius="15" colorScheme="blue">
            Upload Images
          </Button>
        </Center>
      ) : (
        <Center py="5" width="100%">
          <Button size="md" borderRadius="15" colorScheme="green">
            Get Started
          </Button>
        </Center>
      )}
    </Box>
  );
}
