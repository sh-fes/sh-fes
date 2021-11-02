export type TNavigationConfig = {
    to: string;
    title: string;
};
const NavigationConfig: TNavigationConfig[] = [
    { title: 'Top', to: '/' },
    { title: 'Group', to: '/group' },
    { title: 'Article', to: '/article' },
    { title: 'otkrickey-0', to: '/article/a-otkrickey-0' },
    { title: 'otkrickey-1', to: '/article/a-otkrickey-1' }
];
export default NavigationConfig;