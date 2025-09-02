import styles from "./Recipe.module.scss";
import recipe from "../assets/images/recette.jpeg";

function Recipe() {
	return (
		<div className={styles.recipe}>
			<div className={styles.imageContainer}>
				<img src={recipe} alt="Poulet Fondant au Chorizo" />
			</div>
			<div
				className={`${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center`}
			>
				<h3>Poulet Fondant au Chorizo</h3>
			</div>
		</div>
	);
}

export default Recipe;
