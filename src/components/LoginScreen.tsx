import { Brain, Mail, Lock, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple UI navigation - no real auth
    navigate("/");
  };

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden">
      {/* AI Pattern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/20">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-accent animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col items-center justify-center p-8 space-y-8">
        {/* Logo & Title */}
        <div className="text-center space-y-4">
          <div className="relative inline-block">
            <Brain className="h-20 w-20 text-white mx-auto" />
            <div className="absolute inset-0 bg-accent blur-2xl opacity-50 animate-pulse" />
            <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-accent animate-pulse" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">FaceMark AI</h1>
            <p className="text-white/80 text-sm">Smart Attendance System</p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="w-full space-y-4">
          <div className="space-y-4 bg-white/95 backdrop-blur-lg p-6 rounded-3xl shadow-2xl">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                Teacher Email
              </label>
              <Input
                type="email"
                placeholder="teacher@school.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl border-2 focus:border-primary"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Lock className="h-4 w-4 text-primary" />
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-xl border-2 focus:border-primary"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-xl text-base font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all"
            >
              Login
            </Button>

            <div className="text-center">
              <button
                type="button"
                className="text-sm text-primary hover:text-accent transition-colors"
              >
                Forgot Password?
              </button>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center text-white/60 text-xs">
          <p>Powered by Advanced AI Face Recognition</p>
        </div>
      </div>
    </div>
  );
};
