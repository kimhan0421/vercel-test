import { Button, Form, Input } from 'antd';
import { useOnLogin } from './services/auth';

export default function LoginForm() {
  const [form] = Form.useForm<{
    id: string;
    password: string;
    isStayAuth: string;
    nothing: string;
  }>();

  const onLogin = useOnLogin();

  async function handleSubmit(e: any) {
    onLogin.mutate(e);
  }

  async function handleValidates() {
    try {
      await form.validateFields();
    } catch (errorInfo: any) {
      console.log('loginform error', errorInfo);
    }
  }
  return (
    <Form
      form={form}
      style={{ width: '400px' }}
      size='large'
      onFinish={value => {
        handleSubmit(value);
      }}
      onValuesChange={handleValidates}
    >
      <Form.Item name='id' rules={[{ required: true }]} noStyle>
        <Input placeholder={'id'} style={{ marginBottom: 8 }} />
      </Form.Item>
      <Form.Item name='password' rules={[{ required: true }]} noStyle>
        <Input.Password placeholder={'password'} style={{ marginBottom: 8 }} />
      </Form.Item>

      <Form.Item noStyle>
        <Button
          htmlType='submit'
          style={{ width: '100%', marginTop: 40 }}
          loading={onLogin.isLoading}
        >
          login
        </Button>
      </Form.Item>
    </Form>
  );
}
