export const ErrorFallback = ({ error }: { error: Error }) => {
  return (
    <div className="py-4 text-center text-red-500">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
};
