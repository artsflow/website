export const initialStore = {
  order: {
    date: '',
    time: '',
    tickets: 1,
    firstName: '',
    lastName: '',
    email: '',
  },
}

export const update = (state: any, payload: any) => ({
  ...state,
  ...payload,
})

export const resetStore = () => initialStore
