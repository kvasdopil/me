import React from "react";
import { FaEnvelope, FaGithub, FaFilePdf, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Tag from "./Tag";

// Types
type TimelineSide = "left" | "right";

// Context to pass Timeline-wide data to children
const TimelineContext = React.createContext<{ base: string } | null>(null);

// Main Container
interface MainPageContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<MainPageContainerProps> = ({ children }) => (
  <div className="min-h-screen bg-gray-50 text-gray-900">
    <main className="mx-auto max-w-4xl px-6 py-10 md:py-12">{children}</main>
  </div>
);

// Header Section
interface HeaderProps {
  name: string;
  roles: string[];
  location: string;
  email: string;
  phone: string;
  githubUrl: string;
  cvUrl: string;
  photoUrl: string;
  base: string;
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  name,
  roles,
  location,
  email,
  phone,
  githubUrl,
  cvUrl,
  photoUrl,
  base,
  children,
}) => (
  <section>
    <div className="flex flex-col gap-7 sm:flex-row sm:items-center">
      <img
        src={base + photoUrl}
        alt={name}
        className="h-48 w-48 rounded-full object-cover shadow-md"
      />
      <div className="flex-1">
        <h1 className="text-3xl font-semibold tracking-tight">{name}</h1>
        <div className="mt-2 text-base text-gray-700">
          <ul className="flex flex-wrap gap-3 text-sm">
            {roles.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
        <div className="mt-2 text-base text-gray-700 space-y-2">{children}</div>
        <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-gray-700">
          <span className="inline-flex items-center gap-1">
            <FaMapMarkerAlt className="text-gray-500" /> {location}
          </span>
          <a href={`mailto:${email}`} className="inline-flex items-center gap-1 hover:underline">
            <FaEnvelope className="text-gray-500" /> {email}
          </a>
          <a href={`tel:${phone}`} className="inline-flex items-center gap-1 hover:underline">
            <FaPhone className="text-gray-500" /> {phone}
          </a>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shadow-sm items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-black"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={base + cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shadow-sm items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            <FaFilePdf /> Download CV
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Skills Section
interface SkillsProps {
  children: React.ReactNode;
}

interface SkillProps {
  label: string;
  children: React.ReactNode;
}

export const Skills: React.FC<SkillsProps> = ({ children }) => (
  <section className="mt-8">
    <h2 className="text-xl font-semibold tracking-tight">🛠️ Skills</h2>
    <div className="mt-5 space-y-3.5 text-[15px] text-gray-700">{children}</div>
  </section>
);

export const Skill: React.FC<SkillProps> = ({ label, children }) => (
  <div>
    <span className="font-medium">{label}</span> {children}
  </div>
);

// Timeline Components
interface TimelineProps {
  children: React.ReactNode;
  base: string;
}

interface TimelineItemProps {
  side: TimelineSide;
  colorClass: string;
  period: string;
  title: string;
  description?: string;
  startup?: boolean;
  hobby?: boolean;
  pairWithNext?: boolean;
  isLast?: boolean;
  badgeAboveDot?: string;
  tags?: string[];
  link?: string;
  linkText?: string;
  children?: React.ReactNode;
}

interface TimelineBulletProps {
  id?: string;
  children: React.ReactNode;
}

export const TimelineBullet: React.FC<TimelineBulletProps> = ({ id, children }) => {
  const ctx = React.useContext(TimelineContext);
  const isText = typeof children === "string";
  return (
    <li
      className={`transition-colors duration-200 rounded-md px-2 py-1 -mx-2 -my-1 ${id ? "cursor-pointer hover:bg-blue-100 hover:text-blue-700" : ""
        }`}
    >
      {id && isText ? (
        <a href={`${ctx?.base ?? ""}project/${id}`} className="">
          {children}
          {"\u00A0"}
          <span className="text-xs align-baseline text-blue-700 hover:underline whitespace-nowrap">
            more...
          </span>
        </a>
      ) : (
        <>{children}</>
      )}
    </li>
  );
};

export const TimelineItem: React.FC<TimelineItemProps> = ({
  side,
  period,
  title,
  description,
  startup,
  hobby,
  tags,
  link,
  linkText,
  children,
}) => {
  const content = (
    <>
      <div className="text-xs font-semibold text-gray-400">{period}</div>
      <div className="font-medium">
        {hobby && <HobbyTag />}
        {title}
      </div>
      {description ? (
        <div className="mt-1 text-sm text-gray-600">
          {startup ? <StartupBadge /> : null}
          {description}
        </div>
      ) : null}
      {children ? (
        <ul
          className={
            side === "left"
              ? "mt-3 text-left list-inside list-disc text-gray-700"
              : "mt-3 list-inside list-disc text-gray-700"
          }
        >
          {children}
        </ul>
      ) : null}
      {tags && tags.length ? (
        <div
          className={
            side === "left" ? "mt-3 flex flex-wrap justify-end gap-2" : "mt-3 flex flex-wrap gap-2"
          }
        >
          {tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      ) : null}
      {side === "left" && link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-md font-semibold text-orange-400 shadow-md border-1 border-orange-400 rounded-md px-3 py-1.5 mt-4 hover:bg-orange-100 inline-block float-right"
        >
          {linkText}
        </a>
      ) : null}
    </>
  );

  return (
    <div
      className={
        side === "left"
          ? "pl-10 md:pl-0 md:col-span-1 md:pr-12 text-left md:text-right"
          : "pl-10 md:pl-12 md:col-start-2 md:col-span-1"
      }
    >
      {hobby ? (
        <div className="inline-block w-fit rounded-lg border-1 border-orange-200 border-dashed bg-yellow-50 p-4 -mx-4 mb-4">
          {content}
        </div>
      ) : (
        content
      )}
    </div>
  );
};

export const Timeline: React.FC<TimelineProps> = ({ children, base }) => {
  const childArray = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && (child as React.ReactElement).type === TimelineItem,
  ) as React.ReactElement<TimelineItemProps>[];

  const rows: React.ReactNode[] = [];
  for (let i = 0; i < childArray.length; i++) {
    const current = childArray[i];
    const next = childArray[i + 1];
    const isLast =
      typeof current.props.isLast === "boolean"
        ? current.props.isLast
        : i === childArray.length - 1;

    if (
      current.props.pairWithNext &&
      current.props.side === "left" &&
      next &&
      next.props.side === "right"
    ) {
      rows.push(
        <TimelineEntry
          key={`${current.props.title}-${next.props.title}`}
          left={current}
          right={next}
          colorClass={current.props.colorClass}
          isLast={isLast}
          badgeAboveDot={current.props.badgeAboveDot}
          addTopMargin={rows.length !== 0}
        />,
      );
      i++; // skip the next since it's paired
    } else {
      rows.push(
        <TimelineEntry
          key={current.props.title}
          left={current.props.side === "left" ? current : undefined}
          right={current.props.side === "right" ? current : undefined}
          colorClass={current.props.colorClass}
          isLast={isLast}
          badgeAboveDot={current.props.badgeAboveDot}
          addTopMargin={rows.length !== 0}
        />,
      );
    }
  }

  return (
    <TimelineContext.Provider value={{ base }}>
      <section className="mt-8">
        <h2 className="text-xl font-semibold tracking-tight">🖖 My journey</h2>
        <div className="relative mt-7">
          <div className="pointer-events-none absolute inset-y-0 md:left-1/2 md:-translate-x-1/2 w-2 md:w-3 z-0" />
          {rows}
        </div>
      </section>
    </TimelineContext.Provider>
  );
};

interface TimelineEntryProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  colorClass: string;
  isLast: boolean;
  badgeAboveDot?: string;
  addTopMargin?: boolean;
}

const StartupBadge = () => (
  <span className="mr-2 rounded-full px-2 bg-red-100 py-0.5 text-xs font-medium text-red-500 align-middle">
    🚀&nbsp;startup
  </span>
);

const HobbyTag = () => (
  <span className="mr-2 rounded-full px-2 py-0.5 text-xs font-medium text-orange-400 bg-orange-100 border border-orange-400 align-middle">
    🛠️&nbsp;Hobby project
  </span>
);

export const TimelineEntry: React.FC<TimelineEntryProps> = ({
  left,
  right,
  colorClass,
  isLast,
  badgeAboveDot,
  addTopMargin,
}) => {
  const containerBase = "relative md:grid md:grid-cols-2 md:gap-10";
  const containerClass = addTopMargin ? `${containerBase} mt-12` : containerBase;
  const lineBottomClass = isLast ? "-bottom-0" : "-bottom-18";
  const dotClass = colorClass;
  const lineClass = colorClass;

  return (
    <div className={containerClass}>
      <span
        className={`absolute left-1 md:left-1/2 md:-translate-x-1/2 top-7 ${lineBottomClass} w-2 md:w-3 rounded-full ${lineClass} z-10`}
      />
      {left}
      {right ? right : <div className="hidden md:block md:col-start-2 md:col-span-1" />}
      {badgeAboveDot ? (
        <span className="absolute ml-[-25px] md:ml-0 md:left-1/2 md:-translate-x-1/2 top-0 rounded-r-full -translate-y-8 md:rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600 z-30 shadow-sm">
          {badgeAboveDot}
        </span>
      ) : null}
      <span
        className={`absolute left-.65 md:left-1/2 md:-translate-x-1/2 top-3 h-4 w-4 rounded-full ${dotClass} ring-4 ring-white z-20`}
      />
    </div>
  );
};

// Education Section
interface EducationProps {
  period: string;
  institution: string;
}

export const Education: React.FC<EducationProps> = ({ period, institution }) => (
  <div>
    <h2 className="text-xl font-semibold tracking-tight">🎓 Education</h2>
    <div className="mt-3 text-base text-gray-700">
      <div className="text-xs font-semibold text-gray-400">{period}</div>
      {institution}
    </div>
  </div>
);

// Languages Section
interface LanguagesProps {
  children: React.ReactNode;
}

interface LanguageProps {
  emoji: string;
  level: string;
  children: React.ReactNode;
}

export const Languages: React.FC<LanguagesProps> = ({ children }) => (
  <div>
    <h2 className="text-xl font-semibold tracking-tight">🗣️ Languages</h2>
    <ul className="mt-3 text-base text-gray-700 list-none">{children}</ul>
  </div>
);

export const Language: React.FC<LanguageProps> = ({ emoji, level, children }) => (
  <li>
    <span role="img" aria-label="flag" className="inline-block mr-1">
      {emoji}
    </span>
    {children} - {level}
  </li>
);

// Hobbies Section
interface HobbiesProps {
  children: React.ReactNode;
}

interface HobbyItemProps {
  children: React.ReactNode;
}

export const Hobbies: React.FC<HobbiesProps> = ({ children }) => (
  <div>
    <h2 className="mt-7 text-xl font-semibold tracking-tight">🎯 Hobbies</h2>
    <div className="mt-3 flex flex-wrap gap-2 text-base text-gray-700">{children}</div>
  </div>
);

export const Hobby: React.FC<HobbyItemProps> = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 font-medium shadow-sm">
    {children}
  </span>
);

// Footer
interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => (
  <footer className="mt-10 pb-10 text-center text-[11px] text-gray-500">
    © {new Date().getFullYear()} {name} ✨
  </footer>
);

// Main Page Layout Component
interface MainPageLayoutProps {
  children: React.ReactNode;
}

export const MainPageLayout: React.FC<MainPageLayoutProps> = ({ children }) => (
  <Container>{children}</Container>
);
