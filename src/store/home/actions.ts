import { createAction } from 'redux-actions'

import * as types from './actionTypes'
import { clone } from '../../library/tool'
import { IHomeState, IWrapHomeState } from './type'

// 通用 action
export const setCommon = createAction(
  types.setCommon,
  (payload: Partial<IHomeState>) => payload
)

export const add = (init = 1) => (dispatch: (param: any) => Promise<any>, getState: () => IWrapHomeState) => {
  const home = getState().home
  const count = clone(home.count)

  void dispatch(
    setCommon({
      count: count + init
    })
  )
}

export const minus = () => (dispatch: (param: any) => Promise<any>, getState: () => IWrapHomeState) => {
  const home = getState().home
  const count = clone(home.count)

  void dispatch(
    setCommon({
      count: count - 1
    })
  )
}

// 异步的action
export const asyncAdd = () => (dispatch: (param: any) => Promise<any>, getState: () => IWrapHomeState) => {
  new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  }).then(init => {
    const home = getState().home
    const count = clone(home.count)
    // void dispatch(add(init))

    void dispatch(
      setCommon({
        count: count + init
      })
    )
  })
}
