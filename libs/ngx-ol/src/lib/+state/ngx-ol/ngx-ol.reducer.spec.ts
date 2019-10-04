import { NgxOlEntity } from './ngx-ol.models';
import * as NgxOlActions from './ngx-ol.actions';
import { NgxOlState, initialState, reducer } from './ngx-ol.reducer';

describe('NgxOl Reducer', () => {
  const createNgxOlEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as NgxOlEntity);

  beforeEach(() => {});

  describe('valid NgxOl actions', () => {
    it('loadNgxOlSuccess should return set the list of known NgxOl', () => {
      const ngxOl = [
        createNgxOlEntity('PRODUCT-AAA'),
        createNgxOlEntity('PRODUCT-zzz')
      ];
      const action = NgxOlActions.loadNgxOlSuccess({ ngxOl });

      const result: NgxOlState = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
