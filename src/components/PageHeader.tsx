import React from "react";

interface PageHeaderProps {
  title: string;
  backgroundImageUrl?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  backgroundImageUrl = "https://vibe.filesafe.space/1786084625277767261/assets/bd1d96a6-1218-42bc-931a-6b692706f483.jpg",
}) => {
  return (
    <div
      className="relative bg-cover bg-center py-24 sm:py-32 flex items-center justify-center text-center mt-[72px]"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
};
