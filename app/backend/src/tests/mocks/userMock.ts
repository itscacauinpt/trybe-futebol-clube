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

export const login = {
  admin: {
    email: 'admin@admin.com',
    password: 'secret_admin'
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
