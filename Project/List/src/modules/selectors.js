const getMyList = (state) => state.myList;
const getSettings = (state) => state.sortBy;

const selectors = {
  getMyList,
  getSettings,
};

export default selectors;