import { createStore } from 'redux';

function counter(state = {value: 0}, action){
    const obj = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case "IN":
        obj.value++;
        return obj;
        case "SL":
        obj.value--;
        return obj;
        default:
        return obj;
    }
}

const store = createStore(counter);

let currentValue = store.getState();



store.subscribe(() => {
    const preValue = currentValue;
    currentValue = store.getState();
    console.log("pre:", preValue, "cur:", currentValue);
})

store.dispatch({ type: 'IN'});
store.dispatch({ type: 'IN'});
store.dispatch({ type: 'SL'});