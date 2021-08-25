import { Meta, Story } from '@storybook/react/types-6-0';
import { GridTwoColumn, GridTwoColumnProps } from '.';
import mock from './mock';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<GridTwoColumnProps> = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
