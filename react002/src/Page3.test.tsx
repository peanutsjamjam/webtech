import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test, vi } from 'vitest'
import { Page3 } from './Page3'
import { myrender } from './testsetup'
import * as utils from './util';

vi.mock('./util');

test("Page3 test1", async () => {
  const spy0 = vi.spyOn(utils, 'utilFunc0').mockReturnValue("return value0");
  const spy1 = vi.spyOn(utils, 'utilFunc1').mockReturnValue("return value1");

  myrender(<Page3 />);
  const user = userEvent.setup();

  const btn = screen.getByRole('button', { name: 'Btn'});
  await user.click(btn);

  const text0 = screen.getByTestId("text0");
  const text1 = screen.getByTestId("text1");

  expect(text0).toHaveTextContent(/^return value0$/);
  expect(text1).toHaveTextContent(/^return value1$/);

  spy0.mockRestore();
  spy1.mockRestore();
});


test("Page3 test2", async () => {
  const spy = vi.spyOn(utils, 'utilFunc0').mockReturnValue("Return Value0");

  myrender(<Page3 />);
  const user = userEvent.setup();

  const btn = screen.getByRole('button', { name: 'Btn'});
  await user.click(btn);

  const text0 = screen.getByTestId("text0");
  const text1 = screen.getByTestId("text1");

  expect(text0).toHaveTextContent(/^Return Value0$/);
  expect(text1).toHaveTextContent(/^return value1$/);

  spy.mockRestore();
});

test("Page3 test3", async () => {
  const spy = vi.spyOn(utils, 'utilFunc1').mockReturnValue("Return Value1");

  myrender(<Page3 />);
  const user = userEvent.setup();

  const btn = screen.getByRole('button', { name: 'Btn'});
  await user.click(btn);

  const text0 = screen.getByTestId("text0");
  const text1 = screen.getByTestId("text1");

  expect(text0).toHaveTextContent(/^return value0$/);
  expect(text1).toHaveTextContent(/^Return Value1$/);

  spy.mockRestore();
});


