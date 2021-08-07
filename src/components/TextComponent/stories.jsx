import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, magnam ratione! Et maxime doloremque sint culpa ab ratione minus itaque odio minima, architecto sequi porro iste esse laudantium soluta iure!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
