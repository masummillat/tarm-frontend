// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
} from './';

export default {
  path: 'news',
  name: 'News',
  childRoutes: [
    {
      path: 'default-page',
      name: 'Default page',
      component: DefaultPage,
      isIndex: true,
    },
    {
      path: ':id',
      name:'News',
      component:DefaultPage
    }
  ],
};
