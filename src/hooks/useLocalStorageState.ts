"use client";

import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

export function useLocalStorageState<T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    const savedValue = window.localStorage.getItem(key);
    if (!savedValue) {
      return initialValue;
    }

    try {
      return JSON.parse(savedValue) as T;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
