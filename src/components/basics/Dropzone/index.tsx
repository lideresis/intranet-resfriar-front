import { ReactNode, useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  selectedFiles: (uploadedFiles: FileProps[]) => void;
  children: ReactNode;
}

export interface FileProps extends File {
  name: string;
  preview?: string;
}

export const Dropzone = ({ children, selectedFiles }: Props) => {
  const onDrop = useCallback((acceptedFiles: FileProps[]) => {
    acceptedFiles.forEach((file: FileProps) => {
      file.preview = URL.createObjectURL(file);
    });

    selectedFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <input {...getInputProps()} />
      {children}
    </div>
  );
};
