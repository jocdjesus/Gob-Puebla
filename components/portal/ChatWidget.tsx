//components/portal/ChatWidget.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const botResponses: Record<string, string> = {
  'licencia': 'Para renovar tu licencia de conducir, puedes hacerlo en línea en tramites.puebla.gob.mx o acudir a cualquier módulo de la Secretaría de Movilidad. Necesitas: identificación oficial, comprobante de domicilio y aprobar el examen de la vista.',
  'predial': 'Puedes pagar tu predial en línea en finanzas.puebla.gob.mx, en las oficinas de la Secretaría de Finanzas, o en tiendas de conveniencia autorizadas. Recuerda que hay descuentos por pronto pago en enero.',
  'horarios': 'Las oficinas de gobierno atienden de lunes a viernes de 9:00 a 15:00 hrs. Algunos módulos de atención ciudadana tienen horario extendido hasta las 18:00 hrs.',
  'curp': 'Para obtener tu CURP puedes: 1) Descargarla gratis en gob.mx/curp, 2) Acudir al Registro Civil, o 3) Solicitarla en cualquier módulo de atención ciudadana. Es gratuita y no requiere cita.',
  'default': 'Gracias por tu mensaje. Un asesor del Gobierno de Puebla te atenderá pronto. Mientras tanto, puedes consultar nuestro catálogo de trámites en tramites.puebla.gob.mx o llamar a la Línea Ciudadana 072.'
}

function getBotResponse(message: string): string {
  const lowerMessage = message.toLowerCase()
  if (lowerMessage.includes('licencia') || lowerMessage.includes('renovar')) return botResponses['licencia']
  if (lowerMessage.includes('predial') || lowerMessage.includes('pago') || lowerMessage.includes('impuesto')) return botResponses['predial']
  if (lowerMessage.includes('horario') || lowerMessage.includes('atención') || lowerMessage.includes('abierto')) return botResponses['horarios']
  if (lowerMessage.includes('curp') || lowerMessage.includes('requisitos')) return botResponses['curp']
  return botResponses['default']
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: '¡Hola! Soy el asistente virtual del Gobierno de Puebla. ¿En qué puedo ayudarte hoy?',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
      inputRef.current?.focus()
    }
  }, [messages, isOpen])

  const sendMessage = (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getBotResponse(content),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1200)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(inputValue)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <>
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)} 
          className="index-chat-fab"
          aria-label="Abrir chat de asistencia ciudadana"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="index-notification-dot">
            <span className="index-dot-ping"></span>
            <span className="index-dot-core"></span>
          </span>
        </button>
      )}

      {isOpen && (
        <div 
          className="index-chat-window" 
          role="dialog" 
          aria-modal="true" 
          aria-label="Ventana de chat de asistencia ciudadana"
        >
          <div className="index-chat-header">
            <div className="index-bot-info">
              <div className="index-bot-avatar">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h2 className="index-acc-title" style={{color: 'white', fontSize: '14px', margin: 0}}>Asistente Puebla</h2>
                <div className="index-status-indicator">
                  <span className="index-status-dot" />
                  En línea
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="index-acc-close" 
              style={{color: 'white'}}
              aria-label="Cerrar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="index-chat-messages" aria-live="polite">
            {messages.map((message) => (
              <div key={message.id} className={`index-message-row ${message.role === 'user' ? 'index-message-row-user' : ''}`}>
                <div className={`index-user-avatar ${message.role === 'user' ? 'index-avatar-user' : 'index-avatar-assistant'}`}>
                  {message.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: message.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '80%' }}>
                  <div className={`index-message-bubble ${message.role === 'user' ? 'index-bubble-user' : 'index-bubble-assistant'}`}>
                    {message.content}
                  </div>
                  <span className="index-message-time">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="index-message-row" aria-label="El asistente está escribiendo">
                <div className="index-user-avatar index-avatar-assistant">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="index-message-bubble index-bubble-assistant">
                  <div className="index-typing-dots">
                    <span className="index-dot" style={{ animationDelay: '0ms' }} />
                    <span className="index-dot" style={{ animationDelay: '150ms' }} />
                    <span className="index-dot" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="index-chat-footer">
            <div className="index-input-group">
              <label htmlFor="chat-input" className="sr-only">Escribe tu mensaje</label>
              <input
                id="chat-input"
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="index-chat-input"
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="index-send-btn"
                aria-label="Enviar mensaje"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}