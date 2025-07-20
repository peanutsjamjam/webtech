import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test, vi } from 'vitest'
import { Page1 } from './Page1'
import { myrender } from './testsetup'


test("Page1 test1", async () => {
  myrender(<Page1 />);
  expect(screen.getByRole('button', { name: 'Btn0'})).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Btn1'})).toBeInTheDocument();
});
test("Page1 test2", async () => {
  myrender(<Page1 />);
  const user = userEvent.setup();

  const input = screen.getByRole('textbox');
  await user.type(input, '1');

  const btn1 = screen.getByRole('button', { name: 'BtnInner1'});
  await user.click(btn1);

  const text = screen.getByTestId("inner1text");
  expect(text).toHaveTextContent(/^\*1\*$/);
});

const utilFunc0 = vi.hoisted(() => vi.fn(() => "return value0x"));
const utilFunc1 = vi.hoisted(() => vi.fn(() => "return value1x"));

vi.mock('./util', () => {
  return {
    utilFunc0,
    utilFunc1,
  }
})

test("Page1 test3", async () => {
  utilFunc0.mockReset();
  utilFunc1.mockReturnValue("Return Value1");

  myrender(<Page1 />);
  const user = userEvent.setup();

  const btn0 = screen.getByRole('button', {name: 'Btn0'});
  await user.click(btn0);
  const text0 = screen.getByTestId("text0");
  expect(text0).toHaveTextContent("return value0");

  const btn1 = screen.getByRole('button', {name: 'Btn1'});
  await user.click(btn1);
  const text1 = screen.getByTestId("text1");
  expect(text1).toHaveTextContent("Return Value1");

});

test("Page1 test4", async () => {

  utilFunc1.mockReset();
  utilFunc0.mockReturnValue("Return Value0");

  myrender(<Page1 />);
  const user = userEvent.setup();

  const btn0 = screen.getByRole('button', {name: 'Btn0'});
  await user.click(btn0);
  const text0 = screen.getByTestId("text0");
  expect(text0).toHaveTextContent("Return Value0");

  const btn1 = screen.getByRole('button', {name: 'Btn1'});
  await user.click(btn1);
  const text1 = screen.getByTestId("text1");
  expect(text1).toHaveTextContent("return value1");

});
