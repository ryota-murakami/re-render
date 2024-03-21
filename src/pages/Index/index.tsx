import React, { memo } from 'react'

import Box from '../../components/Box'
import logo from '../../logo.svg'

import ParentCounter from './ParentCounter'
import styles from './index.module.css'

interface Props {}

const Index: React.FC<Props> = memo(() => {
  return (
    <>
      <Box>
        <h1 className={styles.h1}>I'm REACT_APP_TEXT from .env</h1>
        <img src={logo} alt="react-logo" className="react-logo" />
      </Box>
      <Box>
        <ParentCounter />
      </Box>
    </>
  )
})
Index.displayName = 'Index'

export default Index
