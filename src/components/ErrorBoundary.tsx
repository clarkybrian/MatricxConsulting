import React from 'react'

interface Props {
  children: React.ReactNode
  /** Libellé de la zone protégée, utile dans les logs. */
  zone?: string
  /** Rendu de repli. Par défaut : rien du tout (la section disparaît). */
  fallback?: React.ReactNode
}

interface State {
  hasError: boolean
}

/**
 * Filet de sécurité global.
 *
 * Une exception levée pendant le render démonte tout l'arbre React et laisse
 * une page entièrement blanche — c'est exactement ce qui arrivait quand un
 * article Sanity contenait une image sans asset. Les causes connues sont
 * corrigées, mais du contenu saisi dans le Studio restera toujours capable de
 * produire une forme inattendue. Cette barrière garantit qu'un tel cas dégrade
 * une section au lieu de faire tomber le site entier.
 */
class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(`[ErrorBoundary${this.props.zone ? ` – ${this.props.zone}` : ''}]`, error, info.componentStack)
  }

  render() {
    if (!this.state.hasError) return this.props.children
    if (this.props.fallback !== undefined) return this.props.fallback
    return null
  }
}

export default ErrorBoundary

/**
 * Repli pleine page : conserve une sortie lisible et un chemin de retour
 * plutôt qu'un écran blanc.
 */
export const PageErrorFallback: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center px-6">
    <div className="text-center max-w-md">
      <h1 className="text-2xl font-bold text-gray-900 mb-3">
        Cette page n'a pas pu s'afficher
      </h1>
      <p className="text-gray-600 mb-6">
        Un contenu semble incomplet. Le reste du site fonctionne normalement.
      </p>
      <a
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Retour à l'accueil
      </a>
    </div>
  </div>
)
