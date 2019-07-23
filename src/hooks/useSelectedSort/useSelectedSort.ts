import queryString from 'query-string'
import hooks from '..'

export const useSelectedSort = () => {
  const { location } = hooks.useReactRouter()
  return [
    (queryString.parse(location.search).sort || 'date') as string,
    (queryString.parse(location.search).order || 'asc') as string,
  ]
}
