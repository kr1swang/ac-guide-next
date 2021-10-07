import React from 'react'

export function pack(children = null, ...components) {
  if (!components.length) {
    return children
  }

  const [Component, ...rest] = components

  if (React.isValidElement(Component)) {
    return <Component.type {...Component.props}>{pack(children, ...rest)}</Component.type>
  }

  return <Component>{pack(children, ...rest)}</Component>
}

export function createPack(...components) {
  return function PackComponent({ children }) {
    return pack(children, ...components)
  }
}
