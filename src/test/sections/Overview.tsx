// interface Requirements {
//   download: string;
//   languages: string[];
// }

import { AvatarProps } from "../components/Avatar.js";

export interface OverviewProps {
  children: [string, AvatarProps];
}

export function Overview({ children }: OverviewProps) {
  return <div className="overview"></div>;
}
