import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import CustomButton from './components/CustomButton';
import ReactButton from './components/ReactButton';

function App() {
  const onClick = () => {
    alert('Clicked!')
  }

  return (
    <div className="App">
      <h1>Bootstrap</h1>
      <h3>리액트 부트스트랩 버튼</h3>
      <ReactButton />
      
      <hr />
      <h3>기본 버튼</h3>
      <Button style="success" size="lg" />
      <hr />
      <>커스텀버튼</>
      <h2>sm</h2>
      <div className='d-flex justify-content-between align-items-center'>
        <CustomButton text='primary' btnStyle='primary' btnSize='sm'  onClick={onClick} />
        <CustomButton text='secondary' btnStyle='secondary' btnSize='sm'  onClick={onClick} />
        <CustomButton text='success' btnStyle='success' btnSize='sm'  onClick={onClick} />
        <CustomButton text='danger' btnStyle='danger' btnSize='sm'  onClick={onClick} />
        <CustomButton text='warning' btnStyle='warning' btnSize='sm'  onClick={onClick} />
        <CustomButton text='info' btnStyle='info' btnSize='sm'  onClick={onClick} />
        <CustomButton text='light' btnStyle='light' btnSize='sm'  onClick={onClick} />
        <CustomButton text='dark' btnStyle='dark' btnSize='sm'  onClick={onClick} />
      </div>
      <h2>md</h2>
      <div className='d-flex justify-content-between align-items-center'>
        <CustomButton text='primary' btnStyle='primary' btnSize='md'  onClick={onClick} />
        <CustomButton text='secondary' btnStyle='secondary' btnSize='md'  onClick={onClick} />
        <CustomButton text='success' btnStyle='success' btnSize='md'  onClick={onClick} />
        <CustomButton text='danger' btnStyle='danger' btnSize='md'  onClick={onClick} />
        <CustomButton text='warning' btnStyle='warning' btnSize='md'  onClick={onClick} />
        <CustomButton text='info' btnStyle='info' btnSize='md'  onClick={onClick} />
        <CustomButton text='light' btnStyle='light' btnSize='md'  onClick={onClick} />
        <CustomButton text='dark' btnStyle='dark' btnSize='md'  onClick={onClick} />
      </div>
      <h2>lg</h2>
      <div className='d-flex justify-content-between align-items-center'>
        <CustomButton text='primary' btnStyle='primary' btnSize='lg'  onClick={onClick} />
        <CustomButton text='secondary' btnStyle='secondary' btnSize='lg'  onClick={onClick} />
        <CustomButton text='success' btnStyle='success' btnSize='lg'  onClick={onClick} />
        <CustomButton text='danger' btnStyle='danger' btnSize='lg'  onClick={onClick} />
        <CustomButton text='warning' btnStyle='warning' btnSize='lg'  onClick={onClick} />
        <CustomButton text='info' btnStyle='info' btnSize='lg'  onClick={onClick} />
        <CustomButton text='light' btnStyle='light' btnSize='lg'  onClick={onClick} />
        <CustomButton text='dark' btnStyle='dark' btnSize='lg'  onClick={onClick} />
      </div>
      <h2>xl</h2>
      <div class="d-grid gap-2 col-6 mx-auto">
        <CustomButton text='primary' btnStyle='primary' btnSize='xl'  onClick={onClick} />
        <CustomButton text='secondary' btnStyle='secondary' btnSize='xl'  onClick={onClick} />
        <CustomButton text='success' btnStyle='success' btnSize='xl'  onClick={onClick} />
        <CustomButton text='danger' btnStyle='danger' btnSize='xl'  onClick={onClick} />
        <CustomButton text='warning' btnStyle='warning' btnSize='xl'  onClick={onClick} />
        <CustomButton text='info' btnStyle='info' btnSize='xl'  onClick={onClick} />
        <CustomButton text='light' btnStyle='light' btnSize='xl'  onClick={onClick} />
        <CustomButton text='dark' btnStyle='dark' btnSize='xl'  onClick={onClick} />
      </div>
      <h2>block</h2>
      <div class="d-grid gap-2">
        <CustomButton text='primary' btnStyle='primary' btnSize='block'  onClick={onClick} />
        <CustomButton text='secondary' btnStyle='secondary' btnSize='block'  onClick={onClick} />
        <CustomButton text='success' btnStyle='success' btnSize='block'  onClick={onClick} />
        <CustomButton text='danger' btnStyle='danger' btnSize='block'  onClick={onClick} />
        <CustomButton text='warning' btnStyle='warning' btnSize='block'  onClick={onClick} />
        <CustomButton text='info' btnStyle='info' btnSize='block'  onClick={onClick} />
        <CustomButton text='light' btnStyle='light' btnSize='block'  onClick={onClick} />
        <CustomButton text='dark' btnStyle='dark' btnSize='block'  onClick={onClick} />
      </div>
    </div>
  );
}

export default App;
