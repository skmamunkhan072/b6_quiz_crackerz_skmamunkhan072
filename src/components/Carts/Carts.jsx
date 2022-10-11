import { useContext } from "react";
import Cart from "../Cart/Cart";
import { LOdDataContext } from "../Root/Root";
import "./Carts.css";
const Carts = () => {
  const imge = [
    "img/React.png",
    "img/Css.png",
    "img/Javascript.png",
    "img/Git.png",
  ];
  // let countNumber = 0;
  // const [data, setData] = useState({});
  // const [lodDataApi, setLodDataApi] = useState([]);
  const datas = useContext(LOdDataContext);
  const ShowMor = (id) => {
    // const lodData = datas.data[id];
    // setData(lodData);
  };
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  // console.log(data);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div
        id="cart-wraper"
        className="grid gap-8 lg:grid-cols-3 md:grid-cols-2  sm:max-w-full sm:mx-auto lg:max-w-full"
      >
        {imge.map((img) => (
          <Cart
            img={img}
            key={img}
            ShowMor={ShowMor}
            countNumber={(countNumber += 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carts;
