import { FileProps } from '../Dropzone';

interface Props {
  file: FileProps;
}

export const PdfPreview = ({ file }: Props) => {
  console.log('file', file);

  return (
    <object width="100%" height="300" data={file.preview} type="application/pdf">
      {' '}
    </object>
  );
};
