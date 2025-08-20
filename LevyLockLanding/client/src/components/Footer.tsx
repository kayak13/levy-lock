export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-4" data-testid="text-footer-logo">
            LevyLock™
          </div>
          <div className="flex justify-center space-x-6 text-sm text-gray-600">
            <a 
              href="#" 
              className="hover:text-gold transition-colors"
              data-testid="link-terms"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="hover:text-gold transition-colors"
              data-testid="link-privacy"
            >
              Privacy Policy
            </a>
          </div>
          <div className="mt-4 text-sm text-gray-500" data-testid="text-copyright">
            © {currentYear} LevyLock™. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
