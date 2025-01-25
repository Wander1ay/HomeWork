import { UserDescription } from '../user-description';

export const MOCK_USERS: UserDescription[] = [
  {
    id: 1,
    name: 'Александр',
    lastName: 'Махоун',
    prisoner: false,
    description: 'Агент ФБР, занимавшийся розыском фокс-риверской восьмёрки.',
    img: './assets/users/Alex.jpg',
  },
  {
    id: 2,
    name: 'Майкл',
    lastName: 'Скофилд',
    prisoner: true,
    description:
      'Младший брат Линкольна Барроуза, гениальный инженер, севший в тюрьму, чтобы спасти брата от смертной казни.',
    img: './assets/users/Michael.jpg',
  },
  {
    id: 3,
    name: 'Линкольн',
    lastName: 'Барроуз',
    prisoner: true,
    description:
      'Старший брат Майкла Скофилда, приговорённый к смертной казни за убийство, которого не совершал.',
    img: './assets/users/Lincoln.jpg',
  },
  {
    id: 4,
    name: 'Теодор',
    lastName: 'Бэгвелл',
    prisoner: true,
    description:
      'Заключённый тюрьмы Фокс-Ривер, один из членов фокс-риверской восьмёрки.',
    img: './assets/users/Theodore.jpg',
  },
  {
    id: 5,
    name: 'Брэд',
    lastName: 'Беллик',
    prisoner: false,
    description: 'Начальник охраны тюрьмы «Фокс Ривер».',
    img: './assets/users/Brad.jpeg',
  },
  {
    id: 6,
    name: 'Сара',
    lastName: 'Танкреди',
    prisoner: false,
    description: 'Врач тюрьмы «Фокс-Ривер».',
    img: '/assets/users/Sara.jpg',
  },
  {
    id: 7,
    name: 'Фернандо',
    lastName: 'Сукре',
    prisoner: true,
    description:
      'Заключённый тюрьмы «Фокс-Ривер», сокамерник и друг Майкла Скофилда. Один из членов «фокс-риверской восьмёрки».',
    img: '/assets/users/Sucre.jpg',
  },

  {
    id: 8,
    name: 'Пол',
    lastName: 'Келлерман',
    prisoner: false,
    description: 'Специальный агент службы охраны президента.',
    img: '/assets/users/Kellerman.jpg',
  },
];
