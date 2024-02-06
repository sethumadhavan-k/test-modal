import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Page = () => {
  return (
    <div>
      <Link to="/modal">Modal</Link>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => {
        return (
          <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        );
      })}
    </div>
  );
};

export default Page;
