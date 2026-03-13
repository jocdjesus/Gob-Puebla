'use client'

import { lazy, Suspense, ComponentType } from 'react'
import * as Icons from 'lucide-react'

type IconName = keyof typeof Icons

interface LazyIconProps {
  name: IconName
  className?: string
  size?: number
}

const iconImport = (name: IconName) => {
  return lazy(() => 
    import('lucide-react').then(mod => ({
      default: mod[name] as ComponentType<any>
    }))
  )
}

export function LazyIcon({ name, className = '', size = 24 }: LazyIconProps) {
  const IconComponent = iconImport(name)
  
  return (
    <Suspense fallback={<div style={{ width: size, height: size }} className="bg-muted rounded animate-pulse" />}>
      <IconComponent className={className} size={size} />
    </Suspense>
  )
}