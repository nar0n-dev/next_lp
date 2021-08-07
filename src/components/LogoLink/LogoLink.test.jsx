import { LogoLink } from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  test('Test A - should render', () => {
    renderTheme(<LogoLink link="#target" text="Hello World" />);
    expect(
      screen.getByRole('heading', { name: 'Hello World' }).firstChild,
    ).toHaveAttribute('href', '#target');
  });

  test('Test B - should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Hello World" srcImg="logo.svg" />,
    );
    expect(screen.getByAltText('Hello World')).toHaveAttribute(
      'src',
      'logo.svg',
    );
  });
  test('Test C - should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Hello World" srcImg="logo.svg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
