import'jsdom-global/register';
import React from 'react';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import initialState from '../initialState';
import reducer from '../reducers';

const store =  createStore(reducer, initialState);
const history = createBrowserHistory();
const ProviderMock = props => (
    <BrowserRouter history={history}>
    {props.children}
    </BrowserRouter>
);

export default ProviderMock;
// const ProviderMock = (props) => {
//     return (
//       <Provider store={store}>
//         <Router history={history}>{props.children}</Router>
//       </Provider>
//     );
// };

// const ProviderMock = props => (
//     <Provider store={store}>
//         ReactDOM.render(
//         <Router history={history}>
//             {props.children}
//         </Router>
//         );
//     </Provider>
// );
