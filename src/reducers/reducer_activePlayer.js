function ActivePlayerReducer(state=null, action) {
  switch (action.type) {
    case 'PLAYER_SELECTED':
      return action.payload;
      break;

  };

  return state;
}

export default ActivePlayerReducer;