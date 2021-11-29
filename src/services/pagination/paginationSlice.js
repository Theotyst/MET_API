import { createSlice } from '@reduxjs/toolkit';
import { fetchFishes } from '../fishes/fishesSlice';

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    numberOfItems: 0,
    itemsPerPage : 10,
    pageCount: 0,
    currentPage: null,
    currentIndexes: []
  },
  reducers: {
    computeCurrentIndexes(state) {
        state.currentIndexes = [...Array(state.itemsPerPage).keys()]
            .map( index => {
                return index + (state.currentPage - 1)*state.itemsPerPage
            })
            .filter(index => index < state.numberOfItems)
    },
    computePageCount(state) {
        state.pageCount = Math.ceil(state.numberOfItems / state.itemsPerPage)
    },
    updateNumberOfItems(state, action) {
        state.numberOfItems = action.payload
        paginationSlice.caseReducers.computePageCount(state)
        if (!state.currentPage) {
            state.currentPage = 1
        } else if (state.currentPage > state.pageCount) {
            state.currentPage = state.pageCount
        }
        paginationSlice.caseReducers.computeCurrentIndexes(state)
    },
    updateItemsPerPage(state, action) {
        state.itemsPerPage = action.payload
        paginationSlice.caseReducers.computePageCount(state)
        state.currentPage = 1
        paginationSlice.caseReducers.computeCurrentIndexes(state)
    },
    updateCurrentPage(state, action) {
        state.currentPage = action.payload
        paginationSlice.caseReducers.computeCurrentIndexes(state)
    }
  },
  extraReducers(builder) {
      builder
        .addCase(fetchFishes.fulfilled, (state, action) => {
            let newAction = action
            newAction.payload = action.payload.length
            paginationSlice.caseReducers.updateNumberOfItems(state, newAction)
        })
    }
})
export const {updateNumberOfItems, updateItemsPerPage, updateCurrentPage, computeCurrentIndexes, computePageCount} = paginationSlice.actions
export default paginationSlice.reducer