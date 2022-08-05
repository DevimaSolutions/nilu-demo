export interface IUser {
  username: string;
  fullName: string;
  image: string | null;
}

export interface IAuthState {
  user: IUser;
  setNavigationDirection: 'forward' | 'backward';
}
