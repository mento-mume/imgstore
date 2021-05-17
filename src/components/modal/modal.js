import React, { useState } from 'react';
import {
  Modal as CModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  Button,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { Formik } from 'formik';
import authApi from '../../firebase';

function Modal({ isOpen, onClose }) {
  const [loginText, setLoginText] = useState(true);
  const [loading, setLoading] = useState(false);

  const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(5, 'Password must be 5 charcters chief!')
      .required(),
  });

  const registerSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
  });

  return (
    <>
      <CModal
        isOpen={isOpen}
        onClose={() => {
          setLoginText(true);
          onClose();
        }}
      >
        <ModalOverlay />
        <ModalContent pt="5">
          <ModalCloseButton />
          <ModalHeader textAlign="center">Welcome to Imagr</ModalHeader>

          <ModalBody>
            <Tabs
              onChange={() => setLoginText(!loginText)}
              isFitted
              variant="enclosed"
            >
              <TabList mb="1em">
                <Tab>Login</Tab>
                <Tab>Register</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Formik
                    // These are the props needed to initite your formik form
                    initialValues={{ email: '', password: '' }}
                    validationSchema={loginSchema}
                    onSubmit={async (values) => {
                      setLoading(true);
                      await authApi.signInUser(values.email, values.password);
                      onClose();
                      setLoading(false);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                    }) => (
                      <form onSubmit={handleSubmit} id="login">
                        <Input
                          placeholder="Email"
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          touched={touched.email}
                        />

                        {errors.email && ( // If errors.email exists, display a Text component to show the error.email, else, dont show anything
                          <Text mt="1" color="red" fontSize="small">
                            {errors.email}
                          </Text>
                        )}
                        <Input
                          mt="5"
                          placeholder="Password"
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          touched={touched.password}
                        />
                        {errors.password && (
                          <Text mt="1" color="red" fontSize="small">
                            {errors.password}
                          </Text>
                        )}
                      </form>
                    )}
                  </Formik>
                </TabPanel>
                <TabPanel>
                  <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    validationSchema={registerSchema}
                    onSubmit={async (values) => {
                      setLoading(true);
                      await authApi.registerUser(
                        values.email,
                        values.password,
                        values.name
                      );
                      onClose();
                      setLoading(false);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                    }) => (
                      <form onSubmit={handleSubmit} id="register">
                        <Input
                          placeholder="Full Name"
                          type="name"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          touched={touched.name}
                        />
                        {errors.name && (
                          <Text mt="1" color="red" fontSize="small">
                            {errors.name}
                          </Text>
                        )}
                        <Input
                          mt="5"
                          placeholder="Email"
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          touched={touched.email}
                        />
                        {errors.email && (
                          <Text mt="1" color="red" fontSize="small">
                            {errors.email}
                          </Text>
                        )}
                        <Input
                          mt="5"
                          placeholder="Password"
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          touched={touched.password}
                        />
                        {errors.password && (
                          <Text mt="1" color="red" fontSize="small">
                            {errors.password}
                          </Text>
                        )}
                      </form>
                    )}
                  </Formik>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter justifyContent="space-between">
            <Button
              colorScheme="red"
              onClick={async () => {
                await authApi.googleLogin();
                onClose();
              }}
            >
              {loginText ? 'Login with Google' : 'Register with Google'}
            </Button>

            <Button
              isLoading={loading}
              type="submit"
              form={loginText ? 'login' : 'register'}
              colorScheme="green"
            >
              {loginText ? 'Login' : 'Register'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </CModal>
    </>
  );
}

export default Modal;
