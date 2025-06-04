import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <SignIn 
        appearance={{
          elements: {
            card: "shadow-lg",
            formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-sm",
            footerActionLink: "text-blue-600 hover:text-blue-700"
          }
        }}
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
        redirectUrl="/dashboard"
      />
    </div>
  );
} 