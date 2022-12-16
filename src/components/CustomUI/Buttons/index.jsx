import styles from './Buttons.module.css'

export const CustomButton = ({type, text, link, inStyle}) => {
  if (inStyle === 'btn') {
    return (
      <button className={`${styles.button} ${styles.buttonBtn}`} type={type}>
        <span>{text}</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    )
  } else if (inStyle === 'link') {
    return (
      <a href={link} className={`${styles.button} ${styles.buttonLink}`} target="_blank" rel="noreferrer">
        <span>{text}</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </a>
    )
  }
  return (
    <button>
      {text}
    </button>
  )

}

