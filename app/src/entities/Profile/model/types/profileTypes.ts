export interface ProfileTypes {
  id?: string,
  username?: string,
  firstname?: string,
  lastname?: string,
  email?: string,
  password?: string,
  avatar?: string | File,
  country?: string,
  city?: string,
  isActive?: boolean,
}

export type ProfileKeyTypes = keyof ProfileTypes;