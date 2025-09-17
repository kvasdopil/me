import React from "react";
import { FaEnvelope, FaGithub, FaFilePdf, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Tag from "./Tag";

// Types
type TimelineSide = "left" | "right";

type BulletItem = {
    text: string;
    id?: string; // unique id if details present
    details?: string[]; // paragraphs
    detailsTitle?: string;
};

type TimelineItemData = {
    side: TimelineSide;
    colorClass: string; // Tailwind color class like "bg-emerald-500"
    period: string;
    title: string;
    description?: string;
    startup?: boolean;
    bullets: BulletItem[];
    isLast?: boolean;
    badgeAboveDot?: string;
    tags?: string[];
};

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
    bio: string[];
    location: string;
    email: string;
    phone: string;
    githubUrl: string;
    cvUrl: string;
    photoUrl: string;
    base: string;
}

export const Header: React.FC<HeaderProps> = ({
    name,
    roles,
    bio,
    location,
    email,
    phone,
    githubUrl,
    cvUrl,
    photoUrl,
    base,
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
                <div className="mt-2 text-base text-gray-700 space-y-2">
                    {bio.map((paragraph, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                </div>
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
    skills: { label: string; value: string }[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => (
    <section className="mt-8">
        <h2 className="text-xl font-semibold tracking-tight">🛠️ Skills</h2>
        <div className="mt-5 space-y-3.5 text-[15px] text-gray-700">
            {skills.map((s) => (
                <div key={s.label}>
                    <span className="font-medium">{s.label}</span> {s.value}
                </div>
            ))}
        </div>
    </section>
);

// Timeline Components
interface TimelineProps {
    items: TimelineItemData[];
    base: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, base }) => (
    <section className="mt-8">
        <h2 className="text-xl font-semibold tracking-tight">🖖 My journey</h2>
        <div className="relative mt-7">
            <div className="pointer-events-none absolute inset-y-0 md:left-1/2 md:-translate-x-1/2 w-2 md:w-3 z-0" />
            {items.map((t, idx) => (
                <TimelineEntry key={t.title} item={t} addTopMargin={idx !== 0} base={base} />
            ))}
        </div>
    </section>
);

interface TimelineEntryProps {
    item: TimelineItemData;
    addTopMargin?: boolean;
    base: string;
}

const StartupBadge = () => (
    <span className="mr-2 rounded-full px-2 bg-red-100 py-0.5 text-xs font-medium text-red-500 align-middle">
        🚀&nbsp;startup
    </span>
);

export const TimelineEntry: React.FC<TimelineEntryProps> = ({ item, addTopMargin, base }) => {
    const containerBase = "relative md:grid md:grid-cols-2 md:gap-10";
    const containerClass = addTopMargin ? `${containerBase} mt-12` : containerBase;
    const lineBottomClass = item.isLast ? "-bottom-0" : "-bottom-18";
    const dotClass = item.colorClass;
    const lineClass = item.colorClass;

    const contentLeft = (
        <div className="pl-10 md:pl-0 md:col-span-1 md:pr-12 text-left md:text-right">
            <div className="text-xs font-semibold text-gray-400">{item.period}</div>
            <div className="font-medium">{item.title}</div>
            {item.description ? (
                <div className="mt-1 text-sm text-gray-600">
                    {item.startup ? <StartupBadge /> : null}
                    {item.description}
                </div>
            ) : null}
            <ul className="mt-3 inline-block text-left list-inside list-disc text-gray-700">
                {item.bullets.map((b, i) => (
                    <li
                        key={i}
                        className={`transition-colors duration-200 rounded-md px-2 py-1 -mx-2 -my-1 ${b.id ? "cursor-pointer hover:bg-blue-100 hover:text-blue-700" : ""
                            }`}
                    >
                        {b.text}
                        {b.id ? (
                            <>
                                {"\u00A0"}
                                <a
                                    href={`${base}project/${b.id}`}
                                    className="inline text-xs align-baseline text-blue-700 hover:underline whitespace-nowrap"
                                >
                                    more...
                                </a>
                            </>
                        ) : null}
                    </li>
                ))}
            </ul>
            {item.tags && item.tags.length ? (
                <div className="mt-3 flex flex-wrap justify-end gap-2">
                    {item.tags.map((t) => (
                        <Tag key={t} label={t} />
                    ))}
                </div>
            ) : null}
        </div>
    );

    const contentRight = (
        <div className="pl-10 md:pl-12 md:col-start-2">
            <div className="text-xs font-semibold text-gray-400">{item.period}</div>
            <div className="font-medium">{item.title}</div>
            {item.description ? (
                <div className="mt-1 text-sm text-gray-600">
                    {item.startup ? <StartupBadge /> : null}
                    {item.description}
                </div>
            ) : null}
            <ul className="mt-3 list-inside list-disc text-gray-700">
                {item.bullets.map((b, i) => (
                    <li
                        key={i}
                        className={`transition-colors duration-200 rounded-md px-2 py-1 -mx-2 -my-1 ${b.id ? "cursor-pointer hover:bg-blue-100 hover:text-blue-700" : ""
                            }`}
                    >
                        {b.text}
                        {b.id ? (
                            <>
                                {"\u00A0"}
                                <a
                                    href={`${base}project/${b.id}`}
                                    className="inline text-xs align-baseline text-blue-700 hover:underline whitespace-nowrap"
                                >
                                    more...
                                </a>
                            </>
                        ) : null}
                    </li>
                ))}
            </ul>
            {item.tags && item.tags.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                        <Tag key={t} label={t} />
                    ))}
                </div>
            ) : null}
        </div>
    );

    return (
        <div className={containerClass}>
            <span
                className={`absolute left-1 md:left-1/2 md:-translate-x-1/2 top-7 ${lineBottomClass} w-2 md:w-3 rounded-full ${lineClass} z-10`}
            />
            {item.side === "left" ? contentLeft : contentRight}
            {item.badgeAboveDot ? (
                <span className="absolute ml-[-25px] md:ml-0 md:left-1/2 md:-translate-x-1/2 top-0 rounded-r-full -translate-y-8 md:rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600 z-30 shadow-sm">
                    {item.badgeAboveDot}
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
interface Language {
    emoji: string;
    label: string;
    level: string;
}

interface LanguagesProps {
    languages: Language[];
}

export const Languages: React.FC<LanguagesProps> = ({ languages }) => (
    <div>
        <h2 className="text-xl font-semibold tracking-tight">🗣️ Languages</h2>
        <ul className="mt-3 text-base text-gray-700 list-none">
            {languages.map((lng) => (
                <li key={lng.label}>
                    <span role="img" aria-label={`${lng.label} flag`} className="inline-block mr-1">
                        {lng.emoji}
                    </span>
                    {lng.label} — {lng.level}
                </li>
            ))}
        </ul>
    </div>
);

// Hobbies Section
interface Hobby {
    label: string;
    emoji: string;
}

interface HobbiesProps {
    hobbies: Hobby[];
}

export const Hobbies: React.FC<HobbiesProps> = ({ hobbies }) => (
    <div>
        <h2 className="mt-7 text-xl font-semibold tracking-tight">🎯 Hobbies</h2>
        <div className="mt-3 flex flex-wrap gap-2 text-base text-gray-700">
            {hobbies.map((h) => (
                <span
                    key={h.label}
                    className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 font-medium shadow-sm"
                >
                    {h.label}{" "}
                    <span role="img" aria-label={h.label} className="ml-1">
                        {h.emoji}
                    </span>
                </span>
            ))}
        </div>
    </div>
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
