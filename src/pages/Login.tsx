import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockKeyhole, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ADMIN_EMAIL, ADMIN_PASSWORD, isAdminAuthenticated, setAdminSession } from "@/lib/admin-auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAdminAuthenticated()) {
      navigate("/admin", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setAdminSession();
      navigate("/admin", { replace: true });
      return;
    }

    setError("Invalid admin credentials.");
  };

  return (
    <main className="min-h-screen bg-background bg-dots px-4 py-10 text-foreground">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-md items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full rounded-lg border border-border bg-card/85 p-6 shadow-[0_0_36px_rgba(0,0,0,0.28)] backdrop-blur"
        >
          <div className="mb-7">
            <p className="text-sm text-foreground/60">Portfolio admin</p>
            <h1 className="mt-2 text-3xl font-semibold">Sign in</h1>
          </div>

          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-foreground/75">Email</span>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/45" />
              <Input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="pl-9"
                type="text"
                inputMode="email"
                autoComplete="email"
                required
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-foreground/75">Password</span>
            <div className="relative">
              <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/45" />
              <Input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="pl-9"
                type="password"
                autoComplete="current-password"
                required
              />
            </div>
          </label>

          {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

          <Button className="mt-7 w-full" type="submit">
            Enter panel
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Login;
