import { Rolepermission } from './rolepermissions.entity';

export const rolepermissionsProviders = [
  {
    provide: 'ROLEPERMISSIONS_REPOSITORY',
    useValue: Rolepermission,
  },
];
