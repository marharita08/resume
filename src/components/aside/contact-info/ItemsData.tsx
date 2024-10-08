import {Item} from "./ItemTypes";

export const items: Item[] = [
  {
    icon: <i className="fa-solid fa-location-dot"></i>,
    content: 
      <a href="https://www.google.com/maps?q=Степанівка,+Сумська+область,+Сумський+район" target="_blank">
        Stepanivka, Sumy region, Ukraine
      </a>
  },
  {
    icon: <i className="fa-solid fa-envelope"></i>,
    content: <a href="mailto:rozgon.margarita08@gmail.com" target="_blank">rozgon.margarita08@gmail.com</a>
  },
  {
    icon: <i className="fa-solid fa-phone"></i>,
    content: <a href="tel:+380990296250">+380990296250</a>
  },
];
