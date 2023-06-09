import { Form, Input, Card, Button, Space, Col } from "antd";
import { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addUserAction } from "../redux/action";
import UserItem from "./UserItem";

function UserList() {
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.userList);
  const [editingItem, setEditingItem] = useState(null);

  const renderUserList = () => {
    return userList.map((item) => {
      const { id, name, age, salary } = item;
      const isEditing = editingItem && editingItem.id === id;

      return (
        <Fragment key={item.id}>
          <UserItem
            id={item.id}
            name={item.name}
            age={item.age}
            salary={item.salary}
          />
        </Fragment>
      );
    });
  };
  return (
    <div>
      <Card
        size="small"
        style={{
          border: "1px solid black",
          padding: "8px",
          margin: "8px",
          textAlign: "center",
          width: "500px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>USERS</h1>
        <Form
          name="addUser"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          onFinish={(values) => dispatch(addUserAction(values))}
        >
          <Form.Item
            label="Name"
            name="name"
            validateFirst
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Name là bắt buộc!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            validateFirst
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Age là bắt buộc!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Salary"
            name="salary"
            validateFirst
            rules={[
              {
                required: true,
                whitespace: true,
                message: "salary là bắt buộc!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" block>
              Add
            </Button>
            <Button disabled block>
              Reset form
            </Button>
          </Space>
        </Form>
      </Card>
      <h2>List of Users</h2>
      <div>{renderUserList()}</div>
    </div>
  );
}

export default UserList;
