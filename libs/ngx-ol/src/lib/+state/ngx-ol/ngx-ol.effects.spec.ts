import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { NgxOlEffects } from './ngx-ol.effects';
import * as NgxOlActions from './ngx-ol.actions';

describe('NgxOlEffects', () => {
  let actions: Observable<any>;
  let effects: NgxOlEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        NgxOlEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.get(NgxOlEffects);
  });

  describe('loadNgxOl$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: NgxOlActions.loadNgxOl() });

      const expected = hot('-a-|', {
        a: NgxOlActions.loadNgxOlSuccess({ ngxOl: [] })
      });

      expect(effects.loadNgxOl$).toBeObservable(expected);
    });
  });
});
