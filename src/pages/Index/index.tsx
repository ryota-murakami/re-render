import React, { memo } from 'react'

import ParentCounter from './ParentCounter'

interface Props {}

const Index: React.FC<Props> = memo(() => {
  return (
    <>
      <ParentCounter />
    </>
  )
})
Index.displayName = 'Index'

export default Index
