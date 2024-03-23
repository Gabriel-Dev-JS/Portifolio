import styles from './button.module.css'


interface ButtonProps {
    nome: string; 
    handleButton: () => void;
    // buttonStyles?: React.HTMLAttributes<HTMLButtonElement>;
    buttonStyles?: object;
}


export const Button = ({handleButton,nome, buttonStyles }:ButtonProps) => {
    return (
        <div>
            <button className={styles.Button}  
            style={buttonStyles} 
            onClick={handleButton}>{nome}</button>
        </div>
    )
} 