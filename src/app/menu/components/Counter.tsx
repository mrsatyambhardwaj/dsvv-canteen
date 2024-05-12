"use client"
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex h-fit items-center gap-2 text-foreground">
      <Button variant="outline" size="sm" onClick={handleDecrement}>
        -
      </Button>
      <p className="p-2">{count}</p>
      <Button variant="outline" size="sm" onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
}
