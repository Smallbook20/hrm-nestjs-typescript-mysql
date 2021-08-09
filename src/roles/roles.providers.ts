import { Role } from './roles.entity';

export const rolesProviders = [
  {
    provide: 'ROLES_REPOSITORY',
    useValue: Role,
  },
];
