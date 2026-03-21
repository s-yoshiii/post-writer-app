import { cn } from "@/lib/utils";
type DashboardPageProps = React.HTMLAttributes<HTMLDivElement>;

export default function DashBoardShell({
  children,
  className,
  ...props
}: DashboardPageProps) {
  return (
    <div className={cn("grid items-center gap-8", className)} {...props}>
      {children}
    </div>
  );
}
