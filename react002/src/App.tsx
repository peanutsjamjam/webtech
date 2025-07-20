import { Button, Input, HStack, VStack } from '@chakra-ui/react'
import { Popover } from '@chakra-ui/react'
import { Link } from 'react-router'
import { useColorMode } from '@/components/ui/color-mode'
import './App.css'


function App() {
  const { toggleColorMode, colorMode } = useColorMode()
  const toggleColorMode2 = () => {
    console.log(colorMode);
    toggleColorMode();
  }
  const I1 = () => {
    return (
      <Input className="boxi"/>
    )
  }
  return (
    <>
      <h1>Vite + React</h1>
      <Button bg={{ _dark: "green" }} onClick={toggleColorMode2}>Toggle Mode</Button>
      <div className="card">
      <VStack gap="0">
        <HStack gap="0"> <I1 /> <I1 /> <I1 />   <I1 /> <I1 /> <I1 />   <I1 /> <I1 /> <I1 /> </HStack>
        <HStack gap="0"> <I1 /> <I1 /> <I1 />   <I1 /> <I1 /> <I1 />   <I1 /> <I1 /> <I1 /> </HStack>
        <HStack gap="0"> <I1 /> <I1 /> <I1 />   <I1 /> <I1 /> <I1 />   <I1 /> <I1 /> <I1 /> </HStack>
        <HStack gap="0"> <I1 /> <I1 /> <I1 />   <I1 /> <I1 /> <I1 />   <I1 /> <I1 /> <I1 /> </HStack>
        <HStack gap="0"> <I1 /> <I1 /> <I1 />   <I1 /> <I1 /> <I1 />   <I1 /> <I1 /> <I1 /> </HStack>
        <HStack gap="0"> <I1 /> <I1 /> <I1 />   <I1 /> <I1 /> <I1 />   <I1 /> <I1 /> <I1 /> </HStack>
        <HStack gap="0"> <I1 /> <I1 /> <I1 />   <I1 /> <I1 /> <I1 />   <I1 /> <I1 /> <I1 /> </HStack>
        <HStack gap="0"> <I1 /> <I1 /> <I1 />   <I1 /> <I1 /> <I1 />   <I1 /> <I1 /> <I1 /> </HStack>
        <HStack gap="0"> <I1 /> <I1 /> <I1 />   <I1 /> <I1 /> <I1 />   <I1 /> <I1 /> <I1 /> </HStack>
      </VStack>
      </div>
      <div>
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button variant="solid" bg={{ _dark: "green" }}>Button</Button>
          </Popover.Trigger>
          <Popover.Positioner>
            <Popover.Content>
              <Popover.CloseTrigger />
              <Popover.Arrow>
                <Popover.ArrowTip />
              </Popover.Arrow>
              <Popover.Body>
                <Popover.Title />
              </Popover.Body>
            </Popover.Content>
          </Popover.Positioner>
        </Popover.Root>
      </div>
      <div>
        <Link to="/Page1">Page1</Link><br />
        <Link to="/Page2">Page2</Link><br />
        <Link to="/Page3">Page3</Link><br />
      </div>
    </>
  )
}

export default App
