import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebara';
import 'styles/global.css';
import 'styles/typography.css';

const HomePage = lazy(() => import('./pages/Home'));
const DocumentsPage = lazy(() => import('./pages/Documents'));
const JobTrackerPage = lazy(() => import('./pages/JobTracker'));
const MessagesPage = lazy(() => import('./pages/Messages'));
const MyCalendarPage = lazy(() => import('./pages/MyCalendar'));
const NotificationsPage = lazy(() => import('./pages/Notifications'));
const TopCompaniesPage = lazy(() => import('./pages/TopCompanies'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/top-companies" element={<TopCompaniesPage />} />
            <Route path="/job-tracker" element={<JobTrackerPage />} />
            <Route path="/my-calendar" element={<MyCalendarPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;