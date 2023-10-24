import { forwardRef } from 'react';
import styles from './Search.module.css';
import cn from 'classnames';
import { InputProps } from '../Input/Input.props';

const Search = forwardRef<HTMLInputElement, InputProps>(function Input({ isValid = true, className, ...props}, ref) {
	return (
		<div className={styles['input-wrapper']}>
			<input {...props} ref={ref} className={cn(styles['input'],className, styles['input'], {
				[styles['invalid']]: isValid
			})} />
			<img className={styles['icon']} src="/search-icon.svg" alt="icon of search input" />
		</div>
	);
});

export default Search;
