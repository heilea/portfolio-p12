type Project = {
    title: string;
    description: string;
    image?: string;
    link?: string;
  };
  
  export const projects: Project[] = [
    {
      title: "Portfolio",
      description: "Mon site personnel développé avec React, TypeScript et SCSS.",
      image: "/images/art.webp",
      link: "https://tonsite.com",
    },
    {
      title: "Mini-Turo",
      description: "Plateforme de location de voitures entre particuliers avec Next.js et Supabase.",
      image: "/images/rally.avif",
      link: "https://mini-turo.vercel.app",
    },
    {
      title: "TattooSite",
      description: "Site statique pour tatoueur fait avec Astro et Strapi.",
      image: "/images/japtatt.webp",
      link: "https://tattoosite.com",
    },
  ];
  