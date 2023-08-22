import { observer } from "mobx-react-lite"
import "./index.scss"
import { Button, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Common from "./components/common";
import Fileset from "./components/fileset";
import Imgset from "./components/imgset";
import { useNavigate } from "react-router-dom";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `通用设置`,
    children: <Common />,
  },
  {
    key: '2',
    label: `图床设置`,
    children: <Imgset />,
  },
  {
    key: '3',
    label: `文件设置`,
    children: <Fileset />,
  },
];



function Setting() {

  const navigate = useNavigate()

  const saveToDoc = () => {
    console.log("保存设置并回到文件列表");
    navigate("/notes", { replace: true })
  }

  const operations = <Button onClick={saveToDoc}>保存并退出</Button>;

  return (
    <div className="set-main">
      <Tabs defaultActiveKey="1" tabBarExtraContent={operations} items={items} onChange={onChange} />
    </div>
  )
}


export default observer(Setting)