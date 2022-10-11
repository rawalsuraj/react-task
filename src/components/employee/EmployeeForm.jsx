import { Form, Input, InputNumber, DatePicker, Upload, Button, message } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { MasterAPICall } from "../../api/master.api";

const EmployeeForm = (props) => {
  const history = useHistory();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([])

  const onFinish = (values) => {
    const url = "/employees";
    const formData = new FormData()
        Object.keys(values).forEach((key) => {
            formData.append(key, values[key])
        })
        if (fileList.length > 0) {
            formData.append("photo", fileList[0].originFileObj)
        }
    MasterAPICall(url, values)
      .then(() => {
        form.resetFields();
        setFileList([]);
        message.success("Employee Created Successfully", 3, () => {
          history.push("/");
        });
      }).catch(error => console.log(error))
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleUpload = ({ fileList }) => {
    setFileList(fileList)
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={props.initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            pattern: new RegExp(
              /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/i
            ),
            message: 'This field is required',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Age"
        name="age"
        rules={[
          {
            required: true,
            message: 'This field is required',
          },
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: 'email',
            required: true,
            message: 'This field is required',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="dob" label="Date Of Birth" >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
      >
        <Input />
      </Form.Item>

      <Upload
        listType="picture-card"
        fileList={fileList}
        onChange={handleUpload}
        beforeUpload={() => false} // return false so that antd doesn't upload the picture right away
      >
        <div>
          <div className="ant-upload-text">Upload</div>
        </div>
      </Upload>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EmployeeForm;
