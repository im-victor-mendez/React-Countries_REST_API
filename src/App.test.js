import { render, screen } from '@testing-library/react';

import App from './App';
import { apiAllCountries } from './utils/apiFunctions';

describe(
  "REST Countries API",
  () => {
    describe(
      "Header",
      () => {
        it(
          "Should show 'where in the world?'",
          () => {
            render(<App />)
            const title = screen.getByText(/where in the world?/i);
            expect(title).toBeInTheDocument();
          }
        )
      }
    )
    /*
    beforeAll(() => jest.spyOn(window, 'fetch'))

    it("Should show a list of countries",
    () => {
      window.jest.fn().mockResolvedValueOnce(
        {
          ok: true,
          json: async() => apiAllCountries()
        }
      )
    }
    )
    */
  }
)
