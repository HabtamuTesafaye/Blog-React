// src/router.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Admin Pages
import AdminLayout from './components/layout/AdminLayout';
import DashboardPage from './pages/admin/DashboardPage';
import PostManagementPage from './pages/admin/PostManagementPage';
import CreatePostPage from './pages/admin/posts/CreatePostPage';
import EditPostPage from './pages/admin/posts/EditPostPage';
import SchedulePostPage from './pages/admin/posts/SchedulePostPage';
import UserManagementPage from './pages/admin/UserManagementPage';
import EditUserPage from './pages/admin/users/EditUserPage';
import UserRolesPage from './pages/admin/users/UserRolesPage';
import CommentModerationPage from './pages/admin/CommentModerationPage';
import CategoryTagManagementPage from './pages/admin/CategoryTagManagementPage';
import CreateCategoryPage from './pages/admin/categories/CreateCategoryPage';
import EditCategoryPage from './pages/admin/categories/EditCategoryPage';
import MediaLibraryPage from './pages/admin/MediaLibraryPage';
import AnalyticsPage from './pages/admin/AnalyticsPage';
import SEOToolsPage from './pages/admin/SEOToolsPage';
import ThemeCustomizationPage from './pages/admin/ThemeCustomizationPage';
import BackupRestorePage from './pages/admin/BackupRestorePage';

// User Pages
import UserLayout from './components/layout/UserLayout';
import ProfilePage from './pages/user/ProfilePage';
import EditProfilePage from './pages/user/profile/EditProfilePage';
import ChangePasswordPage from './pages/user/profile/ChangePasswordPage';
import BlogPage from './pages/user/BlogPage';
import PostPage from './pages/user/PostPage';
import SearchPage from './pages/user/SearchPage';
import SubscriptionPage from './pages/user/SubscriptionPage';
import BookmarksPage from './pages/user/BookmarksPage';
import FeedbackPage from './pages/user/FeedbackPage';
import SocialMediaIntegrationPage from './pages/user/SocialMediaIntegrationPage';
import FavoritesPage from './pages/user/FavoritesPage';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminLayout />}>
        <Route index element={<DashboardPage />} /> {/* This is the index route */}
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="posts" element={<PostManagementPage />} />
        <Route path="posts/create" element={<CreatePostPage />} />
        <Route path="posts/edit/:id" element={<EditPostPage />} />
        <Route path="posts/schedule" element={<SchedulePostPage />} />
        <Route path="users" element={<UserManagementPage />} />
        <Route path="users/edit/:id" element={<EditUserPage />} />
        <Route path="users/roles" element={<UserRolesPage />} />
        <Route path="comments" element={<CommentModerationPage />} />
        <Route path="categories" element={<CategoryTagManagementPage />} />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="categories/edit/:id" element={<EditCategoryPage />} />
        <Route path="media" element={<MediaLibraryPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="seo" element={<SEOToolsPage />} />
        <Route path="theme" element={<ThemeCustomizationPage />} />
        <Route path="backup" element={<BackupRestorePage />} />
      </Route>

        {/* User Routes */}
        <Route path="/user/*" element={<UserLayout />}>
          <Route index element={<BlogPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="profile/edit" element={<EditProfilePage />} />
          <Route path="profile/change-password" element={<ChangePasswordPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="post/:id" element={<PostPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="subscription" element={<SubscriptionPage />} />
          <Route path="bookmarks" element={<BookmarksPage />} />
          <Route path="feedback" element={<FeedbackPage />} />
          <Route path="social-media" element={<SocialMediaIntegrationPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>

        {/* Authentication Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Redirect to a default page if none of the routes match */}
        <Route path="/" element={<BlogPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
