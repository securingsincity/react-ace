import { HamburgerIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Flex,
  Box,
  Heading,
  Link as ChakraLink,
  LinkOverlay,
  IconButton,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  UnorderedList,
  ListItem,
  DrawerFooter
} from "@chakra-ui/react";
import * as React from "react";

import { DiGithubBadge } from "react-icons/di";
import Link from "next/link";
export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Flex justifyContent="space-around" paddingTop={2}>
        <Box p="2">
          <Heading size="md">React Ace</Heading>
        </Box>
        <Box>
          <Link href="https://github.com/securingsincity/react-ace">
            <IconButton
              aria-label="github"
              icon={<Icon boxSize={8} as={DiGithubBadge} />}
              variant="ghost"
              size="lg"
              mr="4"
            />
          </Link>

          <IconButton
            ref={btnRef}
            aria-label="menu"
            variant="ghost"
            onClick={onOpen}
            size="lg"
            icon={<HamburgerIcon />}
          />
        </Box>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>React Ace</DrawerHeader>

            <DrawerBody>
              <UnorderedList spacing={3} listStyleType="none">
                <ListItem>
                  <ChakraLink as={Link} href="/home">
                    Main Editor
                  </ChakraLink>
                </ListItem>
                <ListItem>
                  <ChakraLink as={Link} href="/diff">
                    Diff Editor
                  </ChakraLink>
                </ListItem>
                <ListItem>
                  <ChakraLink as={Link} href="/split">
                    Split Editor
                  </ChakraLink>
                </ListItem>
              </UnorderedList>
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
