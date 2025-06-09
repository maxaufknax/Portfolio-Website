import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff, Lock, Shield } from 'lucide-react';

interface PasswordProtectionProps {
  children: React.ReactNode;
  password?: string;
  disabled?: boolean;
}

export default function PasswordProtection({ 
  children, 
  password = "Maximilian2025", // Hardcoded for now to ensure it works
  disabled = false // Disabled only for debugging
}: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Debug: Log the password being used (remove in production)
  console.log('Expected password:', password);
  console.log('Environment variable:', import.meta.env.VITE_PORTFOLIO_PASSWORD);
  console.log('Dev mode:', import.meta.env.VITE_DEV_MODE);
  console.log('Mode:', import.meta.env.MODE);

  // If protection is disabled, show content directly
  if (disabled) {
    return <>{children}</>;
  }

  // Check if user is already authenticated (using localStorage)
  useEffect(() => {
    const authStatus = localStorage.getItem('portfolio_authenticated');
    const authTimestamp = localStorage.getItem('portfolio_auth_timestamp');
    
    if (authStatus === 'true' && authTimestamp) {
      // Check if authentication is still valid (24 hours)
      const twentyFourHours = 24 * 60 * 60 * 1000;
      const isExpired = Date.now() - parseInt(authTimestamp) > twentyFourHours;
      
      if (!isExpired) {
        setIsAuthenticated(true);
      } else {
        // Clear expired authentication
        localStorage.removeItem('portfolio_authenticated');
        localStorage.removeItem('portfolio_auth_timestamp');
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Debug: Log password comparison
    console.log('Input password:', inputPassword);
    console.log('Expected password:', password);
    console.log('Passwords match:', inputPassword === password);

    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    if (inputPassword === password) {
      setIsAuthenticated(true);
      localStorage.setItem('portfolio_authenticated', 'true');
      localStorage.setItem('portfolio_auth_timestamp', Date.now().toString());
      setInputPassword('');
    } else {
      setError('Falsches Passwort. Bitte versuche es erneut.');
      setInputPassword('');
    }
    
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e as any);
    }
  };

  // If authenticated, show the main content
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Show password protection screen
  return (
    <div className="min-h-screen bg-background text-foreground font-inter flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full max-w-md px-4">
        <Card className="glassmorphism-strong border-2 border-primary/20 shadow-2xl">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl font-black text-gradient mb-2">
                Portfolio Zugang
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Bitte gib das Passwort ein, um das Portfolio zu betreten
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-semibold flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Passwort
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Passwort eingeben..."
                    className="pr-12 border-2 border-primary/20 focus:border-primary/40 glassmorphism"
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <Eye className="w-4 h-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              {error && (
                <Alert variant="destructive" className="glassmorphism border-red-500/30">
                  <AlertDescription className="text-sm">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                disabled={isLoading || !inputPassword.trim()}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Überprüfe...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4" />
                    Portfolio betreten
                  </div>
                )}
              </Button>
            </form>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                Diese Seite ist passwortgeschützt
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Authentifizierung bleibt 24 Stunden gültig
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Additional info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground glassmorphism px-4 py-2 rounded-full border border-primary/20 inline-block">
            Max Paasch Portfolio • Mediendesigninformatik
          </p>
        </div>
      </div>
    </div>
  );
}
