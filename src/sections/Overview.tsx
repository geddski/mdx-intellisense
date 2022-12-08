// interface Requirements {
//   download: string;
//   languages: string[];
// }

import { AvatarProps } from "../components/Avatar";

export interface OverviewProps {
  children: React.ReactNode;
  // children: [string, AvatarProps];
}

// export function Overview({ children }: OverviewProps) {
export function Overview(props: OverviewProps) {
  return <div className="overview"></div>;
}
