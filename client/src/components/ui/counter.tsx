import { useCounter } from "@/hooks/use-counter";

interface CounterProps {
  target: number;
  duration?: number;
}

export default function Counter({ target, duration = 2000 }: CounterProps) {
  const count = useCounter(target, duration);
  
  return <span className="animate-countUp">{count}</span>;
}