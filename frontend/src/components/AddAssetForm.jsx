import {
  Button,
  DatePicker,
  Divider,
  Form,
  InputNumber,
  Result,
  Select,
  Space
} from 'antd';
import { useCrypto } from '../context/crypto-context.jsx';
import { useRef, useState } from 'react';
import { CoinInfo } from './CoinInfo.jsx';

const validateMessages = {
  required: '${label} is required!',
  types: {
    number: '${label} is not valid number'
  },
  number: {
    range: '${label} must be between ${min} and ${max}'
  }
};

export const AddAssetForm = ({ onClose }) => {
  const [form] = Form.useForm();
  const { crypto, addAsset } = useCrypto();
  const [coin, setCoin] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const assetRef = useRef();

  if (submitted) {
    return (
      <Result
        status="success"
        title="New Asset Added Successfully!"
        subTitle={`Added ${assetRef.current.amount}${coin.symbol} by price ${assetRef.current.price} to your wallet.`}
        extra={[
          <Button type="primary" key="console" onClick={onClose}>
            Close
          </Button>
        ]}
      />
    );
  }

  if (!coin) {
    return (
      <>
        <Select
          style={{ width: '100%' }}
          onSelect={value => setCoin(crypto.find(c => c.id === value))}
          placeholder="Select coin"
          options={crypto.map(coin => ({
            label: coin.name,
            value: coin.id,
            icon: coin.icon
          }))}
          optionRender={option => (
            <Space>
              <img
                style={{ width: 20 }}
                src={option.data.icon}
                alt={option.data.label}
              />{' '}
              {option.data.label}
            </Space>
          )}
        />
      </>
    );
  }

  const onFinish = values => {
    const newAsset = {
      id: coin.id,
      amount: values.amount,
      price: values.price,
      date: values.date?.$d ?? new Date()
    };
    assetRef.current = newAsset;
    setSubmitted(true);
    addAsset(newAsset);
  };

  const handleAmountChange = value => {
    const price = form.getFieldValue('price');
    const total = +(value * price).toFixed(2);
    form.setFieldsValue({ total });
  };
  const handlePriceChange = value => {
    const amount = form.getFieldValue('amount');
    const total = +(amount * value).toFixed(2);
    form.setFieldsValue({ total });
  };
  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 10 }}
      style={{ maxWidth: 600 }}
      initialValues={{
        amount: 0,
        price: +coin.price.toFixed(2),
        // date: new Date(),
        total: 0
      }}
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <CoinInfo coin={coin} />
      <Divider />

      <Form.Item
        label="Amount"
        name="amount"
        rules={[{ required: true, type: 'number', min: 0 }]}
      >
        <InputNumber
          placeholder="Enter coin amount"
          onChange={handleAmountChange}
          style={{ width: '100%' }}
        />
      </Form.Item>
      <Form.Item label="Price" name="price">
        <InputNumber onChange={handlePriceChange} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Date & Time" name="date">
        <DatePicker showTime />
      </Form.Item>
      <Form.Item label="Total" name="total">
        <InputNumber disabled style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Add Asset
        </Button>
      </Form.Item>
    </Form>
  );
};
