import { ConnectButtonWC } from '@web3modal/core'
import React from 'react'

/**
 * Component
 */
export function ConnectButton(props: JSX.IntrinsicElements['connect-button']) {
  return <connect-button {...props} />
}

/**
 * Types
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'connect-button': Pick<ConnectButtonWC, 'label'>
    }
  }
}
