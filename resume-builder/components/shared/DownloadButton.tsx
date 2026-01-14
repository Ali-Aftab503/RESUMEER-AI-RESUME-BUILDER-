/**
 * Download Button Component
 * Generates and downloads resume as PDF
 */

'use client';

import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';
import { useResumeStore } from '@/store/resumeStore';
import { ModernTemplatePDF } from '@/components/templates/pdf/ModernTemplatePDF';
import { useState, useEffect } from 'react';

export function DownloadButton() {
  const { resumeData } = useResumeStore();
  const [isClient, setIsClient] = useState(false);
  const [debouncedData, setDebouncedData] = useState(resumeData);

  // Ensure component only renders on client to avoid SSR issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Debounce resume data updates to prevent PDF render crashes on rapid typing/empty states
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedData(resumeData);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, [resumeData]);

  // Generate filename from name and date
  const generateFilename = () => {
    const name = debouncedData.personal.fullName || 'Resume';
    const cleanName = name.replace(/[^a-zA-Z0-9]/g, '_');
    const date = new Date().toISOString().split('T')[0];
    return `${cleanName}_Resume_${date}.pdf`;
  };

  if (!isClient) {
    return (
      <Button disabled variant="outline" size="sm">
        <Download className="w-4 h-4 mr-2" />
        Download PDF
      </Button>
    );
  }

  return (
    <PDFDownloadLink
      document={<ModernTemplatePDF data={debouncedData} />}
      fileName={generateFilename()}
      className="inline-flex items-center"
    >
      {({ loading, error }) => (
        <Button
          disabled={loading}
          variant="default"
          size="sm"
          className="bg-blue-600 hover:bg-blue-700"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : error ? (
            <>
              <Download className="w-4 h-4 mr-2" />
              Try Again
            </>
          ) : (
            <>
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </>
          )}
        </Button>
      )}
    </PDFDownloadLink>
  );
}