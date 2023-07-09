import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Table, Drawer, Input, Radio, InputNumber, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./Products.css";
import { addProduct } from "../../../../features/AddProduct";
import { productTableColumn } from "../../AdminPanel.constant";

const initialState = {
  product_name: "",
  product_type: "sweet",
  product_price: "",
  description: "",
};

const Products = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerDetails, setDrawerDetails] = useState(initialState);
  const [allProductLists, setAllProductsList] = useState([]);

  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.addProduct.products);

  useEffect(() => {
    const productLists = [...JSON.parse(localStorage.getItem("productLists"))];
    setAllProductsList(productLists || []);
  }, []);

  const handleDrawerDetailChange = (fieldName, value) => {
    if (fieldName === "productName") {
      setDrawerDetails({ ...drawerDetails, product_name: value });
    } else if (fieldName === "productType") {
      setDrawerDetails({ ...drawerDetails, product_type: value });
    } else if (fieldName === "product_price") {
      setDrawerDetails({ ...drawerDetails, product_price: value });
    } else if (fieldName === "productDescription") {
      setDrawerDetails({ ...drawerDetails, description: value });
    }
  };

  const handleAddProduct = () => {
    const productDetails = { ...drawerDetails, product_id: allProducts.length };
    // local storage
    localStorage.setItem(
      "productLists",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("productLists") || []),
        productDetails,
      ])
    );
    dispatch(addProduct([...allProducts, productDetails]));
    toast.success("Product added successfully", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
    });
    onCloseDrawer();
  };

  const onCloseDrawer = () => {
    setDrawerOpen(false);
    setDrawerDetails(initialState);
  };

  const drawerContent = () => {
    const { product_name, product_type, product_price, description } =
      drawerDetails;
    return (
      <div className="drawerBody">
        <div className="drawerContent">
          <div className="drawerContentLabel">Product Name</div>
          <Input
            maxLength={14}
            value={product_name}
            placeholder="Enter product name"
            onChange={(e) =>
              handleDrawerDetailChange("productName", e.target.value)
            }
          />
          <div className="drawerContentLabel">Product Type</div>
          <Radio.Group
            onChange={(e) =>
              handleDrawerDetailChange("productType", e.target.value)
            }
            value={product_type}
          >
            <Radio value={"sweet"}>Sweet</Radio>
            <Radio value={"spicy"}>Spicy</Radio>
          </Radio.Group>
          <div className="drawerContentLabel">Product Price</div>
          <InputNumber
            addonBefore="₹"
            value={product_price}
            onChange={(value) =>
              handleDrawerDetailChange("product_price", value)
            }
          />
          <div className="drawerContentLabel">Product Description</div>
          <Input
            count={200}
            value={description}
            placeholder="Enter Product description"
            onChange={(e) =>
              handleDrawerDetailChange("productDescription", e.target.value)
            }
          />
        </div>
        <div className="drawerFooter">
          <Button type="text" onClick={() => onCloseDrawer()}>
            Cancel
          </Button>
          <Button type="primary" onClick={() => handleAddProduct()}>
            Add Product
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="products">
      <div className="productHeader">
        <h2>Products</h2>
        <Button type="primary" onClick={() => setDrawerOpen(true)}>
          Add new Product
        </Button>
      </div>
      <div className="productTable">
        <Table columns={productTableColumn} dataSource={allProductLists} />
        <Drawer
          title="Add new product"
          placement="right"
          onClose={onCloseDrawer}
          open={drawerOpen}
        >
          {drawerContent()}
        </Drawer>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Products;
