import { render } from '@testing-library/react'
import AppBody from './Components/AppBody';
 
it('renders homepage unchanged', () => {
  const { container } = render(<AppBody />)
  expect(container).toMatchSnapshot()
});