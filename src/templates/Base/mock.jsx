import linksmock from '../../components/NavLinks/mock';

import gridMock from '../../components/GridText/mock';
import { GridText } from '../../components/GridText';

export const mockBase = {
  children: (
    <>
      <GridText {...gridMock} background/>
      <GridText {...gridMock}/>
      <GridText {...gridMock} background/>
      <GridText {...gridMock}/>
    </>
  ),
  links: linksmock,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: '<p>teste de footer</p>'
}