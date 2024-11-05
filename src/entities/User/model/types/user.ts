export interface User {
  id: string;
  username: string;
}

export interface IUserSchema {
  authData?: User;
  _inited?: boolean;
}
