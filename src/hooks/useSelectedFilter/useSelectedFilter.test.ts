import useSelectedFilter from '.'
import hooks from '..'

// tslint:disable-next-line

describe('useSelectedFilter', () => {
  describe('when location.search.filter is empty', () => {
    it('defaults to Today', () => {
      jest.spyOn(hooks, 'useReactRouter').mockImplementationOnce(
        () =>
          ({
            match: {
              params: { datefilter: '' },
            },
          } as any),
      )
      const selectedFilter = useSelectedFilter()
      expect(selectedFilter).toBe('Today')
    })
    it('sets value based on search params', () => {
      jest.spyOn(hooks, 'useReactRouter').mockImplementation(
        () =>
          ({
            match: {
              params: { datefilter: 'Yesterday' },
            },
          } as any),
      )
      const selectedFilter = useSelectedFilter()
      expect(selectedFilter).toBe('Yesterday')
    })
  })
})
