import React from 'react'

import styles from './styles.module.css'
import { IconProps } from '../../Icons/Icon'

export interface ButtonProps extends Omit<
React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
'type'
> {
	disabled?: boolean
	htmlType?: 'submit' | 'reset' | 'button'

	type?: 'default' | 'accent'
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void

	iconLeft?: React.ReactElement<IconProps>
	iconRight?: React.ReactElement<IconProps>
}

export function Button(props: ButtonProps): React.ReactElement {
	const defaultProps: ButtonProps = Object.assign({
		disabled: false,
		htmlType: 'button',
		type: 'default',
		className: '',
	}, props)

	const { iconLeft, iconRight, className, children, htmlType, type, ...otherProps } = defaultProps

	return (
		<button
			type={htmlType}
			{...otherProps}
			className={`${styles['btn' + (type !== 'default' ? '-accent' : '')]} ${className || ''}`}
		>
			{iconLeft || null}
			{children}
			{iconRight || null}
		</button>
	)
}