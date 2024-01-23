import { Dummy } from '@/enums/dummy';
import Category from '@/interfaces/Category';

export const useDummyCategory = (): { data: Category[] } => {
  return {
    data: [
      {
        name: 'Exegesis',
      },
      {
        name: 'History',
      },
      {
        name: 'Apologetics',
      },
      {
        name: 'Theology',
      },
    ],
  };
};
