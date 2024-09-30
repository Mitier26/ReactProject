import './App.css';
import { useState, useRef } from 'react';

// 상품의 데이터를 정의한다.
interface ProductType {
  id: number;
  name: string;
  explanation: string;
  price: number;
}

function App() {
  // 상품 객체
  // 제너레이터를 이용해 어떤 타입인지 정의 한다.
  const [products, setProducts] = useState<ProductType[]>([
    {
      id: 0,
      name: 'Iphone 13 Max',
      explanation:
        '디스플레이는 6.1인치 19.5:9 비율의 2352x1170 해상도를 지원하며 패널 형식은 AMOLED 방식의 Super Retina CSR 디스플레이이다. 인치당 픽셀 수는 460ppi이다. 120Hz의 터치 샘플링 레이트를 제공하고 명암비는 2,000,000:1이다',
      price: 1230000,
    },
  ]);

  // 상품을 등록하기 위해 필요한 변수
  // useState와 onChange를 이용해 값이 변하면 입력되도록 한다.
  const [name, setName] = useState('');
  const [explanation, setExplanation] = useState('');
  const [price, setPrice] = useState(0);

  // useRef : 해당 변수의 값이 변해도 리랜더링이 발생하지 않는다.
  // useRef가 아니면 리렌더링이 발생하고 +1 을 두번 하게 된다.
  let fakeId = useRef(0);
  // Omit 새로운 객체를 만드는데 id를 제외하고 만들겠다는 것이다.
  const handleCreate = (newProduct: Omit<ProductType, 'id'>) => {
    fakeId.current += 1;
    setProducts([...products, { ...newProduct, id: fakeId.current }]);
    // 새로운 상품을 등록한다.
    // ...products : 기존에 등록되어있는 것은 유지한다.
    // newProducts : id를 제외한 name, explanation, price만 있는 것
    // 에 id를 추가한 객체를 추가한다.
    // [] 은 리스트에 추가하는 것
    // {} 객체에 추가하는 것
  };

  console.log(products);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleCreate({ name, explanation, price });
        }}
      >
        <input value={name} type="text" placeholder="상품 이름" onChange={(event) => setName(event.target.value)} />
        <input
          value={explanation}
          type="text"
          placeholder="상품 설명"
          onChange={(event) => setExplanation(event.target.value)}
        />
        <input
          value={price}
          type="number"
          placeholder="상품 가격"
          onChange={(event) => setPrice(parseInt(event.target.value, 10))}
        />
        <input type="submit" value="상품 만들기" />
      </form>

      {products.map(({ id, name, explanation, price }) => (
        <div key={id}>
          <div>{id}</div>
          <div>{name}</div>
          <div>{explanation}</div>
          <div>{price}</div>
          <button
            type="button"
            onClick={() => {
              // 삭제를 하기 위해서는 무엇을 삭제 하는지 알아야 한다.
              // 그리고 filter를 이용해 해당되는 것을 제외하고 남긴다.
              setProducts(products.filter((product) => product.id !== id));
            }}
          >
            삭제하기
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
