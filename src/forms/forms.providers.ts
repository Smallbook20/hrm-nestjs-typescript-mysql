import { Form } from './forms.entity';

export const formsProviders = [
  {
    provide: 'FORMS_REPOSITORY',
    useValue: Form,
  },
];
