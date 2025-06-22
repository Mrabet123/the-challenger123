"use client"

import { useTranslation } from "react-i18next"

interface ThankYouModalProps {
  message: string
  onClose: () => void
}

const ThankYouModal = ({ message, onClose }: ThankYouModalProps) => {
  const { t } = useTranslation()

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>🎉 {t("modal.welcome")}</h3>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
        <div className="modal-footer">
          <button className="modal-cta purple" onClick={onClose}>
            {t("buttons.letsGo")}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ThankYouModal
