import { BookText, CircleDollarSign, WandSparkles, Kanban } from "lucide-react";

type NavLink = {
  id: string;
  href: string;
  label: string;
  icon?: React.ReactNode;
  subLinks?: any;
};

const links: NavLink[] = [
  {
    id: "0",
    href: "/",
    label: "HOME",
  },
  {
    id: "1",
    href: "/about-us",
    label: "ABOUT US",
  },
  {
    id: "2",
    // href: "/services",
    href: "/services",

    label: "SERVICES",
    subLinks: [
      {
        id: "0",
        label: "HOME LOAN",
      },
      {
        id: "1",
        label: "First Home Buyer",
      },
      {
        id: "2",
        label: "Refinancing",
      },
      {
        id: "3",
        label: "Commercial Loan",
      },
      {
        id: "4",
        label: "Asset Finance",
      },
      {
        id: "5",
        label: "Personal Loan",
      },
      {
        id: "6",
        label: "Self-Managed Super Fund (SMSF) Lending",
      },
    ],
  },
  {
    id: "3",
    href: "#faq",
    label: "FAQ'S",
  },
];

export default links;
