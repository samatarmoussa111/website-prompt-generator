"use client";

import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export function ColorPicker({ value, onChange, label }: ColorPickerProps) {
  const [copied, setCopied] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const presetColors = [
    "#0EA5E9", // Sky
    "#6366F1", // Indigo
    "#8B5CF6", // Violet
    "#EC4899", // Pink
    "#F43F5E", // Rose
    "#10B981", // Emerald
    "#000000", // Black
    "#FFFFFF", // White
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (copied) setCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleHexInput = (input: string) => {
    // Remove any spaces and ensure uppercase
    const cleanInput = input.trim().toUpperCase();
    // Add # if it's missing
    const hex = cleanInput.startsWith("#") ? cleanInput : `#${cleanInput}`;
    // Check if it's a valid hex color
    const isValidHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
    setIsValid(isValidHex);
    if (isValidHex) {
      onChange(hex);
    } else {
      // Update the input value even if invalid to allow typing
      onChange(hex);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
  };

  return (
    <div className="space-y-4">
      {label && <Label>{label}</Label>}
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-8 gap-2">
          {presetColors.map((color) => (
            <button
              key={color}
              className={cn(
                "h-8 w-8 rounded-full border border-gray-200 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-200",
                value === color && "ring-2 ring-gray-900"
              )}
              style={{ backgroundColor: color }}
              onClick={() => onChange(color)}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="color"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <div
              className="h-10 w-full rounded-l-md border border-r-0"
              style={{ backgroundColor: value }}
            />
          </div>
          <div className="relative flex-1">
            <input
              type="text"
              value={value.toUpperCase()}
              onChange={(e) => handleHexInput(e.target.value)}
              className={cn(
                "h-10 w-full rounded-r-md border px-3 font-mono",
                !isValid && "border-red-500 focus:border-red-500"
              )}
              placeholder="#000000"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2"
              onClick={copyToClipboard}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
