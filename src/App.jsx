import { useEffect } from "react";
import Layout from "./layout/Layout.jsx";
import Router from "./routes/router.jsx";
import { setupDomainRedirect } from "./utils/domainRedirect";

function App() {
  useEffect(() => {
    setupDomainRedirect();
  }, []);

  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
