import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <SignUp 
        appearance={{
          elements: {
            card: "shadow-lg",
            formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-sm",
            footerActionLink: "text-blue-600 hover:text-blue-700"
          }
        }}
        routing="path"
        path="/sign-up"
        signInUrl="/sign-in"
        redirectUrl="/dashboard"
      />
    </div>
  );
} 