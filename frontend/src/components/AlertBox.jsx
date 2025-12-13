import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export const AlertBox = (type, message, statusCode) => {
  Swal.fire({
    icon: type,
    title: message,
    text: statusCode ? `Status Code: ${statusCode}` : "",
    showConfirmButton: true,
    confirmButtonText: "OK",
    confirmButtonColor:
      type === "success" ? "#28a745" : type === "error" ? "#dc3545" : "#3085d6",
  });
};
