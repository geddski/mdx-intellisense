// interface Requirements {
//   download: string;
//   languages: string[];
// }

export interface OverviewProps {
  children: [string, string];
}

export function Overview({ children }: OverviewProps) {
  return <div className="overview"></div>;
}
