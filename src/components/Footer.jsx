import styles from "./Footer.module.scss";

function Footer() {
	return (
		<footer
			className={`${styles.footer} d-flex flex-row align-item-center justify-content-center p-20`}
		>
			<p>Copyright © 2025 Cookchef Dyma, Inc</p>
		</footer>
	);
}

export default Footer;
