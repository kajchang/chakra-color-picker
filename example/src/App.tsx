import { Flex, ChakraProvider, theme, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { ColorPicker } from "../../";

export const App = () => {
  const [selectedColor, setSelectedColor] = useState('orange.500')

  return (
    <ChakraProvider theme={theme}>
      <Flex w="full" h="100vh">
        <Flex flex={1} justify="center" align="center" background="blue.900">
          <ColorPicker
            color={selectedColor}
            onChange={(color) => {
              setSelectedColor(color)
            }}
          />
          {/* <Button onClick={() => setSelectedColor('orange.500')}>Reset</Button> */}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};
