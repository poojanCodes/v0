"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Hint = ({
  children,
  text,
  label,
  side = "top",
  align = "center",
  sideOffset = 4,
}) => {
  const contentText = text || label;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={children} />
        <TooltipContent side={side} align={align} sideOffset={sideOffset}>
          <p className="font-semibold text-xs">{contentText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
