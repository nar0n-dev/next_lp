import { MenuLink } from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

describe('<MenuLink />', () => {
  test('Test A - should render a link', () => {
    renderTheme(<MenuLink link="https://www.google.com.br">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });
  test('Test B - should render a internal link', () => {
    renderTheme(<MenuLink link="/">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });
  test('Test C - should render a link with target a new tab', () => {
    renderTheme(
      <MenuLink link="https://www.google.com.br" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });
  test('Test D - Snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link="https://www.google.com.br" newTab={false}>
        Children
      </MenuLink>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rempx;
        padding: 2.4rem;
        color: #0A1128;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.8rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: #Dc143c;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="https://www.google.com.br"
        target="_self"
      >
        Children
      </a>
    `);
  });
});
