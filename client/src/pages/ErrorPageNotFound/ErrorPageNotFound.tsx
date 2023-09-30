import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Page} from "../../components";
import { ServiceAPI } from "../../infrastructure";
// import "./Home.style.scss";

function ErrorPageNotFound() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const json = await ServiceAPI.fetchProducts();
  //     setProducts(json.data.products);
  //   };

  //   fetchData();
  // }, []);

  return (
    <Page>
      <div className="ErrorMsg">
        404Error: Page Not Found
        <img src ="https://cdn.discordapp.com/attachments/1068956241495335013/1157704673478844506/lv_0_20230930114445.gif?ex=651993ff&is=6518427f&hm=57e718c6619fd8f38fce6772de27934ddb1b23647909ef5edf944c09e85f5e9f&"></img>
      </div>
    </Page>
  );
}

export default ErrorPageNotFound;
