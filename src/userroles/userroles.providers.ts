import { Userrole } from './userroles.entity';

export const userrolesProviders = [
  {
    provide: 'USERROLES_REPOSITORY',
    useValue: Userrole,
  },
];
