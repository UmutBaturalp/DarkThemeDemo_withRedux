const initialState = {
  theme: 'light', // Varsayılan tema
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light', // Tema değiştir
      };
    default:
      return state;
  }
};

export default themeReducer;
