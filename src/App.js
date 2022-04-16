import "./App.css";
import Layout from "./components/Layout";
// import { Layout, Row, Col } from "antd";
function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <div className="App">
      <Layout>
        <h1>E Commerce</h1>
      </Layout>
    </div>
  );
}

export default App;
