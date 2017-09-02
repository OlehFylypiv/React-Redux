function updateState(state, action) {
    
    if (action.type === 'INCREMENT') {
        return state + action.amount;
    }
    else if (action.type == 'DECREMENT') {
        return state - action.amount;
    }
    else {
        return state;
    }
}

class Store {
    
    constructor(updateState, state) {
        this._updateState = updateState;
        this._state = state;
        this._callbacks = [];
    }

    get state() {
        return this._state;
    }

    update(action) {
        this._state = this._updateState(this._state, action);
        this._callbacks.forEach(callback => callback());
    }

    subscribe(callback) {
    	this._callbacks.push(callback);
    	return () => this._callbacks = this._callbacks.filter(cb => cb !== callback);
    }
}

const store = new Store(updateState, 0);

const incrementAction = { type: 'INCREMENT', amount: 10 };
const decrementAction = { type: 'DECREMENT', amount: 5 };

const unsubscribe = store.subscribe(() => console.log('State was changed 1 : ', store.state));

store.subscribe(() => console.log('State was changed 2 : ', store.state));

store.update(incrementAction);
unsubscribe();

store.update(decrementAction);

store.update({});