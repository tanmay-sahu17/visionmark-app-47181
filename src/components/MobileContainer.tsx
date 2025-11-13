import { ReactNode } from "react";

interface MobileContainerProps {
  children: ReactNode;
}

export const MobileContainer = ({ children }: MobileContainerProps) => {
  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md h-[800px] bg-background rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {children}
      </div>
    </div>
  );
};
