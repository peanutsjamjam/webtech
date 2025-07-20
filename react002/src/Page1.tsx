import { useState } from 'react'
import { Link } from 'react-router'
import { Button, Field, Text, Input, VStack, HStack } from '@chakra-ui/react'
import { utilFunc0, utilFunc1 } from './util'

function Inner1() {
  const [text, setText] = useState("1");
  return (
    <>
      <Text data-testid="inner1text">{text}</Text>
      <Button onClick={() => {setText("*" + text + "*")}}>BtnInner1</Button>
    </>
  )
}
function Inner2() {
  const [text, setText] = useState("2");
  return (
    <>
      <Text data-testid="inner2text">{text}</Text>
      <Button onClick={() => {setText("*" + text + "*")}}>BtnInner2</Button>
    </>
  )
}

export function Page1() {
  const [inp, setInp] = useState("");
  const [text0, setText0] = useState("");
  const [text1, setText1] = useState("");
  const onBtn0 = () => {
    //console.log("onBtn0()");
    setText0(utilFunc0());
  }
  const onBtn1 = () => {
    //console.log("onBtn1() " + inp);
    setText1(utilFunc1());
  }
  return (
    <>
      <h1>Page1</h1>
      <Link to="/">back</Link>
      <VStack>
        <Field.Root required>
          <Field.Label>
            Name <Field.RequiredIndicator />
          </Field.Label>
          <Input value={inp} onChange={e => setInp(e.target.value)} />
          <Field.HelperText>Name field should not to be blank.</Field.HelperText>
        </Field.Root>
        <HStack>
          <Text data-testid="text0">{text0}</Text>
          <Button onClick={onBtn0}>Btn0</Button>
        </HStack>
        <HStack>
          <Text data-testid="text1">{text1}</Text>
          <Button onClick={onBtn1}>Btn1</Button>
        </HStack>
        {
          inp.includes("1") ? (
            inp.includes("2") ? (<Text>Both</Text>) : (<Inner1 />)
          ) : (
            inp.includes("2") ? (<Inner2 />) : (<Text>None</Text>)
          )
        }
      </VStack>
    </>
  )
}
