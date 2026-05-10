import {
  ExpandCircleDown,
  Factory,
  Verified,
  Power,
  ElectricalServices,
  SettingsInputComponent,
  Construction,
  PrecisionManufacturing,
  ArrowForward,
  Call,
  Mail,
  LocationOn,
  Schedule,
  Public,
  Share,
  ChevronRight,
  Menu,
  Close,
  Check,
} from "@material-symbols-svg/react/w400";

const iconMap = {
  expand_more: ExpandCircleDown,
  factory: Factory,
  verified: Verified,
  power: Power,
  electrical_services: ElectricalServices,
  settings_input_component: SettingsInputComponent,
  construction: Construction,
  precision_manufacturing: PrecisionManufacturing,
  arrow_forward: ArrowForward,
  call: Call,
  mail: Mail,
  location_on: LocationOn,
  schedule: Schedule,
  public: Public,
  share: Share,
  chevron_right: ChevronRight,
  menu: Menu,
  close: Close,
  check: Check,
} as const satisfies Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
>;

export type MaterialSymbolName = keyof typeof iconMap;

export function MaterialSymbol({
  name,
  size,
  className,
}: {
  name: MaterialSymbolName;
  size: number;
  className?: string;
}) {
  const Icon = iconMap[name];
  return <Icon size={size} className={className} />;
}
