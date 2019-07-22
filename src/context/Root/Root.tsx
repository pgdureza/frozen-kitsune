import React from 'react'

interface IRootContextProp {
  sort: string[]
  filters: string[]
  children?: React.ReactNode
}

export const RootContext = React.createContext({ filters: [], sort: [] } as IRootContextProp)

export const RootProvider = ({ children, ...props }: IRootContextProp) => {
  return <RootContext.Provider value={props}>{children}</RootContext.Provider>
}

export const useRootContext = () => React.useContext(RootContext)
