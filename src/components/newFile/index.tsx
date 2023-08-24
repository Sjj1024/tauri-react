import { Input, Modal } from 'antd';
import "./index.scss"


export default function NewFile({ isShow, setShow, newType }) {

  const handleOk = () => {
    setShow(false);
  };

  const handleCancel = () => {
    setShow(false);
    console.log("newType", newType);
  };


  return (
    <div>
      <Modal title={newType === 1 ? "新建文件" : "新建文件夹"} open={isShow} onOk={handleOk} onCancel={handleCancel} >
        <div className='content'>
          {newType === 1 ?
            <div className='form-line'><span className='label'>文件名:</span><Input placeholder="请输入文件名" /></div> :
            <>
              <div className='form-line'><span className='label'>文件夹:</span><Input placeholder="请输入文件夹名称" /></div>
              <div className='form-line'><span className='label'>描&nbsp;&nbsp;&nbsp;&nbsp;述:</span>
                <Input placeholder="请输入描述内容" /></div>
            </>}
        </div>
      </Modal>
    </div>
  )
}
