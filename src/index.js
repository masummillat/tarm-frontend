// Summary:
//   This is the entry of the application, works together with index.html.

import 'babel-polyfill';
import React from 'react';
import {AppContainer} from 'react-hot-loader';
import {render} from 'react-dom';
import configStore from './common/configStore';
import routeConfig from './common/routeConfig';
import Root from './Root';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const store = configStore();

function renderApp(app) {
    render(
        <MuiThemeProvider>
            <AppContainer>
                {app}
            </AppContainer>
        </MuiThemeProvider>,
        document.getElementById('react-root')
    );
}

renderApp(<Root store={store} routeConfig={routeConfig}/>);

// Hot Module Replacement API
/* istanbul ignore if  */
if (module.hot) {
    module.hot.accept('./common/routeConfig', () => {
        const nextRouteConfig = require('./common/routeConfig').default; // eslint-disable-line
        renderApp(<Root store={store} routeConfig={nextRouteConfig}/>);
    });
}
