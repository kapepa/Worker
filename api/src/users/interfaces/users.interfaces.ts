export interface UsersInterfaces {
  id: string,
  username: string,
}

export interface UsersEntityInterfaces extends UsersInterfaces {
  password: string,
  isActive: boolean,
}