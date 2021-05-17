import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { Layout } from '../components/layout';
import { Hero } from '../components/hero';
import { ImgCard } from '../components/imgCard';
import { Flex, Spacer, Text } from '@chakra-ui/react';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [isLoggedIn]);
  return (
    <Layout isLoggedIn={isLoggedIn}>
      <Hero isLoggedIn={isLoggedIn} />
      <Text
        fontSize={{ base: '26px', md: '30px', lg: '30px' }}
        fontWeight="bold"
        mb={{ base: '30', md: '50', lg: '50' }}
      >
        Discover
      </Text>
      <Flex wrap="wrap" height="100%">
        {[1, 2, 3, 4, 5, 6].map((v) => (
          <>
            <ImgCard key={v} />
            <Spacer />
          </>
        ))}
      </Flex>
    </Layout>
  );
}
