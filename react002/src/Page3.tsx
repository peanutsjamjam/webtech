import { useState } from 'react'
import { Link } from 'react-router'
import { Box, Button, Field, Text, VStack } from '@chakra-ui/react'
import { utilFunc0, utilFunc1 } from './util'

export function Page3() {
  const [text0, setText0] = useState("");
  const [text1, setText1] = useState("");
  const onBtn = () => {
    setText0(utilFunc0());
    setText1(utilFunc1());
  }
  const onClr = () => {
    setText0("");
    setText1("");
  }

  return (
    <>
      <h1>Page3</h1>
      <Link to="/">back</Link>
      <VStack>
        <Field.Root orientation="horizontal" width="400px">
          <Field.Label>text0</Field.Label>
          <Box bg="tomato" width="100%">
            <Text data-testid="text0">{text0}</Text>
          </Box>
        </Field.Root>

        <Field.Root orientation="horizontal">
          <Field.Label>text1</Field.Label>
          <Box bg="tomato" width="100%">
          <Text data-testid="text1">{text1}</Text>
          </Box>
        </Field.Root>

        <Button onClick={onBtn}>Btn</Button>
        <Button onClick={onClr}>Clr</Button>
      </VStack>
    </>
  )
}
