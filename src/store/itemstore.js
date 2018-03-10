import { createStore } from 'redux';
import { itemreducer } from '../reducer/itemreducer'
export const store = createStore(itemreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
