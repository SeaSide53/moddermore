import { Button } from '../ui/Button';
import { UploadIcon } from 'lucide-react';
import { Spinner } from './Spinner';

interface Props {
  submitting?: boolean;
  disabled?: boolean;
}

export const NewSubmitButton = ({ submitting, disabled }: Props) => {
  return (
    <Button type="submit" className="mt-14" disabled={disabled}>
      {submitting ? (
        <Spinner className="block w-4 h-4" />
      ) : (
        <UploadIcon className="block w-4 h-4" />
      )}
      <span>Submit</span>
    </Button>
  );
};
