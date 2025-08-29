class Dispatcher{
    constructor() {
        this._callbacks = [];
    }
    register(callback) {
        this._callbacks.push(callback);
        return this._callbacks.length - 1;
    }
    dispatch(payload) {
        this._callbacks.forEach(callback => callback(payload));
    }
}

class Store {
    constructor(initialState={}) {
        this.data - initialState;
        this._callbacks = [];
    }
    getState() {
        return this.data;
    }
    addChangeListener(callback) {
        this._callbacks.push(callback);
    }
    emitChange() {
        this._callbacks.forEach(callback => callback());
    }
    handleAction(payload) {
        this.data = {...this.data, ...payload};
        console.log('Store updated', this.data);
        this.emitChange();
    }
    
}

const store1 = new Store([]);
const store2 = new Store({});

const dispatcher = new Dispatcher();

dispatcher.register(store1.handleAction.bind(store1));
dispatcher.register(store2.handleAction.bind(store2));

store1.addChangeListener(() => {
    const state = store1.getState();
    console.log('Store1 Changed',state);
});

store2.addChangeListener(() => {
    const state = store2.getState();
    console.log('Store2 Changed',state);
});

dispatcher.dispatch({item: 'Mumbai'});
dispatcher.dispatch({name: 'Saurabh', age: 35});