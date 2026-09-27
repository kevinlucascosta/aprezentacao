import type { ReactNode } from "react";

type P = { className?: string };

function S({ children, className, w = 1.6 }: P & { children: ReactNode; w?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={w}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "h-6 w-6"}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const EyeIcon = (p: P) => (
  <S {...p}>
    <path d="M1.8 12S5.6 5.8 12 5.8 22.2 12 22.2 12 18.4 18.2 12 18.2 1.8 12 1.8 12Z" />
    <circle cx="12" cy="12" r="3" />
  </S>
);

export const EyeScanIcon = (p: P) => (
  <S {...p}>
    <path d="M3.5 12S6.8 7 12 7s8.5 5 8.5 5-3.3 5-8.5 5-8.5-5-8.5-5Z" />
    <circle cx="12" cy="12" r="2.1" />
    <path d="M3 4.5V3h3M21 4.5V3h-3M3 19.5V21h3M21 19.5V21h-3" />
  </S>
);

export const SearchIcon = (p: P) => (
  <S {...p}>
    <circle cx="10.8" cy="10.8" r="6.3" />
    <path d="m15.4 15.4 4.6 4.6" />
  </S>
);

export const LockIcon = (p: P) => (
  <S {...p}>
    <rect x="4.5" y="10.5" width="15" height="9.5" rx="2" />
    <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7M12 14.4v2.2" />
  </S>
);

export const ShieldIcon = (p: P) => (
  <S {...p}>
    <path d="M12 2.8 4.8 5.7v6c0 4.3 3 8 7.2 9.5 4.2-1.5 7.2-5.2 7.2-9.5v-6L12 2.8Z" />
    <path d="m9.2 12 2 2.1 3.6-4" />
  </S>
);

export const FolderIcon = (p: P) => (
  <S {...p}>
    <path d="M3 6.6a1.8 1.8 0 0 1 1.8-1.8h3.9l2 2.4h8.5A1.8 1.8 0 0 1 21 9v8.4a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 17.4V6.6Z" />
    <path d="M3 10.4h18" />
  </S>
);

export const FingerprintIcon = (p: P) => (
  <S {...p}>
    <path d="M5.5 10.5a6.5 6.5 0 0 1 13 0v2" />
    <path d="M8.4 11a3.6 3.6 0 0 1 7.2 0v3.4a8 8 0 0 1-.7 3.2" />
    <path d="M12 11v4.6a9 9 0 0 1-1 4.2" />
    <path d="M5.5 13.6v.9a11 11 0 0 0 1.1 4.8" />
    <path d="M18.6 8.2A6.6 6.6 0 0 0 15.4 5" />
  </S>
);

export const GlobeIcon = (p: P) => (
  <S {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3.2 9.8h17.6M3.2 14.2h17.6" />
    <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z" />
  </S>
);

export const ServerIcon = (p: P) => (
  <S {...p}>
    <rect x="3.4" y="4.2" width="17.2" height="6" rx="1.6" />
    <rect x="3.4" y="13.8" width="17.2" height="6" rx="1.6" />
    <path d="M7 7.2h.01M7 16.8h.01M10.5 7.2h3M10.5 16.8h3" />
  </S>
);

export const MailIcon = (p: P) => (
  <S {...p}>
    <rect x="2.8" y="5.2" width="18.4" height="13.6" rx="2" />
    <path d="m3.6 7 7.4 5.4a1.7 1.7 0 0 0 2 0L20.4 7" />
  </S>
);

export const LaptopIcon = (p: P) => (
  <S {...p}>
    <rect x="4.4" y="5" width="15.2" height="10" rx="1.6" />
    <path d="M2.4 18.4h19.2l-1.6-3.4H4l-1.6 3.4Z" />
  </S>
);

export const TargetIcon = (p: P) => (
  <S {...p}>
    <circle cx="12" cy="12" r="8.4" />
    <circle cx="12" cy="12" r="4.4" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </S>
);

export const ClockIcon = (p: P) => (
  <S {...p}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M12 7.2V12l3.2 2" />
  </S>
);

export const BuildingIcon = (p: P) => (
  <S {...p}>
    <path d="M4.6 20.4V5.2a1.4 1.4 0 0 1 1.4-1.4h7.4a1.4 1.4 0 0 1 1.4 1.4v15.2" />
    <path d="M14.8 10h3.6a1.4 1.4 0 0 1 1.4 1.4v9M2.8 20.4h18.4" />
    <path d="M7.6 7.4h1.6M11 7.4h1.6M7.6 11h1.6M11 11h1.6M7.6 14.6h1.6M11 14.6h1.6" />
  </S>
);

export const BankIcon = (p: P) => (
  <S {...p}>
    <path d="M3.2 9.6 12 4.2l8.8 5.4M5.4 9.6v9M9.8 9.6v9M14.2 9.6v9M18.6 9.6v9" />
    <path d="M2.8 20.6h18.4" />
  </S>
);

export const CapIcon = (p: P) => (
  <S {...p}>
    <path d="M2.6 9.2 12 4.6l9.4 4.6L12 13.8 2.6 9.2Z" />
    <path d="M6.6 11v5c0 1.4 2.6 2.6 5.4 2.6s5.4-1.2 5.4-2.6v-5M21 9.6v5" />
  </S>
);

export const HospitalIcon = (p: P) => (
  <S {...p}>
    <rect x="4" y="4" width="16" height="16" rx="2.4" />
    <path d="M12 8.2v7.6M8.2 12h7.6" />
  </S>
);

export const FactoryIcon = (p: P) => (
  <S {...p}>
    <path d="M3.4 20.4V11l5.4 3.2V11l5.4 3.2V6.6h5.4v13.8H3.4Z" />
    <path d="M7 17.4h2M13 17.4h2" />
  </S>
);

export const UserIcon = (p: P) => (
  <S {...p}>
    <circle cx="12" cy="8.4" r="3.8" />
    <path d="M4.8 20.2a7.4 7.4 0 0 1 14.4 0" />
  </S>
);

export const UsersIcon = (p: P) => (
  <S {...p}>
    <circle cx="9.4" cy="8.6" r="3.4" />
    <path d="M3.2 19.6a6.4 6.4 0 0 1 12.4 0" />
    <path d="M16 5.6a3.4 3.4 0 0 1 0 6.6M17.4 14.4a6.4 6.4 0 0 1 3.4 5.2" />
  </S>
);

export const RefreshIcon = (p: P) => (
  <S {...p}>
    <path d="M20.2 11.4A8.2 8.2 0 0 0 6.1 6.6L3.8 8.8" />
    <path d="M3.8 12.6a8.2 8.2 0 0 0 14.1 4.8l2.3-2.2" />
    <path d="M3.6 4.8v4h4M20.4 19.2v-4h-4" />
  </S>
);

export const AlertIcon = (p: P) => (
  <S {...p}>
    <path d="M12 3.6 21.4 20H2.6L12 3.6Z" />
    <path d="M12 9.6v4.2M12 16.8h.01" />
  </S>
);

export const ArrowRightIcon = (p: P) => (
  <S {...p}>
    <path d="M4 12h15.4M13.8 6.4 19.8 12l-6 5.6" />
  </S>
);

export const ChevronLeftIcon = (p: P) => (
  <S {...p}>
    <path d="M14.8 5.4 8.2 12l6.6 6.6" />
  </S>
);

export const ChevronRightIcon = (p: P) => (
  <S {...p}>
    <path d="M9.2 5.4 15.8 12l-6.6 6.6" />
  </S>
);

export const CheckIcon = (p: P) => (
  <S {...p}>
    <path d="m4.8 12.6 4.6 4.6L19.4 6.8" />
  </S>
);

export const FileIcon = (p: P) => (
  <S {...p}>
    <path d="M6 3.4h7.4L19 9v11.6H6V3.4Z" />
    <path d="M13.2 3.6V9H19M8.8 13h6.4M8.8 16.4h4.6" />
  </S>
);

export const ChipIcon = (p: P) => (
  <S {...p}>
    <rect x="6.6" y="6.6" width="10.8" height="10.8" rx="1.6" />
    <path d="M10 10h4v4h-4z" />
    <path d="M9.6 3.2v3.4M14.4 3.2v3.4M9.6 17.4v3.4M14.4 17.4v3.4M3.2 9.6h3.4M3.2 14.4h3.4M17.4 9.6h3.4M17.4 14.4h3.4" />
  </S>
);

export const HelpIcon = (p: P) => (
  <S {...p}>
    <circle cx="12" cy="12" r="8.8" />
    <path d="M9.6 9.6a2.5 2.5 0 1 1 3.4 2.3c-.7.3-1 .9-1 1.7v.4M12 17h.01" />
  </S>
);

export const LayersIcon = (p: P) => (
  <S {...p}>
    <path d="m12 3.4 8.6 4.4L12 12.2 3.4 7.8 12 3.4Z" />
    <path d="m3.4 12.2 8.6 4.4 8.6-4.4M3.4 16.4 12 20.8l8.6-4.4" />
  </S>
);

export const KeyIcon = (p: P) => (
  <S {...p}>
    <circle cx="8" cy="12" r="4" />
    <path d="M12 12h9M17.6 12v3.2M20.4 12v2.4" />
  </S>
);

export const PhoneIcon = (p: P) => (
  <S {...p}>
    <rect x="6.6" y="2.8" width="10.8" height="18.4" rx="2.2" />
    <path d="M11 18.4h2" />
  </S>
);

export const LinkIcon = (p: P) => (
  <S {...p}>
    <path d="M10.4 13.6a3.6 3.6 0 0 0 5.2 0l2.8-2.8a3.7 3.7 0 0 0-5.2-5.2l-1.4 1.4" />
    <path d="M13.6 10.4a3.6 3.6 0 0 0-5.2 0l-2.8 2.8a3.7 3.7 0 0 0 5.2 5.2l1.4-1.4" />
  </S>
);

export const DatabaseIcon = (p: P) => (
  <S {...p}>
    <ellipse cx="12" cy="6.2" rx="7.4" ry="3" />
    <path d="M4.6 6.2v11.6c0 1.7 3.3 3 7.4 3s7.4-1.3 7.4-3V6.2M4.6 12c0 1.7 3.3 3 7.4 3s7.4-1.3 7.4-3" />
  </S>
);

export const RadarIcon = (p: P) => (
  <S {...p}>
    <circle cx="12" cy="12" r="8.8" />
    <circle cx="12" cy="12" r="5" />
    <path d="M12 12 18.4 7.4M12 12h.01" />
  </S>
);

export const BulbIcon = (p: P) => (
  <S {...p}>
    <path d="M9.2 17.4a6 6 0 1 1 5.6 0v1.8a1.4 1.4 0 0 1-1.4 1.4h-2.8a1.4 1.4 0 0 1-1.4-1.4v-1.8Z" />
    <path d="M9.6 17.4h4.8" />
  </S>
);

export const MoneyIcon = (p: P) => (
  <S {...p}>
    <rect x="2.8" y="6" width="18.4" height="12" rx="2" />
    <circle cx="12" cy="12" r="2.6" />
    <path d="M6 9.6v4.8M18 9.6v4.8" />
  </S>
);

export const PlayIcon = (p: P) => (
  <S {...p}>
    <path d="M7.4 4.8 19 12 7.4 19.2V4.8Z" />
  </S>
);

export const PauseIcon = (p: P) => (
  <S {...p}>
    <path d="M8.4 4.8v14.4M15.6 4.8v14.4" />
  </S>
);

export const GridIcon = (p: P) => (
  <S {...p}>
    <rect x="3.6" y="3.6" width="7" height="7" rx="1.4" />
    <rect x="13.4" y="3.6" width="7" height="7" rx="1.4" />
    <rect x="3.6" y="13.4" width="7" height="7" rx="1.4" />
    <rect x="13.4" y="13.4" width="7" height="7" rx="1.4" />
  </S>
);

export const NotesIcon = (p: P) => (
  <S {...p}>
    <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="2" />
    <path d="M7.4 8.4h9.2M7.4 12h9.2M7.4 15.6h5.6" />
  </S>
);

export const ExpandIcon = (p: P) => (
  <S {...p}>
    <path d="M4 9V4h5M20 15v5h-5M20 9V4h-5M4 15v5h5" />
  </S>
);

export const ResetIcon = (p: P) => (
  <S {...p}>
    <path d="M3.8 12a8.2 8.2 0 1 0 2.6-6" />
    <path d="M3.4 4.2v4.6h4.6" />
  </S>
);
