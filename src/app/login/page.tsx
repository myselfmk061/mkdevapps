import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Admin Login</h1>
          <p className="text-foreground/80">Enter your credentials to access the admin dashboard.</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
