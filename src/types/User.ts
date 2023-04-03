export interface User {
  name: string;
  email: string;
  profile: string;
  provider: 'firebase' | 'google'
}