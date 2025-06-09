import React from 'react';
import { Button } from '@/components/ui/button';
import { LogOut, Shield } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface PasswordAdminProps {
  onLogout?: () => void;
}

export default function PasswordAdmin({ onLogout }: PasswordAdminProps) {
  const handleLogout = () => {
    // Clear authentication
    localStorage.removeItem('portfolio_authenticated');
    localStorage.removeItem('portfolio_auth_timestamp');
    
    // Call custom logout handler if provided
    if (onLogout) {
      onLogout();
    } else {
      // Reload page to show password protection again
      window.location.reload();
    }
  };

  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('portfolio_authenticated') === 'true';
  const authTimestamp = localStorage.getItem('portfolio_auth_timestamp');
  
  if (!isAuthenticated) {
    return null;
  }

  const authTime = authTimestamp ? new Date(parseInt(authTimestamp)) : null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="glassmorphism-strong border border-primary/20 rounded-xl p-3 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-green-500" />
            <span>Angemeldet</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
        
        {authTime && (
          <p className="text-xs text-muted-foreground/70 mt-1">
            Seit {authTime.toLocaleTimeString('de-DE')}
          </p>
        )}
      </div>
    </div>
  );
}
