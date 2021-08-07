import { GridTwoColumn } from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridTwoColumn />', () => {
  test('Test A - should render', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
