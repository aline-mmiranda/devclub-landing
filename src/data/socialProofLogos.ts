import type { ReactNode } from "react";
import {
  GraduationCap,
  Scale,
  Building2,
  Landmark,
  UtensilsCrossed,
} from "lucide-react";

export interface SocialProofLogo {
  id: string;
  name: string;
  icon: ReactNode;
  colorClass: string;
}

export const socialProofLogos: SocialProofLogo[] = [
  {
    id: "ifood",
    name: "iFood",
    icon: <UtensilsCrossed size={28} strokeWidth={1.8} />,
    colorClass: "ifood",
  },
  {
    id: "oab",
    name: "OAB",
    icon: <Scale size={28} strokeWidth={1.8} />,
    colorClass: "oab",
  },
  {
    id: "ufrj",
    name: "UFRJ",
    icon: <Landmark size={28} strokeWidth={1.8} />,
    colorClass: "ufrj",
  },
  {
    id: "usp",
    name: "USP",
    icon: <GraduationCap size={28} strokeWidth={1.8} />,
    colorClass: "usp",
  },
  {
    id: "ambev",
    name: "Ambev",
    icon: <Building2 size={28} strokeWidth={1.8} />,
    colorClass: "ambev",
  },
];