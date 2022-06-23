import { FC, ReactNode, useEffect, useReducer } from 'react';

import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';
import { entriesApi } from '../../apis';


export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE:EntriesState = {
  entries: []
}

interface Props {
  children? : ReactNode
}

export const EntriesProvider:FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

  const addEntry = async(description:string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description })

    dispatch({ type: '[Entry] - AddEntry', payload: data })  
  }

  const updateEntry = async({_id, description, status}:Entry) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status})
      dispatch({ type: '[Entry] - EntryUpdated', payload: data })
    } catch (error) {
      console.log({error});
    }
  }

  const refreshEntries = async() => {
    const { data } = await entriesApi.get<Entry[]>('/entries')
    dispatch({ type: '[Entry] - InitialData', payload: data })
  }

  useEffect(() => {
    refreshEntries();
  }, [])
  

  return (
    <EntriesContext.Provider value={{
      ...state,
      addEntry,
      updateEntry
    }}>
      { children }
    </EntriesContext.Provider>
  )
}