import { Flex, Heading, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import {useTripAdvisor} from "../context/TripAdvisorContext";
import CommonCard from "../components/CommonCard";
const Home = () => {
    const {continents} = useTripAdvisor();
    return (
      <Flex m={2} mt={8} flexDir="column" h="full" alignItems="center" gap={2}>
        <Flex flexDirection={'column'} mb={8} justifyContent={'center'} alignItems={'center'} gap={5}>
            <Heading as="h1" size="2xl">
              Welcom to Trip Advisor
              <ColorModeSwitcher/>
            </Heading>
            <Heading as="h2" size="lg" color="purple.400">Top continents for your next holiday</Heading>
        </Flex>
        <Flex flexWrap={'wrap'} gap={5}>
          {
            continents?.map(continent => {
              return (
                <CommonCard key={continent.id} data={continent}/>
              )
            })
          }
        </Flex>
      </Flex>
    );
  };

  export default Home;
