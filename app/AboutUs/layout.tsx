import { ReactNode } from 'react';

interface GroupsLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "PLP | About Us",
  description: "关于我们",
};

export default function GroupsLayout({
    children, // will be a page or nested layout
  }: GroupsLayoutProps) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
   
        {children}
      </section>
    )
  }