import { FC, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer } from './';


export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE:UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false
}

interface Props {
 children? : ReactNode
}

export const UIProvider:FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer( uiReducer, UI_INITIAL_STATE )

  const openSideMenu = () => { dispatch({ type: '[UI] - OpenSideBar'}) }

  const closeSideMenu = () => { dispatch({ type: '[UI] - CloseSideBar'}) }

  const setIsAddingEntry = (isAdding:boolean) => { dispatch({ type: '[UI] - Set isAddingEntry', payload: isAdding }) }

  const setIsDragging = (isDragging:boolean) => { dispatch({ type: '[UI] - Set isDragging', payload: isDragging }) }

  return (
    <UIContext.Provider 
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        setIsDragging
      }}
    >
      { children }
    </UIContext.Provider>
  )
}