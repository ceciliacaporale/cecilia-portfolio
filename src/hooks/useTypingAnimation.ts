import { useEffect, useMemo, useState } from "react";

export const useTypingAnimation = (
  lines: string[],
  speed: number = 60
): string => {
  const fullText = useMemo(() => lines.join("\n"), [lines]);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setCharIndex(0);
  }, [fullText]);

  useEffect(() => {
    if (charIndex >= fullText.length) return;

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, fullText, speed]);

  return fullText.slice(0, charIndex);
};