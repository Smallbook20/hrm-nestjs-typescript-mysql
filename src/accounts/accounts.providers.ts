import { Account } from './accounts.entity';

export const accountsProviders = [
  {
    provide: 'ACCOUNTS_REPOSITORY',
    useValue: Account,
  },
];
