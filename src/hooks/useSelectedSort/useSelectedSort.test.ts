import useSelectedSort from '.'
import hooks from '..'

// tslint:disable-next-line

describe('useSelectedSort', () => {
  describe('when location.search.filter is empty', () => {
    it('defaults to date', () => {
      jest.spyOn(hooks, 'useReactRouter').mockImplementationOnce(
        () =>
          ({
            location: {
              search: '',
            },
          } as any),
      )
      const selectedFilter = useSelectedSort()
      expect(selectedFilter).toBe('date')
    })
    it('sets value based on search params', () => {
      jest.spyOn(hooks, 'useReactRouter').mockImplementation(
        () =>
          ({
            location: {
              search: '?sort=Yesterday',
            },
          } as any),
      )
      const selectedFilter = useSelectedSort()
      expect(selectedFilter).toBe('Yesterday')
    })
  })
})
