import { Box, Text, Link, Grid, GridItem } from "@chakra-ui/react";
import Header from "../components/Header";

const Home = () => {
  return (
    <Box p={3} m={3} pt={0}>
        <Header text="Bio" component="span"/>
        <Text as="b">
            Charles Daliiay
        </Text>
        <Text>
            Developer / Designer
        </Text>
        <br />
        <Text fontWeight="">@ Work</Text>
        <br />
        <Text>Charles is a freelance and full-stack developer. He has a background in everything from web design to app development, and he's always on the lookout for ways to solve problems with his work.</Text>
        <br />
        <Text>If you're looking for someone to help you make your ideas come to life, reach out.</Text>
        <br />
        <Text fontWeight="">@ Timeline</Text> 
        <br />
        <Grid templateColumns='repeat(10, 1fr)' gap={1}>
          <GridItem><Text as="span">1997</Text> ~ </GridItem>
          <GridItem colSpan={9}>
            <Text>Born in Cabuyao City Laguna, Philippines.</Text>
          </GridItem>
          <GridItem><Text as="span">2021</Text> ~ </GridItem>
          <GridItem colSpan={9}>
            <Text>Earned a Bachelor of Science degree in Information Technology at Pamantasan ng Cabuyao.</Text>
          </GridItem>
          <GridItem><Text as="span">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>~</GridItem>
          <GridItem colSpan={9}>
            <Text>Web Developer Intern at Visionaire Software Solution.</Text>
          </GridItem>
          <GridItem><Text as="span">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>~</GridItem>
          <GridItem colSpan={9}>
            <Text>Back-End developer at <Text className="link-underline" href='https://collabera.ph' as={Link} isExternal>Collabera PH</Text>.</Text>
          </GridItem>
          <GridItem><Text as="span">2022</Text> ~ </GridItem>
          <GridItem colSpan={9}>
            <Text>Full-Stack developer at <Text className="link-underline" href='https://xurpasenterprise.com/' as={Link} isExternal>Xurpas</Text>.</Text>
          </GridItem>
        </Grid>
    </Box>
  );
};

export default Home;
