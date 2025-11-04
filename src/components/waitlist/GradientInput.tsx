"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface GradientInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const GradientInput = React.forwardRef<HTMLInputElement, GradientInputProps>(({ className, type, value, ...props }, ref) => {
  const isFilled = value ? String(value).length > 0 : false

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(e)
  }

  return (
    <div className="relative group w-full md:w-[326px]">
      <div
        className={cn(
          "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 p-[1px]",
          "group-hover:opacity-100 group-focus-within:opacity-100",
        )}
        style={{
          background: "radial-gradient(circle, #ffffff, #B677FF33)",
        }}
      >
        <div className="w-full h-full rounded-lg bg-[#080514]" />
      </div>

      <input
        type={type}
        value={value}
        className={cn(
          "relative flex h-10 w-full rounded-lg px-3 py-2 text-base",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-white/50",
          "focus-visible:outline-none focus-visible:ring-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "transition-all duration-300",
          "border border-white/15",
          isFilled ? "bg-white/10 text-white" : "bg-transparent text-white",
          // Filled state - transparent background (gradient border will show)
          "md:text-sm",
          className,
        )}
        ref={ref}
        onChange={handleChange}
        {...props}
      />
    </div>
  )
})
GradientInput.displayName = "GradientInput"

export { GradientInput }
