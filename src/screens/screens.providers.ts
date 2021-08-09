import { Screen } from './screens.entity';

export const screensProviders = [
  {
    provide: 'SCREENS_REPOSITORY',
    useValue: Screen,
  },
];
