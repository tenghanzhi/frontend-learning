import axios from "axios";

export const ACTIONS = {
  FETCH_DATA: "FETCH_DATA",
  SETTINGS: "SETTINGS",
};

export const fetchData = (payload) => ({
  type: ACTIONS.FETCH_DATA,
  payload,
});

export const changeSettings = (payload) => ({
  type: ACTIONS.SETTINGS,
  payload,
})

export const actions = {
  fetchData,
  changeSettings,
};

export const getList = () => {
  return (dispatch) => {
    axios
      .get("data.json")
      .then((response)=>{
        const data = response.data;
        dispatch(fetchData(data))
      })
    .catch(()=>{
      alert("Error: fetching data")
    })
  }
}

const initialState = {
  myList: [],
  sortBy: "ID"
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA:
      return {
        ...state,
        myList: action.payload.cases,
      };
    case ACTIONS.SETTINGS:
      const list = state.myList.slice(0);
      if(action.payload==="CREATED_AT") {
        return {
          ...state,
          myList: list.sort((a, b) => (a["created_at"] > b["created_at"] ? -1 : 1)),
          sortBy: action.payload,
        };
      };
      if(action.payload==="ID") {
        return {
          ...state,
          myList: list.sort((a, b) => (a.id > b.id ? 1 : -1)),
          sortBy: action.payload,
        };
      };
      break;
    default:
      return state;
  }
};

export default reducer;
