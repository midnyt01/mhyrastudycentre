import { Routes, Route } from "react-router-dom";

// Admin Panel
import AdminPanel from "./routes/admin/admin-panel.component";
import Adminlogin from "./routes/admin/admin-login/admin-login";
import AdminCustomerPage from "./routes/admin/admin-customers/admin-customer-page.component";
import BugreportPage from "./routes/admin/admin-panel-management/bug-reports";
import EnquiryPage from "./routes/admin/admin-panel-management/enquiry";
import SiteSettingPage from "./routes/admin/admin-panel-management/site-settings";
import BannerPage from "./routes/admin/admin-banner/banner-page";
// CSS
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// Images and Logo
import SFLogo from "./assets/SF-logo.png";
import AdminCreateAccount from "./routes/admin/admin-create-account/admin-create-account.component";
import { ProtectedRoute } from "./context/admin/protected-route";
import BlogPostPreview from "./routes/admin/preview/blog-post-preview";
import CaseStudyEditor from "./routes/admin/case-study-editor/case-study-editor.component";
import Leads from "./routes/leads/leads.component";
import CaseStudyPreivew from "./routes/admin/preview/case-study-preview.component";
import UploadCourse from "./routes/admin/upload-course/upload-course";
import AllCourses from "./routes/admin/see-all-course/see-all-courses";
import EditCourse from "./routes/admin/edit-course";
// import SellerCreateOrder from "./routes/seller/seller-create-order/seller-create-order.component";

library.add(fas);

function App() {
  return (
    <Routes>
      {/* Common */}
      <Route path="/mainlogo" element={<SFLogo />} />

      {/* Admin Panel */}
      <Route path="/admin-login" element={<Adminlogin />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        }
      />
      <Route
        path="/create-account"
        element={
          <ProtectedRoute>
            <AdminCreateAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/create-blog-post"
        element={
          <ProtectedRoute>
            <UploadCourse />
          </ProtectedRoute>
        }
      />
      <Route
        path="/all-courses"
        element={
          <ProtectedRoute>
            <AllCourses />
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit-course/*"
        element={
          <ProtectedRoute>
            <EditCourse />
          </ProtectedRoute>
        }
      />
      <Route
        path="/blog-post-preview"
        element={
          <ProtectedRoute>
            <BlogPostPreview />
          </ProtectedRoute>
        }
      />
      <Route
        path="/create-case-study"
        element={
          <ProtectedRoute>
            <CaseStudyEditor />
          </ProtectedRoute>
        }
      />
      <Route
        path="/case-study-preview"
        element={
          <ProtectedRoute>
            <CaseStudyPreivew />
          </ProtectedRoute>
        }
      />
      {/* <Route
        path="/add-banner"
        element={
          <ProtectedRoute>
            <BannerPage />
          </ProtectedRoute>
        }
      /> */}

      {/* <Route
        path="/admin-inventory"
        element={
          <ProtectedRoute>
            <AdminInventory />
          </ProtectedRoute>
        }
      /> */}
      <Route
        path="/leads"
        element={
          <ProtectedRoute>
            <Leads />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin-customer"
        element={
          <ProtectedRoute>
            <AdminCustomerPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <BugreportPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/enquiries"
        element={
          <ProtectedRoute>
            <EnquiryPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/site-settings"
        element={
          <ProtectedRoute>
            <SiteSettingPage />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;
