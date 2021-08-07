import { NavLinks } from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  test('Test A - should render', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  test('Test B - should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  test('Test C - should not render links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getByText(/link 1/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  test('Test D - should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
