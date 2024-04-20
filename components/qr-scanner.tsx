"use client";

import QrScannerLib from "qr-scanner";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

type Props = {
    onScanSuccess?: (result: QrScannerLib.ScanResult) => void;
    className?: string;
}

const QrScanner:React.FC<Props> = (
    { onScanSuccess, className }
) => {
  const scanner = useRef<QrScannerLib>();
  const videoEl = useRef<HTMLVideoElement>(null);
  const [showScanner, setShowScanner] = useState<boolean>(true);

  // Result
  const [scannedResult, setScannedResult] = useState<string | undefined>("");

  const startScanner = async() => {
    try {
        await scanner?.current?.start();
        setShowScanner(true);
    } catch (error) {
        setShowScanner(false);
    }
  }

  // Success
  const handleScanSucess = (result: QrScannerLib.ScanResult) => {
    // 🖨 Print the "result" to browser console.
    console.log(result);
    // ✅ Handle success.
    // 😎 You can do whatever you want with the scanned result.
    setScannedResult(result?.data);
    onScanSuccess && onScanSuccess(result);
    scanner?.current?.stop();
    setShowScanner(false);
  };

  // Fail
  const onScanFail = (err: string | Error) => {
    // 🖨 Print the "err" to browser console.
    console.log(err);
  };

  useEffect(() => {
    if (videoEl?.current && !scanner.current) {
      // 👉 Instantiate the QR Scanner
      scanner.current = new QrScannerLib(videoEl?.current, handleScanSucess, {
        onDecodeError: onScanFail,
        // 📷 This is the camera facing mode. In mobile devices, "environment" means back camera and "user" means front camera.
        preferredCamera: "environment",
        // 🖼 This will help us position our "QrFrame.svg" so that user can only scan when qr code is put in between our QrFrame.svg.
        highlightScanRegion: true,
        // 🔥 This will produce a yellow (default color) outline around the qr code that we scan, showing a proof that our qr-scanner is scanning that qr code.
        highlightCodeOutline: true,
        // 📦 A custom div which will pair with "highlightScanRegion" option above 👆. This gives us full control over our scan region.
        //   overlay: qrBoxEl?.current || undefined,
      });

      const initializeScan = async () => {
        try {
          await startScanner();
        } catch (error) {
          setShowScanner(false);
        }
      }

    initializeScan();
    }

    // 🧹 Clean up on unmount.
    // 🚨 This removes the QR Scanner from rendering and using camera when it is closed or removed from the UI.
    return () => {
      const videoElement = videoEl.current;
      if (!videoElement) {
        scanner?.current?.stop();
      }
    };
  }, []);
  return (
    <div>
      {showScanner && 
        <div className={className}>
          <video ref={videoEl} className='h-full' />
        </div>
      }
      {scannedResult && <p>{scannedResult}</p>}

      {!showScanner && (
        <Button
          onClick={async() => {
            // reload the page as a temporary solution
            // to restart the scanner.
            window.location.reload();
            await startScanner();
          }}
        >
          Scan Again
        </Button>
      )}
    </div>
  );
};

export default QrScanner;
