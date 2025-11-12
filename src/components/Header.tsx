import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-elegant-black/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h1 className="text-xl font-display font-bold text-primary">
          Royal Event Organizer
        </h1>
        <LanguageSwitcher />
      </div>
    </header>
  );
};
