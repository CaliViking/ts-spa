import Dashboard from './views/Dashboard.js';
import Posts from './views/Posts.js';
import PostView from './views/PostView.js';
import Settings from './views/Settings.js';
import Highcharts from './views/Highcharts.js';

const pathToRegex = (path) =>
  new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((result) => result[1]);

  console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)));

  return Object.fromEntries(
    keys.map((key, index) => {
      return [key, values[index]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: '/', view: Dashboard },
    { path: '/posts', view: Posts },
    { path: '/posts/:id', view: PostView },
    { path: '/settings', view: Settings },
    { path: '/highcharts', view: Highcharts },
  ];

  //   Test routes for match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  console.log(location.pathname);
  //   console.log(TimeSeriesPath);

  let match = potentialMatches.find((potentialMatch) => potentialMatch.result !== null);

  console.log(match);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector('#app').innerHTML = await view.getHtml();
  view.runScript();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
