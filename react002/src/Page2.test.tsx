import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test, vi } from 'vitest'
import { Page2 } from './Page2'
import { myrender } from './testsetup'

let mockUtilFunc0ReturnValue = "return value0";
let mockUtilFunc1ReturnValue = "return value1";

vi.mock('./util', () => ({
  utilFunc0: vi.fn(() => mockUtilFunc0ReturnValue),
  utilFunc1: vi.fn(() => mockUtilFunc1ReturnValue),
}));

test("Page2 test1", async () => {
  myrender(<Page2 />);
  const user = userEvent.setup();

  const btn = screen.getByRole('button', { name: 'Btn'});
  await user.click(btn);

  const text0 = screen.getByTestId("text0");
  const text1 = screen.getByTestId("text1");

  expect(text0).toHaveTextContent(/^return value0$/);
  expect(text1).toHaveTextContent(/^return value1$/);
});


test("Page2 test2", async () => {
  mockUtilFunc0ReturnValue = "Return Value0";
  mockUtilFunc1ReturnValue = "return value1";

  myrender(<Page2 />);
  const user = userEvent.setup();

  const btn = screen.getByRole('button', { name: 'Btn'});
  await user.click(btn);

  const text0 = screen.getByTestId("text0");
  const text1 = screen.getByTestId("text1");

  expect(text0).toHaveTextContent(/^Return Value0$/);
  expect(text1).toHaveTextContent(/^return value1$/);
});


test("Page2 test3", async () => {
  mockUtilFunc0ReturnValue = "return value0";
  mockUtilFunc1ReturnValue = "Return Value1";

  myrender(<Page2 />);
  const user = userEvent.setup();

  const btn = screen.getByRole('button', { name: 'Btn'});
  await user.click(btn);

  const text0 = screen.getByTestId("text0");
  const text1 = screen.getByTestId("text1");

  expect(text0).toHaveTextContent(/^return value0$/);
  expect(text1).toHaveTextContent(/^Return Value1$/);
});

