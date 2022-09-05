function reducer(state,action){
    //reducer는 이전상태와 동작을 받아 새로운 상태를 반환한다.
    if(state === undefined){
        return {color :'yellow'}
    }
    //규칙은 원본 상태를 수정하는게 아닌 새로운 복제 상태를 만들어 관리한다.
    //그래야만 독립적인 성격이 만들어진다.
    var newState;
    if(action.type==='CHANGE_COLOR'){
        newState = Object.assign({},state,{color:action.color});
    }
    return newState;
}
//store는 오직 단 하나만 존재하며 여기서 관리한다.
var store= Redux.createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
console.log(store.getState());

function red(){
    var state=store.getState();
    document.querySelector('#red').innerHTML= `
        <div class="container" id="component_red" style="background-color:${state.color}">
            <h1>red</h1>
            <input type="button" value="fire" onclick="
                store.dispatch({type: 'CHANGE_COLOR',color:'red'})
            ">
        </div>
    `;
}
store.subscribe(red); 
red();

function blue(){
    var state=store.getState();
    document.querySelector('#blue').innerHTML= `
        <div class="container" id="component_blue" style="background-color:${state.color}">
            <h1>blue</h1>
            <input type="button" value="fire" onclick="
                store.dispatch({type: 'CHANGE_COLOR',color:'blue'})
            ">
        </div>
    `;
}
store.subscribe(blue); 
blue();

//redux를 이용하는 큰 이유는 복잡한 어플리케이션을 만들 시 모듈를 독립적으로 만들어 관리하기 위함이다.
//만약 독립적인 아니라 유기적으로 모두 이어져 있다면 하나를 바꾸면 모두를 바꿔야 하기 때문이다.


// function green(){
//     document.querySelector('#green').innerHTML= `
//         <div class="container" id="component_green">
//             <h1>green</h1>
//             <input type="button" value="fire" onclick="
//             ">
//         </div>
//     `;
// }
// green();