//components/portal/HeroWalkthrough.tsx
'use client'

import React, { useState, useRef, useEffect } from 'react'
import Joyride, { Step, CallBackProps, STATUS, ACTIONS, EVENTS } from 'react-joyride'

export function HeroWalkthrough() {
  const [run, setRun] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [stepIndex, setStepIndex] = useState(0)

  useEffect(() => {
    setMounted(true)
    const hasSeenTour = localStorage.getItem('hero-tour-completed')
    if (!hasSeenTour) {
      setRun(true)
    }
  }, [])

  const steps: Step[] = [
    {
      target: '.index-search-input',
      content: 'Optimiza tu búsqueda: escribe "canje" para activar nuestra tecnología de asistencia ciudadana.',
      placement: 'bottom',
      disableBeacon: true,
      hideFooter: true,
      spotlightClicks: true,
    },
    {
      target: '.index-suggestions-list',
      content: 'Identificamos una coincidencia precisa. Selecciona el trámite para que la IA procese los requisitos por ti.',
      placement: 'bottom',
      spotlightClicks: true,
      hideFooter: true,
    },
    {
      target: '.index-ia-answer-box',
      content: 'Análisis finalizado: La IA ha sintetizado la descripción, costos y requisitos vigentes directamente de la normativa oficial.',
      placement: 'top',
    },
    {
      target: '.index-chat-fab',
      content: '¿Necesitas ayuda personalizada? Haz clic en el asistente para resolver dudas específicas 24/7.',
      placement: 'top',
      disableBeacon: true,
      spotlightClicks: true,
      hideFooter: true, // Ocultamos el footer para obligar al clic en el botón del chat
      floaterProps: { offset: 15 }
    },
    {
      target: '.index-chat-window',
      content: 'Desde aquí puedes consultar horarios, ubicaciones y trámites en lenguaje natural. ¡Pruébalo ahora!',
      placement: 'left-start',
      styles: {
        options: { width: 300 }
      }
    }
  ]

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { action, index, status, type } = data

    // Manejo manual del avance de pasos
    if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
      setStepIndex(index + (action === ACTIONS.PREV ? -1 : 1))
    }

    if (([STATUS.FINISHED, STATUS.SKIPPED] as string[]).includes(status)) {
      setRun(false)
      localStorage.setItem('hero-tour-completed', 'true')
    }
  }

  useEffect(() => {
    const checkInteraction = setInterval(() => {
      const input = document.querySelector('.index-search-input') as HTMLInputElement
      const iaBox = document.querySelector('.index-ia-answer-box')
      const chatWindow = document.querySelector('.index-chat-window')

      // Paso 1 -> 2: Usuario escribe "canje"
      if (stepIndex === 0 && input?.value.toLowerCase().includes('canje')) {
        setStepIndex(1)
      }
      
      // Paso 2 -> 3: Aparece la respuesta de la IA
      if (stepIndex === 1 && iaBox) {
        setStepIndex(2)
      }

      // Paso 4 -> 5: El usuario hace clic en el FAB y la ventana EXISTE y es VISIBLE
      if (stepIndex === 3 && chatWindow) {
        // Añadimos un pequeño delay de 100ms para asegurar que la ventana 
        // terminó de montarse antes de que Joyride la busque
        setTimeout(() => {
            setStepIndex(4)
        }, 100)
      }
    }, 400)

    return () => clearInterval(checkInteraction)
  }, [stepIndex])

  if (!mounted) return null

  return (
    <Joyride
      steps={steps}
      run={run}
      stepIndex={stepIndex}
      continuous
      showProgress
      showSkipButton
      disableScrolling={true}
      disableScrollParentFix={true}
      callback={handleJoyrideCallback}
      locale={{
        back: 'Anterior',
        close: 'Entendido',
        last: 'Finalizar',
        next: 'Siguiente',
        skip: 'Saltar guía'
      }}
      styles={{
        options: {
          primaryColor: '#9d2449',
          zIndex: 10000,
        },
        buttonNext: {
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '600'
        }
      }}
    />
  )
}