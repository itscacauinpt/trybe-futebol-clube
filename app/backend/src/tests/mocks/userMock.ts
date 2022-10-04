// import UserDTO from "../../interfaces/UserDTO";

import { IUser } from "../../interfaces/IUser";

// const userMock: UserDTO = {
//   username: 'Um Admin Legau',
//   role: 'admin',
//   email: 'admin',
//   password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
// }

export const adm: IUser = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
};

export const user: IUser = {
  id: 2,
  username: 'User',
  role: 'user', 
  email: 'user@user.com',
  password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
};

export const login = {
  admin: {
    email: 'admin@admin.com',
    password: 'secret_pass'
  },
  errorUser: {
    email: 'nope@email.com',
    password: '1234',
  },
  errorEmail:{
    email: 'email.email.com',
    password: '12345678',
  },
  errorPassword: {
    email: 'email.email.com',
    password: '1234',
  },
}
