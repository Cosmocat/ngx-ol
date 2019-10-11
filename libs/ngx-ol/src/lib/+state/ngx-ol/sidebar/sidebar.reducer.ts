import * as SidebarActions from './sidebar.actions';
import { createReducer, on } from '@ngrx/store';

export interface State {
  hasSidebar: boolean;
  opened: boolean;
}

const initialState: State = {
  hasSidebar: true,
  opened: false,
};


export const sidebarReducer = createReducer(
  initialState,
  on(SidebarActions.toggleSidebar, (state) => ({ ...state,opened: !state.opened})),
  on(SidebarActions.closeSidebar, (state) => ({ ...state, opened: false}))
);

export const getSidebarState = (state: State) => state.opened;
