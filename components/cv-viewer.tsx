"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, FileText } from "lucide-react"

interface CVViewerProps {
  cvUrl?: string
  cvFileName?: string
}

export function CVViewer({ cvUrl = "/cv.pdf", cvFileName = "Luis Morla - Technical Support Specialist.pdf" }: CVViewerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = cvUrl
    link.download = cvFileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewInNewTab = () => {
    window.open(cvUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <>
      <Button
        variant="outline"
        className="border-primary text-primary hover:bg-primary/10 font-mono text-sm bg-transparent"
        onClick={() => setIsOpen(true)}
      >
        <FileText className="mr-2 h-4 w-4" />
        Resume
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>My Resume</DialogTitle>
            <DialogDescription>
              View or download my resume
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 overflow-hidden rounded-lg border border-border bg-background">
            <iframe
              src={`${cvUrl}#toolbar=0`}
              className="w-full h-full min-h-[600px]"
              title="CV Preview"
            />
          </div>

          <div className="flex gap-3 justify-end pt-4 border-t border-border">
            <Button
              variant="outline"
              onClick={handleViewInNewTab}
              className="font-mono"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View in New Tab
            </Button>
            <Button
              onClick={handleDownload}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

// Componente simplificado para usar como botón
export function CVViewerButton({ 
  cvUrl = "/cv.pdf", 
  cvFileName = "Luis Morla - Technical Support Specialist.pdf",
  variant = "outline",
  size,
  className = "",
  children
}: CVViewerProps & {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  children?: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = cvUrl
    link.download = cvFileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewInNewTab = () => {
    window.open(cvUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() => setIsOpen(true)}
      >
        {children || "Resume"}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>My Resume</DialogTitle>
            <DialogDescription>
              View or download my resume
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 overflow-hidden rounded-lg border border-border bg-background">
            <iframe
              src={`${cvUrl}#toolbar=0`}
              className="w-full h-full min-h-[600px]"
              title="CV Preview"
            />
          </div>

          <div className="flex gap-3 justify-end pt-4 border-t border-border">
            <Button
              variant="outline"
              onClick={handleViewInNewTab}
              className="font-mono"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View in New Tab
            </Button>
            <Button
              onClick={handleDownload}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

