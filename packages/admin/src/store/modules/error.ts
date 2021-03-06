import { formatDateTime } from '@/utils/date'
import { defineStore } from 'pinia'

interface ErrorState {
  errorList: any
}

export const useErrorStore = defineStore({
  id: 'error',
  state: (): ErrorState => ({
    errorList: null,
  }),
  getters: {},
  actions: {
    addError(info) {
      const item = {
        ...info,
        url: window.location.href,
        time: formatDateTime(new Date()),
      }
      this.errorList = [item, ...(this.errorList || [])]
    },
  },
})
