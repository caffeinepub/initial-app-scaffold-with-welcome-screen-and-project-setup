import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Sparkles, Users, Lightbulb, CheckCircle2, Rocket } from 'lucide-react';
import { useBackendStatus } from './hooks/useQueries';

interface AppDefinition {
  idea: string;
  targetUsers: string;
  keyFeatures: string;
}

function App() {
  const [formData, setFormData] = useState<AppDefinition>({
    idea: '',
    targetUsers: '',
    keyFeatures: ''
  });
  const [submittedData, setSubmittedData] = useState<AppDefinition | null>(null);
  const { data: backendStatus, isLoading: statusLoading } = useBackendStatus();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const handleReset = () => {
    setFormData({ idea: '', targetUsers: '', keyFeatures: '' });
    setSubmittedData(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-accent/5">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Rocket className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">AppBuilder</h1>
              <p className="text-xs text-muted-foreground">Shape your vision</p>
            </div>
          </div>
          {!statusLoading && backendStatus && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="hidden sm:inline">{backendStatus}</span>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-accent-foreground text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Welcome to AppBuilder
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Define Your Next Big Idea
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start by describing your app concept. We'll help you organize your thoughts and bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Form Card */}
            <Card className="shadow-lg border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Tell Us About Your App
                </CardTitle>
                <CardDescription>
                  Fill in the details below to define your application concept
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="idea" className="text-sm font-medium flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      App Idea
                    </Label>
                    <Input
                      id="idea"
                      placeholder="e.g., A social platform for book lovers"
                      value={formData.idea}
                      onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                      required
                      className="transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="targetUsers" className="text-sm font-medium flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Target Users
                    </Label>
                    <Input
                      id="targetUsers"
                      placeholder="e.g., Avid readers aged 18-45"
                      value={formData.targetUsers}
                      onChange={(e) => setFormData({ ...formData, targetUsers: e.target.value })}
                      required
                      className="transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="keyFeatures" className="text-sm font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Key Features
                    </Label>
                    <Textarea
                      id="keyFeatures"
                      placeholder="e.g., Book reviews, reading lists, community discussions"
                      value={formData.keyFeatures}
                      onChange={(e) => setFormData({ ...formData, keyFeatures: e.target.value })}
                      required
                      rows={4}
                      className="transition-all focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button type="submit" className="flex-1 shadow-md hover:shadow-lg transition-all">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Preview Concept
                    </Button>
                    {submittedData && (
                      <Button type="button" variant="outline" onClick={handleReset}>
                        Reset
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Preview Card */}
            <Card className="shadow-lg border-border/50 bg-gradient-to-br from-card to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-primary" />
                  Your App Concept
                </CardTitle>
                <CardDescription>
                  {submittedData ? 'Here\'s your app definition' : 'Your preview will appear here'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submittedData ? (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        <Sparkles className="w-4 h-4" />
                        App Idea
                      </div>
                      <p className="text-foreground pl-6 leading-relaxed">{submittedData.idea}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        <Users className="w-4 h-4" />
                        Target Users
                      </div>
                      <p className="text-foreground pl-6 leading-relaxed">{submittedData.targetUsers}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        <CheckCircle2 className="w-4 h-4" />
                        Key Features
                      </div>
                      <p className="text-foreground pl-6 leading-relaxed whitespace-pre-line">{submittedData.keyFeatures}</p>
                    </div>

                    <Alert className="bg-primary/5 border-primary/20">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <AlertDescription className="text-sm">
                        Great start! Your app concept is taking shape.
                      </AlertDescription>
                    </Alert>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center">
                      <Rocket className="w-8 h-8 text-muted-foreground/50" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">No concept yet</p>
                      <p className="text-xs text-muted-foreground/70 max-w-xs">
                        Fill out the form on the left and click "Preview Concept" to see your app definition here
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026. Built with ❤️ using <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">caffeine.ai</a></p>
            <div className="flex items-center gap-4">
              <span className="text-xs">Powered by Internet Computer</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
