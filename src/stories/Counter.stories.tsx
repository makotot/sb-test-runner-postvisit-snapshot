import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { Counter } from './Counter';

const meta = {
  title: 'Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    await expect(button).toHaveTextContent('0');

    await userEvent.click(button);

    await expect(button).toHaveTextContent('2');
  }
}