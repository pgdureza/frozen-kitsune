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
      const [selectedSort, sortOrder] = useSelectedSort()
      expect(sortOrder).toBe('desc')
      expect(selectedSort).toBe('date')
    })
    it('sets value based on search params', () => {
      jest.spyOn(hooks, 'useReactRouter').mockImplementation(
        () =>
          ({
            location: {
              search: '?sort=device',
            },
          } as any),
      )
      const [selectedSort, sortOrder] = useSelectedSort()
      expect(sortOrder).toBe('desc')
      expect(selectedSort).toBe('device')
    })
  })
})
