import { ConfigProvider, theme } from 'antd';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => (
  <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
      token: {
        colorPrimary: '#1890ff',
        colorBgBase: '#0a0a0a',
        colorTextBase: '#ffffff',
      },
    }}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  </ConfigProvider>
);

export default App;