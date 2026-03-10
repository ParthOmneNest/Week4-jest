import {render,screen,waitFor} from '@testing-library/react'
import UserCard from './UserCard';

declare const global: typeof globalThis & {
  fetch: jest.Mock;
};
 (global as any).fetch = jest.fn();

describe('UserCard',()=>{
   beforeEach(() => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue({ email: 'morrison@gmail.com' }),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

it('shows loading state initially', async () => {
    render(<UserCard userId={2} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders user name after fetch completes', async () => {
    render(<UserCard userId={2} />);
    await waitFor(() => {
      expect(screen.getByText('morrison@gmail.com')).toBeInTheDocument();
    });
  });
});
