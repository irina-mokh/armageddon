import styles from './size.module.scss'
export const Size = ({d} : {d: number}) => {
	return (
		<p className={styles.size}>
			{Math.round(d)}
			<span>м</span>
		</p>
	)
};