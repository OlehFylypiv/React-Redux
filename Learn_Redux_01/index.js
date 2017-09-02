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
    }

    get state() {
        return this._state;
    }

    update(action) {
        this._state = this._updateState(this._state, action);
    }
}

const store = new Store(updateState, 0);

const incrementAction = { type: 'INCREMENT', amount: 10 };
const decrementAction = { type: 'DECREMENT', amount: 5 };

store.update(incrementAction);
console.log(store.state); // 10

store.update(decrementAction);
console.log(store.state); // 5

store.update({});
console.log(store.state); // 5