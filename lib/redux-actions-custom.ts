import {Reducer} from 'redux-actions';

/**
 * redux-actionsのreducerの連結処理
 * @param reducers
 */
export const reduceReducers = <S>(
    reducers: Reducer<S, any>[],
  ): Reducer<S, any> => {
    // Array#reduce()で連結して一個のReducerにまとめる
    return reducers.reduce<Reducer<S, any>>(
      (previousValue, currentValue) => (state, action) =>
        currentValue(previousValue(state, action), action),
      (state, action) => state, // <- reduceに初期値を省略するTypeScript型定義がなかった
    );
  };