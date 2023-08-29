export interface User {
  id?: number;
  lastname?: string;
  username?: string;
  firstname?: string;
  email?: string;
  password?: string;
  roles?: string;
  active?: boolean;
  authorities?: Array<any>;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
  enabled?: boolean;
}
