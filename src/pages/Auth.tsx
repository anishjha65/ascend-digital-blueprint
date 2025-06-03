import AuthForm from '@/components/auth/AuthForm';
import SEOHead from '@/components/SEOHead';

const Auth = () => {
  return (
    <div>
      <SEOHead 
        title="Admin Login"
        description="Sign in to access the admin dashboard"
      />
      <div className="flex flex-col items-center mb-8">
        <img src="/logo.png" alt="Click Katha Logo" className="h-16 w-16 mb-4" />
      </div>
      <AuthForm />
    </div>
  );
};

export default Auth;
