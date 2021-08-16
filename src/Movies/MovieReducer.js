


export const movieReducer = (state, action) => { 
   switch (action.type) { 
      case 'ADD': 
         return state.concat(action.payload); 
      case 'DELETE': 
         let newState = state?.filter(data => data.id !== action.payload); 
         return newState; 
      default: 
         return state; 
   } 
} 


