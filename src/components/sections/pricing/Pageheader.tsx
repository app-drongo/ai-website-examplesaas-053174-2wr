'use client';

import { Button } from '@/components/ui/button';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PAGEHEADER = {
  title: 'Simple, Transparent Pricing',
  description:
    'Choose the perfect plan for your business. Start with our 14-day free trial and scale as you grow. No hidden fees, cancel anytime.',
  ctaText: 'Start Free Trial',
  ctaHref: '/pricing',
  hasBackground: false, // Toggle for background color
  stat1Label: 'Businesses Trust Us',
  stat1Value: '10K+',
  stat2Label: 'Time Saved Monthly',
  stat2Value: '80%',
  stat3Label: 'Platform Uptime',
  stat3Value: '99.9%',
  stat4Label: 'Tasks Automated',
  stat4Value: '500K+',
  showStats: true, // Toggle to show/hide stats
} as const;

type PageheaderProps = Partial<typeof DEFAULT_PAGEHEADER>;

export default function Pageheader(props: PageheaderProps) {
  const config = { ...DEFAULT_PAGEHEADER, ...props };
  const navigate = useSmartNavigation();

  return (
    <section className={`py-16 sm:py-24 ${config.hasBackground ? 'bg-muted' : 'bg-background'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Content */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight"
            data-editable="title"
          >
            {config.title}
          </h1>

          {/* Description */}
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            data-editable="description"
          >
            {config.description}
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              size="lg"
              className="px-8 py-6 text-base"
              onClick={() => navigate(config.ctaHref)}
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>

          {/* Optional Stats */}
          {config.showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t">
              <div>
                <div className="text-3xl font-bold text-foreground" data-editable="stat1Value">
                  {config.stat1Value}
                </div>
                <div className="text-sm text-muted-foreground mt-1" data-editable="stat1Label">
                  {config.stat1Label}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground" data-editable="stat2Value">
                  {config.stat2Value}
                </div>
                <div className="text-sm text-muted-foreground mt-1" data-editable="stat2Label">
                  {config.stat2Label}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground" data-editable="stat3Value">
                  {config.stat3Value}
                </div>
                <div className="text-sm text-muted-foreground mt-1" data-editable="stat3Label">
                  {config.stat3Label}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground" data-editable="stat4Value">
                  {config.stat4Value}
                </div>
                <div className="text-sm text-muted-foreground mt-1" data-editable="stat4Label">
                  {config.stat4Label}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
