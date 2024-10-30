import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface VerificationRequestProps {
  onSubmit: (documents: { type: string; file: any }[]) => void;
}

export function VerificationRequest({ onSubmit }: VerificationRequestProps) {
  const [documents, setDocuments] = React.useState<{ type: string; file: any }[]>([]);

  return (
    <stackLayout style={styles.container}>
      <label className="text-xl font-bold mb-4">Identity Verification</label>
      
      <label className="text-gray-600 mb-4">
        Please provide one of the following documents to verify your identity:
      </label>

      <button
        className="btn btn-primary mb-2"
        onTap={() => {
          // Handle document upload
          console.log("Upload ID");
        }}
      >
        Upload Government ID
      </button>

      <button
        className="btn btn-primary mb-2"
        onTap={() => {
          // Handle passport upload
          console.log("Upload Passport");
        }}
      >
        Upload Passport
      </button>

      <button
        className="btn btn-primary"
        onTap={() => {
          // Handle driver's license upload
          console.log("Upload Driver's License");
        }}
      >
        Upload Driver's License
      </button>

      {documents.length > 0 && (
        <button
          className="btn btn-success mt-4"
          onTap={() => onSubmit(documents)}
        >
          Submit for Verification
        </button>
      )}
    </stackLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});