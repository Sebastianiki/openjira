import { Entry } from '../../interfaces';
import { EntriesState } from './';

type EntriesType =
 | { type: '[Entry] - AddEntry', payload: Entry }
 | { type: '[Entry] - EntryUpdated', payload: Entry }
 | { type: '[Entry] - InitialData', payload: Entry[] }

export const entriesReducer = ( state: EntriesState, action:EntriesType ):EntriesState => {

  switch (action.type) {
    case '[Entry] - AddEntry':
      return {
        ...state,
        entries: [...state.entries, action.payload]
      }
    case '[Entry] - EntryUpdated':
      return {
        ...state,
        entries: state.entries.map( entry => {
          if(entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry
        })
      }
    case '[Entry] - InitialData':
      return {
        ...state,
        entries: [ ...action.payload]
      }
    default:
      return state;
  }
}