import usePagination from '.'
import hooks from '..'

// tslint:disable-next-line

describe('useSelectedFilter', () => {
  describe('when location.search.filter is empty', () => {
    it('defaults to page 1', () => {
      jest.spyOn(hooks, 'useReactRouter').mockImplementationOnce(
        () =>
          ({
            location: {
              search: '',
            },
          } as any),
      )
      const selectedFilter = usePagination()
      expect(selectedFilter).toBe(1)
    })
    it('sets value based on search params', () => {
      jest.spyOn(hooks, 'useReactRouter').mockImplementation(
        () =>
          ({
            location: {
              search: '?page=2',
            },
          } as any),
      )
      const selectedFilter = usePagination()
      expect(selectedFilter).toBe(2)
    })
  })
})
