const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Readings.vue') },
      { path: 'history', component: () => import('pages/History.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') },
      { path: 'summary', component: () => import('pages/Summary.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
