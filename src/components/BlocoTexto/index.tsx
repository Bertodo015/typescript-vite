import styles from "./styles.module.css";

const BlocoTexto = () => {
    return (
        <div>
            <h1 className={styles.titulo}>Um bloco de texto</h1>
            <p className={styles.titulo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus ipsa alias 
                neque ut! Ipsam molestiae ab odit fuga consectetur esse neque quisquam sit? Ratione laboriosam 
                omnis fugiat sit delectus.
            </p>
        </div>
    );
};

export default BlocoTexto;