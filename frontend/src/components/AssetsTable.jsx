import { Table } from 'antd';
import {useAssets} from "../store/useStore.js";
// import { useCrypto } from '../context/crypto-context.jsx';


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
  // const { assets } = useCrypto();
  const assets = useAssets();

  const data = assets.map((asset) => ({
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
