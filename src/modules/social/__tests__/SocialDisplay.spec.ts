import { render } from '@testing-library/svelte';
import SocialDisplay from '../SocialDisplay.svelte';
import SlotContainer from './SlotContainer.svelte';

describe('Test', () => {
  it('should render top slot', () => {
    const { queryByText } = render(SlotContainer, {
      topContent: 'Some text',
      Component: SocialDisplay,
    });

    expect(queryByText('Some text')).toBeInTheDocument();
  });

  it('should render bottom slot', () => {
    const { queryByText } = render(SlotContainer, {
      bottomContent: 'Another text',
      Component: SocialDisplay,
    });

    expect(queryByText('Another text')).toBeInTheDocument();
  });
});
