import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </BaseIcon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m5 12 4.2 4.2L19 6.5" />
    </BaseIcon>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m6 9 6 6 6-6" />
    </BaseIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </BaseIcon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21s6-5.8 6-11a6 6 0 1 0-12 0c0 5.2 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </BaseIcon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6.8 4.8c.6-.6 1.7-.5 2.1.3l1.5 2.7c.3.6.2 1.4-.3 1.9l-1 1c1.3 2.3 3.2 4.2 5.5 5.5l1-1c.5-.5 1.3-.6 1.9-.3l2.7 1.5c.8.4.9 1.5.3 2.1l-1.2 1.2c-.7.7-1.7 1-2.7.8-3.1-.7-6.2-2.7-8.8-5.2-2.5-2.6-4.5-5.7-5.2-8.8-.2-1 .1-2 .8-2.7l1.4-1.2Z" />
    </BaseIcon>
  );
}

export function RepairIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m14 5 5 5" />
      <path d="M12 7 7 12" />
      <path d="m5 14 5 5" />
      <path d="M4 20h4l10-10a2.8 2.8 0 0 0-4-4L4 16v4Z" />
    </BaseIcon>
  );
}

export function RenovationIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 12a8 8 0 0 1 13.7-5.6" />
      <path d="M20 4v5h-5" />
      <path d="M20 12a8 8 0 0 1-13.7 5.6" />
      <path d="M4 20v-5h5" />
    </BaseIcon>
  );
}

export function RoofIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 12h18" />
      <path d="M5 12 12 6l7 6" />
      <path d="M6 16h12" />
      <path d="M8 20h8" />
    </BaseIcon>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3 5 6v5c0 4.7 2.8 8.9 7 10 4.2-1.1 7-5.3 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </BaseIcon>
  );
}

export function ThermoIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14 14.8V6a2 2 0 1 0-4 0v8.8a4 4 0 1 0 4 0Z" />
      <path d="M12 11v6" />
    </BaseIcon>
  );
}
