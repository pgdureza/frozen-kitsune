import hooks from '..'

export const useSelectedFilter = () => {
  const { match } = hooks.useReactRouter()
  const params = match && (match.params as any)
  return (params.datefilter || 'Today') as string
}
