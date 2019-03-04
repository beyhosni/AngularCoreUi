
export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: any;
  title?: boolean;
  children?: any;
  variant?: string;
  attributes?: object;
  divider?: boolean;
  class?: string;
}


export let navItems: NavData[] = [
  {
    name: 'Tableau de bord',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Gestion des logements'
  },
  {
    name: 'Biens',
    url: '/biens',
    icon: 'icon-home',
  },
  {
    name: 'Locataires',
    url: '/locataires',
    icon: 'icon-people'
  },
  {
    title: true,
    name: 'Gestion des utilisateurs'
  },
  {
    name: 'Utilisateurs',
    url: '/utilisateurs',
    icon: 'icon-user'
  }
];

export let navItemsUser: NavData[] = [
  {
    name: 'Tableau de bord',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Gestion des logements'
  },
  {
    name: 'Biens',
    url: '/biens',
    icon: 'icon-home',
  },
  {
    name: 'Locataires',
    url: '/locataires',
    icon: 'icon-people'
  }
];
