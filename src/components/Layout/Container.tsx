import type { PropsWithChildren } from 'react'
import React, { memo } from 'react'

import styles from './Container.module.css'

const Container: React.FC<PropsWithChildren> = memo(({ children, ...rest }) => {
  return (
    <main className={styles.layout} {...rest}>
      <div className={styles.container}>{children}</div>
    </main>
  )
})
Container.displayName = 'Container'

export default Container
