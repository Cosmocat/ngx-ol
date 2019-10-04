import { createAction, props } from '@ngrx/store';

export const toggleSidebar = createAction(
  '[Sidebar] Toggle Sidebar'
);

export const closeSidebar = createAction(
  '[Sidebar] Close Sidebar'
);
