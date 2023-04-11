export interface User {
  id: string;
  name: string;
  email: string;
  profile: string;
  provider: 'firebase' | 'google'
}