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

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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
            <MdEdit size={20} color={"#8424bd"} cursor={"pointer"} />
            <MdDelete
              size={20}
              color={"#8424bd"}
              cursor={"pointer"}
              onClick={() => {
                handleClickOpenDialog();
                setProductId(productId);
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <>
      {
        <div>
          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Delete Product</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
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
      </div>
    </>
  );
};

export default ManageProducts;
