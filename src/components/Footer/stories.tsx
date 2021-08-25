import { Footer, FooterProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';
export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a target="_blank" href="#">Feito com <span class="heart">❤</span> por Natan Cardoso</a></p>`,
  },
} as Meta;

export const Template: Story<FooterProps> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
