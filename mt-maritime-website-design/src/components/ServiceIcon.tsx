import { AnchorIcon, ContainerIcon, WrenchIcon, UsersIcon, ShieldIcon, CraneIcon } from "./Icons";

const map: Record<string, React.ComponentType<{ className?: string }>> = {
  anchor: AnchorIcon,
  container: ContainerIcon,
  wrench: WrenchIcon,
  users: UsersIcon,
  shield: ShieldIcon,
  crane: CraneIcon,
};

export default function ServiceIcon({ icon, className }: { icon: string; className?: string }) {
  const Icon = map[icon] ?? AnchorIcon;
  return <Icon className={className} />;
}
