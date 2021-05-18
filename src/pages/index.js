import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { Layout } from '../components/layout';
import { Hero } from '../components/hero';
import { ImgCard } from '../components/imgCard';
import { Flex, Spacer, Text } from '@chakra-ui/react';

import galleryApi from '../firebase';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [galleries, setGalleries] = useState([]);
  const [user, setUser] = useState('');

  const loadData = async () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    const galleries = await galleryApi.getGalleries();
    setGalleries(galleries);
  };

  // useEffect is called to run functions when the component mounts
  useEffect(() => {
    loadData();
  }, [isLoggedIn]);
  return (
    <Layout isLoggedIn={isLoggedIn}>
      <Hero isLoggedIn={isLoggedIn} />
      <Text
        fontSize={{ base: '26px', md: '30px', lg: '30px' }} // Implemeting responsive design in chakra ui
        fontWeight="bold"
        mb={{ base: '30', md: '50', lg: '50' }}
      >
        Discover
      </Text>
      <Flex wrap="wrap" height="100%">
        {galleries.map((g) => (
          <>
            <ImgCard
              key={g.id}
              title={g.title}
              images={g.images}
              user={g.user_name}
            />
            <Spacer />
          </>
        ))}
      </Flex>
    </Layout>
  );
}
