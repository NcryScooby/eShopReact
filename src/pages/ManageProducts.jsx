import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "../components/Navbar";
import api from "../service/api";
import styles from "../styles/ManageProducts.module.css";
import { MdEdit, MdDelete } from "react-icons/md";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import toastSuccess from "../utils/toastSuccess";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { AiOutlineCloudUpload } from "react-icons/ai";
import toastError from "../utils/toastError";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleClickOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
  };

  const handleClickOpenEditModal = () => {
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleEditProductName = (e) => {
    setProduct({ ...product, name: e.target.value });
  };

  const handleEditProductPrice = (e) => {
    setProduct({ ...product, price: e.target.value });
  };

  const handleEditProductDescription = (e) => {
    setProduct({ ...product, description: e.target.value });
  };

  const getProducts = () => {
    api
      .get("/getProducts")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    api
      .get("/getProducts")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteProduct = (id) => {
    api
      .delete(`/deleteProduct/${id}`)
      .then(() => {
        toastSuccess("Product deleted successfully");
        getProducts();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getProductId = (id) => {
    api
      .get(`/getProduct/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateProduct = (id) => {
    api
      .put(`/updateProduct/${id}`, product)
      .then(() => {
        toastSuccess("Product updated successfully");
        getProducts();
        setOpenEditModal(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (productId !== "") {
      getProductId(productId);
    }
  }, [productId]);

  const columns = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    { field: "price", headerName: "Price", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      headerAlign: "center",
      sortable: false,

      renderCell: () => {
        return (
          <div className={styles.actions}>
            <MdEdit
              size={20}
              color={"#8424bd"}
              cursor={"pointer"}
              onClick={() => {
                handleClickOpenEditModal();
              }}
            />
            <MdDelete
              size={20}
              color={"#8424bd"}
              cursor={"pointer"}
              onClick={() => {
                handleClickOpenDialog();
              }}
            />
          </div>
        );
      },
    },
  ];

  const modalCreateStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    "&:focus": {
      outline: "none",
    },
    borderRadius: "4px",
  };

  const modalEditStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    "&:focus": {
      outline: "none",
    },
    borderRadius: "4px",
  };

  const createProduct = () => {
    if (name === "") return toastError("Name is required");
    if (description === "") return toastError("Description is required");
    if (price === "") return toastError("Price is required");
    if (image === "") return toastError("Image is required");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", image);

    api
      .post("/createProduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        toastSuccess("Product created successfully");
        handleCloseCreateModal();
        getProducts();
      })
      .catch((error) => {
        toastError(error.response.data.message);
      });
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <DataGrid
          sx={{
            "& .MuiDataGrid-columnHeaderTitle": {
              color: "#8424bd",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-cell:focus": {
              outline: "none",
            },
            "& .MuiDataGrid-columnHeader:focus": {
              outline: "none",
            },
            "& .MuiDataGrid-columnHeader:focus-within": {
              outline: "none",
            },
            "& .MuiDataGrid-columnSeparator": {
              display: "none",
            },
          }}
          rows={products.map((product) => ({
            id: product._id,
            name: product.name,
            description: product.description,
            price: `U$ ${product.price}`,
          }))}
          onCellClick={(cell) => {
            setProductId(cell.row.id);
          }}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableColumnMenu={true}
          disableSelectionOnClick={true}
        />
        <div className={styles.buttonContainer}>
          <Button
            sx={{
              backgroundColor: "#8424bd",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#8524bdc4",
              },
            }}
            variant="contained"
            onClick={handleClickOpenCreateModal}
          >
            Create Product
          </Button>
        </div>
      </div>
      {
        <div>
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Delete Product</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete this product?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                sx={{
                  backgroundColor: "#e61919",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#e61919c4",
                  },
                }}
                onClick={handleCloseDialog}
              >
                Cancel
              </Button>
              <Button
                sx={{
                  backgroundColor: "#8424bd",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#8524bdc4",
                  },
                }}
                onClick={() => {
                  deleteProduct(productId);
                  handleCloseDialog();
                }}
                autoFocus
              >
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      }
      {
        <Modal open={openCreateModal} onClose={handleCloseCreateModal}>
          <Box sx={modalCreateStyle}>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
              variant="h6"
              component="h2"
            >
              Create Product
            </Typography>
            <TextField
              label="Name"
              variant="outlined"
              onChange={handleChangeName}
            />
            <TextField
              label="Description"
              variant="outlined"
              onChange={handleChangeDescription}
            />
            <TextField
              label="Price"
              variant="outlined"
              type={"number"}
              onChange={handleChangePrice}
              sx={{
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                  {
                    WebkitAppearance: "none",
                    margin: 0,
                  },
              }}
            />
            <Button
              sx={{
                height: "2.5rem",
                gap: "0.5rem",
              }}
              variant="contained"
              component="label"
            >
              <AiOutlineCloudUpload size={20} /> Upload Image
              <input type="file" hidden onChange={handleChangeImage} />
            </Button>
            <Button
              sx={{
                marginTop: "2rem",
                height: "2.5rem",
                backgroundColor: "#8424bd",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#8524bdc4",
                },
              }}
              variant="contained"
              onClick={() => {
                createProduct();
              }}
            >
              Create
            </Button>
          </Box>
        </Modal>
      }
      {
        <Modal open={openEditModal} onClose={handleCloseEditModal}>
          <Box sx={modalEditStyle}>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
              variant="h6"
              component="h2"
            >
              Edit Product
            </Typography>
            <TextField
              label="Name"
              variant="outlined"
              onChange={handleEditProductName}
              value={product.name}
            />
            <TextField
              label="Description"
              variant="outlined"
              onChange={handleEditProductDescription}
              value={product.description}
            />
            <TextField
              sx={{
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                  {
                    WebkitAppearance: "none",
                    margin: 0,
                  },
              }}
              label="Price"
              variant="outlined"
              type={"number"}
              onChange={handleEditProductPrice}
              value={product.price}
            />
            <Button
              sx={{
                marginTop: "2rem",
                height: "2.5rem",
                backgroundColor: "#8424bd",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#8524bdc4",
                },
              }}
              variant="contained"
              onClick={() => {
                updateProduct(productId);
              }}
            >
              Update
            </Button>
          </Box>
        </Modal>
      }
    </>
  );
};

export default ManageProducts;
