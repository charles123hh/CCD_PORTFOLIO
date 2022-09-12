import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import Header from "../components/Header";

const ILove = () => {
  return (
    <Box p={3} m={3} pt={0}>
      <Header text={"I ❤"} component="span"/>
      <Text as="b">Maybe we can be friend!</Text>
      <br />
      <Text>I ❤ Cat, Eating, Music, Photography, Problems :), Learn new things</Text>
      <br />
      <Text >@ Hobbies</Text>
      <br />
      <Grid templateColumns='repeat(12, 1fr)' gap={1}>
          <GridItem colSpan={12}>
            <Text>Gaming ~ <Text as="span">I'm not good at it, but I play a lot of chess.</Text></Text>
            <Text>Reading ~ <Text as="span">I've read a lot of fantasy and sci-fi novels.</Text></Text>
            <Text>Cycling ~ <Text as="span">Long / Short / Trails ride G.</Text></Text>
          </GridItem>
      </Grid>
    </Box>
  );
};

export default ILove;
