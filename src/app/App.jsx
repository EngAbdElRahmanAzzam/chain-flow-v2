//core imports
import { useMemo } from 'react';

//third-party
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Provider } from 'react-redux';

//client imports
import { store } from '../Shared/redux/store';
import "../App.css";
import { routes } from '../router/router.config';

export default function App() {
  const queryClient = useMemo(() => new QueryClient(), []);


  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={routes} />
      </QueryClientProvider>
    </Provider>
  );
}
