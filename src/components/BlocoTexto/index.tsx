import styles from "./styles.module.css";
import noImage from "../../assets/img/no-image.png";

type Props = {
    titulo: string;
    paragrafo: string;
    thumb?: string; //não é obrigatória
};

//thumb ? thumb : noImage   -> no img
//const BlocoTexto = ({}: Props) => {
const BlocoTexto = ({titulo, paragrafo, thumb}: Props) => {
    return (
        <div className={styles.blocoTexto}>
            <img className={styles.thumb} src={thumb || noImage} alt={titulo} />
            <h1 className={styles.titulo}>{titulo}</h1>
            <p className={styles.titulo}>{paragrafo}</p>
        </div>
    );
};

export default BlocoTexto;