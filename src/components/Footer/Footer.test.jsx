import { Footer } from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

describe('<Footer />', () => {
  test('Test A - should render', () => {
    const { container } = renderTheme(
      <Footer footerHtml={'<h1>Footer</h1>'} />,
    );
    expect(screen.getByRole('heading', { name: 'Footer' })).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c3 {
        font-size: 2.4rem;
      }

      .c0 {
        text-align: center;
        border-top: 0.1rem solid #DDDDDD;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0 .c2 {
        font-size: 1.6rem;
      }

      .c1 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
        width: 100%;
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1"
          >
            <div
              class="c2 c3"
            >
              <h1>
                Footer
              </h1>
            </div>
          </div>
        </footer>
      </div>
    `);
  });
});
