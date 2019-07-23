import queryString from 'query-string'
import hooks from '..'

export const usePagination = () => {
  const { location } = hooks.useReactRouter()
  return parseInt((queryString.parse(location.search).page as string) || '1', 10)
}
