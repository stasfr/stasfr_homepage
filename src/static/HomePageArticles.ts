import type { HomePageArticle } from "@/types/HomePageArticle";

const HomePageArticles: HomePageArticle[] = [
  {
    id: 1,
    title: "About",
    text: [
      "From an early age, I have been passionate about programming, which has allowed me to build a solid foundation in this field. Starting with learning Pascal in school and university, I actively participated in informatics olympiads, which helped me develop analytical thinking and problem-solving skills.",
      "Since 2021, I have been studying Python and web development in depth. Since 2022, I have focused on working with Vue 3, which has allowed me to enhance my frontend development skills.",
      "I have experience in backend development, including implementing JWT authentication and creating REST APIs with Express. This gives me an understanding of the full web application development cycle and effective interaction between the frontend and backend.",
      "I am proficient in HTML, CSS, responsive design, and work with Vue 3, the Composition API, and Pinia. I can quickly adapt to new technologies and tools.",
    ],
    link: "/skills",
    buttonIcon: "lucide:star",
    buttonTitle: "See my stack",
  },
  {
    id: 2,
    title: "Interests",
    text: [
      "I have a passion for reading business and psychology books, exploring various perspectives and gaining insights into human behavior and decision-making.",
      "I also enjoy watching movies and studying screenwriting, fascinated by the structure, characters, and storytelling techniques that drive impactful narratives.",
      "Beyond that, I love diving deep into the meanings behind songs, albums, and films, trying to uncover the messages the creators intended.",
      "My favorite bands include Би-2, Заточка, ЛСП, and кис-кис, and I also enjoy the relaxing vibe of Lofi hip hop, which perfectly complements my reflective nature.",
    ],
    link: "/contacts",
    buttonIcon: "lucide:phone",
    buttonTitle: "Call me",
  },
];

export default HomePageArticles;
