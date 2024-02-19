import ProfileImage from "../assets/images/image-avatar.webp";

/**
 * * Avatar Type *
 * id: string
 * profileImage: string
 * firstName: string
 * lastName: string
 */

/**
 * * Title Type *
 * link: string
 * content: string
 */

/**
 *  * Blog Preview Card Type *
 * id: string
 * badge: string
 * subtitle: string
 * title: Title
 * body: string
 * avatar: Avatar
 */

const CARDS_LIST_FAKE_CALL = [
  {
    id: "40b150bf-725d-4248-b6f7-3557e664b1b5",
    badge: "Learning",
    subtitle: "Published 21 Dec 2023",
    title: {
      link: "https://www.w3schools.com/html/html_css.asp",
      content: "HTML & CSS foundations",
    },
    body: "These languages are the backbone of every website, defining structure, content, and presentation.",
    avatar: {
      id: "367c83bf-768d-2648-b6f7-3557e284r68w",
      profileImage: ProfileImage,
      firstName: "Greg",
      lastName: "Hooper",
    },
  },
];

export const useBlogCards = () => {
  return { cards: CARDS_LIST_FAKE_CALL };
};
