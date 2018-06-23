import React from 'react'
import { Spin } from 'antd'
import classNames from 'classnames'

import * as styles from './index.scss'

interface IP {
    className?: string
}

function PageLoading(props: IP) {
    const classNamesTop = classNames(styles.pageLoading, props.className)
    return (
        <div className={classNamesTop}>
            <Spin className={styles.spin} />
        </div>
    )
}

export default PageLoading
