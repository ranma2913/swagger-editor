import { initialState } from './reducers.js';

// eslint-disable-next-line import/prefer-default-export
export const selectContent = (state) => state.get('content', initialState.content);

export const selectId = (state) => state.get('id', initialState.id);

export const selectEditor = () => (system) => {
  const id = system.editorSelectors.selectId();
  return document.getElementById(id);
};
