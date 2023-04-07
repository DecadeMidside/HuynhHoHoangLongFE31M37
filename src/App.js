import UserList from "./users/index";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "Green",
        },
      }}
    >
      {" "}
      <UserList />{" "}
    </ConfigProvider>
  );
}

export default App;
