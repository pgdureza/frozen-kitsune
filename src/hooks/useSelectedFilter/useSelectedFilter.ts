import queryString from 'query-string'
import hooks from '..'

export const useSelectedFilter = () => {
  const { location } = hooks.useReactRouter()
  return queryString.parse(location.search).filter || 'Today'
}
