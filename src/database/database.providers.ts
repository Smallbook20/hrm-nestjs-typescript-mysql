import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/users.entity';
import { Account } from '../accounts/accounts.entity';
import { Userrole } from '../userroles/userroles.entity';
import { Screen } from '../screens/screens.entity';
import { Role } from '../roles/roles.entity';
import { Rolepermission } from '../rolepermissions/rolepermissions.entity';
import { Form } from '../forms/forms.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Dankir_20',
        database: 'HRM_project',
        logging: false,
      });
      sequelize.addModels([
        User,
        Account,
        Userrole,
        Screen,
        Role,
        Rolepermission,
        Form,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
