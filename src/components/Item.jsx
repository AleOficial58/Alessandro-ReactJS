import React, {useState} from "react";
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
import logo from '../assets/Foto1.jpeg';

const Item = ({ producto }) => {
  const [fotos, setFotos] = useState()

  React.useEffect(() => {
    let img = <img src={producto.Imagen} />
    setFotos(img)
  }, [])


  // console.log(producto);
  return (
    <>
      <Card>
        <CardBody>
        <img src={producto.Imagen} width="80" height="55" />
        {/* <img src={require(producto.Imagen).default} /> */}
          {/* <img src={logo} /> */}
          {/* <Image
            src={producto.Imagen}
          /> */}
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
