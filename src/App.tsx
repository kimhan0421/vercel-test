import './App.css';
import { Button, Form, Input } from 'antd';
import { useOnLogin } from './services/auth';

function App() {
  const onLogin = useOnLogin();
  const [form] = Form.useForm<{
    id: string;
    password: string;
    nothing: string;
  }>();

  async function handleSubmit(e: any) {
    onLogin.mutate(e);
  }

  return (
    <div className='App' style={{ color: '#fff' }}>
      로그인
      <Form
        form={form}
        onFinish={value => {
          handleSubmit(value);
        }}
      >
        <Form.Item name='id' rules={[{ required: true }]} noStyle>
          <Input placeholder={'id'} style={{ marginBottom: 8 }} />
        </Form.Item>
        <Form.Item name='password' rules={[{ required: true }]} noStyle>
          <Input.Password
            placeholder={'password'}
            style={{ marginBottom: 8 }}
          />
        </Form.Item>

        <Form.Item noStyle>
          <Button
            htmlType='submit'
            loading={onLogin.isLoading}
            style={{ width: '100%', marginTop: 40 }}
          >
            login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
