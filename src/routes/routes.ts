export const links = [
  { to: "/", className: (nav: { isActive: any; }) => nav.isActive ? "nav-active" : "", text: "Accueil" },
  { to: "/likes", className: (nav: { isActive: any; }) => nav.isActive ? "nav-active" : "", text: "Coup de coeur" },
];