import { Box, Text, Grid, GridItem, Link } from "@chakra-ui/react";
import Header from "../components/Header";

const Contact = () => {
  return (
    <Box p={3} m={3} pt={0}>
      <Header text="Contact" component="span" />
      <Text as="b">Let's Talk</Text>
      <Text>We can't solve your problem if you don't talk about it.</Text>
      <br />
      <Text >@ On the web</Text>
      <br />
      <Grid templateColumns='repeat(12, 1fr)' gap={1}>
          <GridItem colSpan={12}>
            <Text>~ <Text href='https://www.facebook.com/charles123h' as={Link} isExternal>facebook/ccd</Text></Text>
            <Text>~ <Text href='https://www.linkedin.com/in/charles-dalisay-15a429225/' as={Link} isExternal>linkedin/ccd</Text></Text>
            <Text>~ <Text href='https://github.com/charles123hh' as={Link} isExternal>github/ccd</Text></Text>
          </GridItem>
      </Grid>
      <br />
      <Text >@ Direct</Text>
      <br />
      <Grid templateColumns='repeat(12, 1fr)' gap={1}>
          <GridItem colSpan={12}>
            <Text>~ <Text as="span">0995-657-6240</Text></Text>
            <Text>~ <Text as="span">charlesdalisay004@gmail.com</Text></Text>
          </GridItem>
      </Grid>
    </Box>
  );
};

export default Contact;
