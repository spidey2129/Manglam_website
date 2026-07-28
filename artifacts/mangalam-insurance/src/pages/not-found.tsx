import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { SiteLayout } from '@/components/layout';

export default function NotFound() {
  return (
    <SiteLayout>
      <div className="flex min-h-[70vh] w-full items-center justify-center bg-background px-4">
        <Card className="w-full max-w-md shadow-sm border-border">
          <CardContent className="pt-8 pb-8 flex flex-col items-center text-center">
            <AlertCircle className="h-12 w-12 text-secondary mb-4" />
            <h1 className="text-3xl font-display text-primary">
              Page Not Found
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              The page you are looking for doesn't exist or has been moved.
            </p>
          </CardContent>
        </Card>
      </div>
    </SiteLayout>
  );
}
