import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Grid,
  GridItem,
  Center,
  CardHeader,
  Container,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {

  return (
    <>
      <Card mt="4">
        <CardBody>
          <Container maxW='sm' centerContent>
            <img src={producto.imagen} width="360" height="85" />
          </Container>
          <Stack>
            <Container maxW='sm'>
              <Box pt="4" >
                <Heading size='md'>{producto.nombre}</Heading>
              </Box>
              <Box pt="4" h="62px">
                <Text>
                  {producto.descripcion}
                </Text>
                <Text>
                  $ {producto.precio}
                </Text>
              </Box>
            </Container>
          </Stack>
        </CardBody>
        <CardFooter>
          <Container maxW='sm'>
            <Link to={`/item/${producto.id}`}>
              <Button variant="solid" colorScheme="blue">
                Detalle
              </Button>
            </Link>
          </Container>
        </CardFooter>
      </Card>
    </>
  );
};

export default Item;
