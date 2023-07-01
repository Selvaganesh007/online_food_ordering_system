import { MdOutlineFastfood } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { MdOutlineSettings } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';


export const tabList = [
  {
    tabId: 'delivery',
    tabName: 'Delivery',
    tabIcon: <TbTruckDelivery />
  },
  {
    tabId: 'product',
    tabName: 'Product',
    tabIcon: <MdOutlineFastfood />,
  },
  {
    tabId: 'dash_board',
    tabName: 'Dash board',
    tabIcon: <RxDashboard />,
  },
  {
    tabId: 'settings',
    tabName: 'Settings',
    tabIcon: <MdOutlineSettings />,
  }
];

export const productTableColumn = [
  {
    title: "Product ID",
    dataIndex: "product_id",
    responsive: ["xs"]
  },
  {
    title: "Product Name",
    dataIndex: "product_name",
    sortDirections: ["descend", "ascend"],
    responsive: ["sm"]
  },
  {
    title: "Price",
    dataIndex: "product_price",
    sorter: (a, b) => a.to - b.to,
    sortDirections: ["descend", "ascend"],
    responsive: ["sm"]
  },
  {
    title: "Type",
    dataIndex: "product_type",
    sorter: (a, b) => a.subject.length - b.subject.length,
    sortDirections: ["descend", "ascend"]
  },
  {
    title: "Description",
    dataIndex: "description",
  }
];
