import { UIState } from './';

type UIType =
 | { type: '[UI] - OpenSideBar' }
 | { type: '[UI] - CloseSideBar' }
 | { type: '[UI] - Set isAddingEntry', payload: boolean }
 | { type: '[UI] - Set isDragging', payload: boolean }

export const uiReducer = ( state: UIState, action:UIType ):UIState => {

  switch (action.type) {
    case '[UI] - OpenSideBar':
      return {
        ...state,
        sideMenuOpen: true
      }
    case '[UI] - CloseSideBar':
      return {
        ...state,
        sideMenuOpen: false
      }
    case '[UI] - Set isAddingEntry':
      return {
        ...state,
        isAddingEntry: action.payload
      }
    case '[UI] - Set isDragging':
      return {
        ...state,
        isDragging: action.payload
      }
    default: 
      return state;
  }
}