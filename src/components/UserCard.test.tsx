import { render, screen, waitFor } from '@testing-library/react'
import UserCard from './UserCard';

declare const global: typeof globalThis & {
    fetch: jest.Mock;
};
(global as any).fetch = jest.fn();

describe('UserCard', () => {
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
        // 1. This "awaits" the element to appear, handling the async state update internally
        const email = await screen.findByText('morrison@gmail.com');

        // 2. Now that we've waited, the assertion will pass and the 'act' warning disappears
        expect(email).toBeInTheDocument();
    });
});
