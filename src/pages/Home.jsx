import { Flex, Heading } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";


const Home = () => {

    return (
      <Flex m={2} flexDir="column" h="full" alignItems="center" gap={2}>
       <Flex><Heading>TRIP ADVISOR </Heading>
        <ColorModeSwitcher/></Flex>

      </Flex>
    );
  };

  export default Home;
