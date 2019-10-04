import { NgxOlEntity } from './ngx-ol.models';
import { NgxOlState, ngxOlAdapter, initialState } from './ngx-ol.reducer';
import * as NgxOlSelectors from './ngx-ol.selectors';

describe('NgxOl Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getNgxOlId = it => it['id'];
  const createNgxOlEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as NgxOlEntity);

  let state;

  beforeEach(() => {
    state = {
      ngxOl: ngxOlAdapter.addAll(
        [
          createNgxOlEntity('PRODUCT-AAA'),
          createNgxOlEntity('PRODUCT-BBB'),
          createNgxOlEntity('PRODUCT-CCC')
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true
        }
      )
    };
  });

  describe('NgxOl Selectors', () => {
    it('getAllNgxOl() should return the list of NgxOl', () => {
      const results = NgxOlSelectors.getAllNgxOl(state);
      const selId = getNgxOlId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = NgxOlSelectors.getSelected(state);
      const selId = getNgxOlId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getNgxOlLoaded() should return the current 'loaded' status", () => {
      const result = NgxOlSelectors.getNgxOlLoaded(state);

      expect(result).toBe(true);
    });

    it("getNgxOlError() should return the current 'error' state", () => {
      const result = NgxOlSelectors.getNgxOlError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
