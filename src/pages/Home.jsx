import { Flex, Heading, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import {useTripAdvisor} from "../context/TripAdvisorContext";
import CommonCard from "../components/CommonCard";
const Home = () => {
    const {continents} = useTripAdvisor();
    return (
      <Flex m={2} flexDir="column" h="full" alignItems="center" gap={2}>
        <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Heading>
              Welcom to Trip Advisor
              <ColorModeSwitcher/>
            </Heading>
            <Text color="blue">Top continents for your next holiday</Text>
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
