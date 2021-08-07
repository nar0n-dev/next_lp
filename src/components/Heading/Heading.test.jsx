import { Heading } from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

describe('<Heading />', () => {
  test('Test A - should render', () => {
    renderTheme(<Heading>Children</Heading>);
    expect(screen.getByRole('heading', { name: 'Children' })).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  test('Test B - should render with white color', () => {
    renderTheme(<Heading colorDark={false}>Children</Heading>);
    expect(screen.getByRole('heading', { name: 'Children' })).toHaveStyle({
      color: theme.colors.white,
    });
  });

  test('Test C - should render correct heading sizes', () => {
    const { rerender } = renderTheme(
      <Heading size="small">Hello World</Heading>,
    );

    const heading = screen.getByRole('heading', { name: 'Hello World' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });
    // Font-Size: SMALL
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">Hello World</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });
    // Font-Size: MEDIUM
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">Hello World</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xlarge,
    });

    // Font-Size: LARGE
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">Hello World</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xhuge,
    });
  });

  test('Test D - should render correct font-size on smalls displays', () => {
    renderTheme(<Heading size="huge">Hello World</Heading>);
    const heading = screen.getByRole('heading', { name: 'Hello World' });

    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
  });

  test('Test E - should render with uppercase letters', () => {
    renderTheme(<Heading uppercase={true}>Hello World</Heading>);
    const heading = screen.getByRole('heading', { name: 'Hello World' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  test('Test F - should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Hello World</Heading>);
    const heading = screen.getByRole('heading', { name: 'Hello World' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });

  test('Test G - should math snapshot', () => {
    const { container } = renderTheme(<Heading as="h6">Hello World</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
