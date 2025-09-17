import React from "react";

// Page Header Component
interface PageHeaderProps {
  title: string;
  company: string;
  year: string;
  description: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, company, year, description }) => (
  <header className="mb-8 text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
    <div className="text-xl text-gray-600 mb-2">
      {company} <span className="text-lg text-gray-500 mb-6">- {year}</span>
    </div>
    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">{description}</p>
  </header>
);

// Page Content Container
interface PageContentProps {
  children: React.ReactNode;
}

export const PageContent: React.FC<PageContentProps> = ({ children }) => (
  <main className="text-left space-y-6">{children}</main>
);

// Page Section Component
interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const PageSection: React.FC<PageSectionProps> = ({ children, className = "" }) => (
  <section className={`space-y-4 ${className}`}>{children}</section>
);

// Technology Tag Component
interface TechTagProps {
  name: string;
  className?: string;
}

export const TechTag: React.FC<TechTagProps> = ({ name, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-sm font-medium text-blue-800 ${className}`}
  >
    {name}
  </span>
);

// Technology Tags Collection
interface TechTagsProps {
  technologies: string[];
  className?: string;
}

export const TechTags: React.FC<TechTagsProps> = ({ technologies, className = "" }) => (
  <div className={`mt-12 flex flex-wrap justify-center gap-3 ${className}`}>
    {technologies.map((tech) => (
      <TechTag key={tech} name={tech} />
    ))}
  </div>
);

// Technology Tag (for use within paragraphs)
interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ children, className = "" }) => (
  <span
    className={`m-0 inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-sm text-gray-800 ${className}`}
  >
    {children}
  </span>
);

// Page Container (main wrapper for the entire page)
interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => <>{children}</>;
