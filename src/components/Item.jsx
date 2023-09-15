import React from "react";
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {

  // console.log(producto);
  return (
    <>
        <Card>
          <CardBody>
            <Image
              src={producto.image}
            />
            <Stack>
              <Heading size='md'>{producto.nombre}</Heading>
              <Text>

              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
                <Link to={`/item/${producto.id}`}>
              <Button variant="solid" colorScheme="blue">
                  Detalle
              </Button>
                  </Link>
          </CardFooter>
        </Card>
    </>
  );
};

export default Item;
