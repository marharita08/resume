import {Item} from "./ItemTypes";

export const items: Item[] = [
  {
    icon: <i className="fa-solid fa-location-dot"></i>,
    content: 
      <a href="https://www.google.com/maps?q=Степанівка,+Сумська+область,+Сумський+район" target="_blank" rel="noopener noreferrer">
        Stepanivka, Sumy region, Ukraine
      </a>
  },
  {
    icon: <i className="fa-solid fa-envelope"></i>,
    content: <a href="mailto:rozgon.margarita08@gmail.com" target="_blank" rel="noopener noreferrer">rozgon.margarita08@gmail.com</a>
  },
  {
    icon: <i className="fa-solid fa-phone"></i>,
    content: <a href="tel:+380990296250">+380990296250</a>
  },
  {
    icon: <i className="fa-brands fa-linkedin"></i>,
    content: <a href="https://www.linkedin.com/in/marharyta08" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  },
  {
    icon: <i className="fa-brands fa-github"></i>,
    content: <a href="https://github.com/marharita08" target="_blank" rel="noopener noreferrer">GitHub</a>
  },
  {
    icon: <i className="fa-brands fa-telegram"></i>,
    content: <a href="https://t.me/Marharyta_Rozghon" target="_blank" rel="noopener noreferrer">Telegram</a>
  }
];
