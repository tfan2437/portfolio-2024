import {
  orbitWeb,
  orbitMobile,
  tovierWeb,
  tovierMobile,
  sonicfiWeb,
  sonicfiMobile,
} from "../assets/assets";

export const projectInfo = [
  {
    name: "MINING HOUSE",
    subTitle: "THESIS / B.ARCH",
    year: 2021,
    type: "Cornell Thesis",
    description: "// Crypto System",
    techStack: [
      "/* Rhinoceros",
      "* Photoshop",
      "* Premiere Pro",
      "* After Effects",
      "* Ethereum Mining */",
    ],
    domain: "https://www.youtube.com/watch?v=frIReieagTQ",
  },
  {
    name: "ORBIT",
    subTitle: "FULL STACK",
    year: 2024,
    type: "Independent Project",
    description: "// AI Chat App",
    techStack: [
      "/* Gemini API",
      "* React",
      "* Context API",
      "* Firebase Auth",
      "* Firestore Database */",
    ],
    domain: "https://orbit-ai-chatbot.vercel.app",
  },
  {
    name: "TOVIER",
    subTitle: "FRONTEND",
    year: 2024,
    type: "Independent Project",
    description: "// Trailer Preview",
    techStack: [
      "/* TMDB API",
      "* React",
      "* Context API",
      "* Firebase Auth",
      "* Firestore Database */",
    ],
    domain: "https://tovier-trailer.vercel.app",
  },
  {
    name: "SONICFI",
    subTitle: "FULL STACK",
    year: 2024,
    type: "Independent Project",
    description: "// Music Streaming",
    techStack: [
      "/* Spotify API",
      "* React",
      "* Context API",
      "* Firebase Auth",
      "* Firestore Database */",
    ],
    domain: "https://sonicfi.vercel.app",
  },
];

export const projectImages = [
  { web: orbitWeb, mobile: orbitMobile },
  { web: tovierWeb, mobile: tovierMobile },
  { web: sonicfiWeb, mobile: sonicfiMobile },
];

export const projectDesc = [
  [
    `Orbit AI is an advanced chatbot application that highlights my expertise in API integration, response handling, global state management, authentication, and data storage. This project demonstrates my ability to create seamless user experiences, with a focus on clean and responsive design. The app is fully compatible across both desktop and mobile devices, ensuring an optimal user experience.`,
    `The layout of Orbit is meticulously crafted, featuring a clean and intuitive interface. Elements are styled with precision, utilizing specific tags to ensure consistency and clarity. The typing animation for responses is smooth and precise, enhancing user engagement and interaction.`,
    `Access to Orbit is exclusive to registered users. There are two registration options available: users can either sign up with their email via Firebase Authentication or log in with Google OAuth, also powered by Firebase Authentication. All user information, including account details and chat history, is securely stored in Firestore.`,
    `Developed with Vite and React, the platform is elegantly styled using Tailwind CSS along with custom external CSS. It integrates the Gemini API to manage AI prompts and responses, while the Marked library ensures seamless response formatting. Firebase Authentication is employed for secure user login and registration, and Firestore is utilized to store user data and maintain chat history.`,
    `Orbit AI is a lightweight full-stack project that effectively demonstrates my capabilities in developing comprehensive web applications from front to back.`,
  ],
  [
    `Tovier is the ultimate destination for discovering the latest and most popular movie and TV show trailers. Whether you're planning your next theater visit or looking for something new to stream, Tovier provides a curated selection of trending trailers to help you make the perfect choice.`,
    `Tovier leverages the TMDB API to fetch comprehensive data on movies and TV shows. When you hover over a poster card, you'll see a brief video description and the movie's rating. Clicking on the card takes you directly to the trailer page, showcasing the latest trailer video on YouTube for the selected movie or TV show. The app also features a powerful search function, fetching results directly from the TMDB database and displaying them in a user-friendly format.`,
    `In keeping with the security standards of my other web projects, Tovier employs Firebase Authentication for email registration and Google OAuth login. This ensures that only registered users can access the app, protecting the API from malicious calls and enhancing overall security.`,
    `Built with Vite and React, featuring custom external CSS for styling, this platform leverages the TMDB API to provide movie and TV show data. Secure user login and registration are managed through Firebase Authentication. Tovier is a fully responsive web application that highlights my skills in API integration, secure authentication, and modern web design.`,
  ],
  [
    `Sonicfi is a lightweight music streaming platform, offering a preview experience similar to Spotify. It encompasses all the essential features found in popular music streaming services, including genre-based recommendations, artist and album pages, user-created playlists, and real-time lyrics display. Sonicfi leverages the Spotify API, with each track limited to a 29-second preview, adhering to Spotify's embedded audio limitations. Users can easily access the full tracks on Spotify or other music streaming platforms.`,
    `As with my other projects showcased in this portfolio, Sonicfi is exclusively available to registered users. Firebase Authentication facilitates user registration via email and sign-in with Google OAuth. Each user has a personalized playlist, easily accessible by clicking the top right corner of any track thumbnail. Users can manage their playlists, including removing tracks by clicking the trash can icon on the playlist bar. All playlist data is securely stored in Firestore.`,
    `Sonicfi offers an intuitive and responsive design, seamlessly integrating advanced features like real-time lyrics and personalized playlists, powered by the Spotify API. User access is securely managed through Firebase Authentication, with Firestore handling the storage of playlist data.`,
    `This full-stack project serves as a comprehensive demonstration of my skills in web development, showcasing my ability to build feature-rich applications that deliver an exceptional user experience.`,
  ],
];
