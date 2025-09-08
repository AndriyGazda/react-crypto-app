import { Table } from 'antd';
import { useCrypto } from '../context/crypto-context.jsx';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    showSorterTooltip: { target: 'full-header' },
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend']
  },
  {
    title: 'Price, $',
    dataIndex: 'price',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.price - b.price
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.amount - b.amount
  }
];

export const AssetsTable = () => {
  const { assets } = useCrypto();

  const data = assets.map((asset, index) => ({
    key: asset.id,
    name: asset.name,
    price: asset.price,
    amount: asset.amount
  }));

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};
