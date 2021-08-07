import { Base } from '.';
import { renderTheme } from '../../styles/render-theme';
import { mockBase } from './mock';

describe('<Base />', () => {
  test('Test A - should render', () => {
    const {container} = renderTheme(<Base {...mockBase} />);
    expect(container).toMatchSnapshot();
  });
});