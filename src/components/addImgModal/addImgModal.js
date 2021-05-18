import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';

import galleryApi from '../../firebase';

function AddImgModal({ isOpen, onClose }) {
  const toast = useToast();

  const [file, setFile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');

  const handleUpload = async () => {
    if (file.length < 1)
      return toast({
        title: 'Gallery Error',
        description: 'Please add title and image',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });

    try {
      setLoading(true);
      const user = await galleryApi.getCurrentUser();

      const images = await galleryApi.uploadImgs(file);
      await galleryApi.uploadGallery({
        user_id: user.uid,
        title,
        images,
        user_name: user.displayName,
      });
      setLoading(false);
      onClose();
      toast({
        title: 'Gallery',
        description: 'Gallery Added Successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    } catch (error) {
      setLoading(false);
      toast({
        title: 'Gallery Error',
        description: 'Error adding gallery.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add your collection</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Images</FormLabel>
              <Input
                placeholder="Images"
                type="file"
                multiple
                onChange={(e) => setFile(e.target.files)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              isLoading={loading}
              onClick={handleUpload}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddImgModal;
