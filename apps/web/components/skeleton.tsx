import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
}

export function Skeleton(props: SkeletonProps) {
  let { className = "" } = props
  let rounded = className.indexOf('rounded') > -1
  return <div className={cn(
    'bg-gray-200 animate-pulse',
    className,
    !rounded && 'rounded',
  )} />
}