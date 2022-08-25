import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Management from "../views/management";
import PDFReader from "../views/pdfReader";
const PageRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/management/" replace />} />
      <Route path="/management/*" element={<Management />} />
      <Route path="/pdf-reader" element={<PDFReader />} />
    </Routes>
  );
};

export default PageRoutes;
