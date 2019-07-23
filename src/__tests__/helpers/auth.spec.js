import { isAuthenticated } from '../../helpers/Auth';

describe('Auth helper', () => {
  it('isAuthenticated() Should return if user is authenticted', () => {
    return expect(isAuthenticated()).toBe(true);
  });
});
