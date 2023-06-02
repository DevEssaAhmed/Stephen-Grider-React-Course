import { configureStore } from '@reduxjs/toolkit';

import { songsReducer, addSong, removeSong } from './slices/songsSlice';
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice';
import { reset } from './actions';

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

// console.log(store);
// console.log(songsSlice.actions);

const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch({
//   type: 'song/addSong',
//   payload: 'New Song!!',
// });

const finalState = store.getState();
// console.log(JSON.stringify(finalState));
// store.dispatch(songsSlice.actions.addSong);
export { store };
export { addSong, removeSong, addMovie, removeMovie, reset };
// export const { addSong, removeSong } = songsSlice.actions;
// export const { addMovie, removeMovie } = moviesSlice.actions;
