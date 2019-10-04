import * as SidebarActions from './sidebar.actions';
import { createReducer, on } from '@ngrx/store';

export interface State {
  hasSidebar: boolean;
  opened: boolean;
  // collapsible: boolean;
  // title: string;
  // mode: string;
  // selectedModule: string;
}

const initialState: State = {
  hasSidebar: true,
  // collapsible: true,
  opened: false,
  // title: null,
  // mode: 'side',
  // selectedModule: null
};


export const sidebarReducer = createReducer(
  initialState,
  on(SidebarActions.toggleSidebar, (state) => ({ ...state,opened: !state.opened})),
  on(SidebarActions.closeSidebar, (state) => ({ ...state, opened: false})),
  // on(SidebarActions.setHasSidebar, (state, { hasSidebar }) => {
  //   return {
  //       ...state,
  //       hasSidebar: hasSidebar
  //   };
  // }),
  // on(SidebarActions.setMode, (state, { mode }) => {
  //   return {
  //       ...state,
  //       mode: mode
  //   };
  // }),
  // on(SidebarActions.setCollapsible, (state, { collapsible }) => {
  //   return {
  //       ...state,
  //       collapsible: collapsible
  //   };
  // }),
  // on(SidebarActions.setOpened, (state, { opened }) => {
  //   return {
  //       ...state,
  //       opened: opened
  //   };
  // }),
  // on(SidebarActions.setTitle, (state, { title }) => {
  //   return {
  //       ...state,
  //       title: title
  //   };
  // }),
  // on(SidebarActions.setSelectedModule, (state, { selectedModule }) => {
  //   return {
  //       ...state,
  //       selectedModule: selectedModule
  //   };
  // }),
);

export const getSidebarState = (state: State) => state.opened;
