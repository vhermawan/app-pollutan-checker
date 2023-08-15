export const Loading = ({
  isLoading,
  className = 'min-h-screen',
  classNameText = 'text-black',
}) => {
  if (!isLoading) return null;

  return (
    <div className={`flex items-center justify-center ${className}`} data-testid="loading">
      <div className="w-8 h-8 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
      <p className={`ml-2 ${classNameText}`}>Loading...</p>
    </div>
  );
};
