import '@testing-library/jest-dom'
import { fireEvent, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App.tsx'
import { myrender } from './testsetup'

test("test test test", async () => {
  myrender(<App />);

  const btn = screen.getByText("Toggle Mode");
  await fireEvent.click(btn);
  expect(btn).toHaveStyle("background: green;");
});
