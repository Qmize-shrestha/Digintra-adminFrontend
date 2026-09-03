import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import Home from "./pages/Home";

import Blog2 from "./pages/Blog2";

import Compliance_Guidelines_for_Successful_SMS_Marketing from "./pages/Compliance_Guidelines_for_Successful_SMS_Marketing";

import React, { useEffect, useState } from 'react';

import Navbar from "./components/Navbar";

import About from "./pages/About";

import Enterprise_messaging from "./pages/Enterprise_messaging";

import Transactionsl_sms from "./pages/Transactionsl_sms";

import Wholesale_messaging from "./pages/Wholesale_messaging";

import Promotional_email from "./pages/Promotional_email";

import Smtp_server from "./pages/Smtp_server";
import ScrollToTop from "./ScrolltoTop.jsx";

import Whatsapp_business_api from "./pages/Whatsapp_business_api";
import Bulk_SMS from './pages/Bulk_SMS_Service';
import Promotional_SMS from './pages/Promotional_SMS.jsx';

import BULKSMSUAEBLOG from "./pages/Bulk_SMS_UAE_BLOGS.jsx"
import RCSMESSAGE from "./pages/RCS_Messaging_The_Future_of_Business_Communication_in_2026.jsx"
import DLT_Registration_2026 from "./pages/DLT_Registration_2026.jsx";
import Jio_DLT_Registration_Guide from "./pages/Jio_DLT_Registration_Guide.jsx"
import Airtel_DLT from './pages/Airtel_DLT.jsx'


import The_top_10_advantages_of_sms_marketing_for_business from "./pages/The_top_10_advantages_of_sms_marketing_for_business";

import Budget_friendly_sms_marketing_tactics_for_effective_campaigns from "./pages/Budget_friendly_sms_marketing_tactics_for_effective_campaigns";

import Voice_broadcast from "./pages/Voice_broadcast";

import Terms_conditons from "./pages/Terms_conditons";

import Contact from "./pages/Contact";

import Partnerwhatsapp from "./pages/Partnerwhatsapp";

import Pricingapp from "./pages/Pricingapp";

import Footer from "./components/Footer";

import Business_sms from "./pages/Business_sms";

import Why_are_my_bulk_messages_not_being_delivered from "./pages/Why_are_my_bulk_messages_not_being_delivered";

import Bulk_sms_service_for_charities_trust_ngos_community_groups from "./pages/Bulk_sms_service_for_charities_trust_ngos_community_groups";

import How_bulk_sms_can_be_used_in_the_education_sector from "./pages/How_bulk_sms_can_be_used_in_the_education_sector";

import Top_5_bulk_sms_provider_in_india from "./pages/Top_5_bulk_sms_provider_in_india";
import Sms_vs_email_marketing from "./pages/Sms_vs_email_marketing";
import How_Top_Business_use_sms_marketing from './pages/How_Top_Business_use_sms_Marketing';
import What_is_Bulk_SMS from './pages/What_is_Bulk_SMS_and_How_Does_It_Work';
import Top_5_Benefits_of_Bulk_SMS_Marketing_for_Businesses from './pages/Top_5_Benefits_of_Bulk_SMS_Marketing_for_Businesses'
import Bulk_SMS_for_salon_and_spa from './pages/Bulk_SMS_for_spa_and_salon';
import Bulk_SMS_for_Hospitals from './pages/Bulk_SMS_for_hospitals';
import Connecting_Dhanbad from './pages/Connecting_Dhanbad';
import Bulk_SMS_in_Meerut from './pages/Connecting_Meerut';
import Bulk_SMS_in_Kanpur from './pages/Connecting_Kanpur';
import How_to_write_effective_SMS from './pages/How_to_Write_Effective_SMS';
import Bulk_SMS_Marketing_Regulations from './pages/Bulk_SMS_Marketing_Regulations';
import User_Dashboard from './pages/User_Dashboard';
import Latest_Trend_in_Bulk_SMS from './pages/Latest_Trend_in_Bulk_SMS_Marketing';
import ProtectedRoute from "./components/ProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import AdminManageBlogs from "./pages/AdminManageBlogs";
import EditorProtectedRoute from "./components/EditorProtectedRoute";
import EditorLayout from "./components/EditorLayout";
import EditorDashboard from "./pages/EditorDashboard";
import UserDashboard from "./pages/User_Dashboard";
import How_to_Run_Automated_SMS_Campaigns from './pages/How_to_Run_Automated_SMS_Campaigns';
import What_is_DLT_Registration_and_why_it_is_necessary_in_the_SMS_Industry from './pages/What_is_DLT_Registration_and_why_it_is_necessary_in_the_SMS_Industry';
import Top_3_Bulk_SMS_Service_Provider_in_Pune from './pages/Top_3_Bulk_SMS_Service_Provider_in_Pune';
import Bulk_SMS_Service_for_Ecommerce from './pages/Bulk_SMS_service_for_Ecommerce';
import Facebook_Manager_Account from './pages/Get_Your_Facebook_Business_Manager';
import How_to_use_AI_SMS from './pages/How_to_use_AI_for_SMS_marketing';
import How_to_use_Personalized_SMS from './pages/How_to_Use_Personalized_sms_at_scale';
import How_to_intergrate_bulk_sms_api from './pages/How_to_Integrate_Bulk_SMS_API';
import Top_4_fast2sms_alternative_in_2025 from './pages/Top_4_fast2sms_alternative_in_2025';
import Complete_guide_for_best_bulk_sms_provider from './pages/Complete_Guide_for_best_bulk_sms_provider';
import Top_3_Benefits_of_Bulk_SMS_Services from './pages/Top_3_Benefits_of_Bulk_SMS_Services';
import Your_SMS_Campaign_Arenot from "./pages/Your_SMS_Campaign_Aren't";
import Unlocking_a_Power_of_Bulk_SMS from "./pages/Unlocking_a_Power_of_Bulk_SMS";
import DLT_Registration from "./pages/DLT_Registration";
import Multimedia_Messaging_Services from './pages/Multimedia_Messaging_Services';
import Bulk_Sms_Patna from './pages/Bulk_Sms_Patna';
import Bulk_Sms_Jaipur from './pages/Bulk_Sms_Jaipur';
import Bulk_Sms_Noida from './pages/Bulk_Sms_Noida';
import SMS_Marketing_in_Dubai from './pages/SMS_Marketing_in_Dubai';
import SMS_Gateway_API from './pages/SMS_Gateway_API';
import Best_Bulk_Sms_Providers_In_India from './pages/Best_Bulk_Sms_Providers_In_India'
import A2P_Sms_Messaging from './pages/A2P_Sms_Messaging';
import SMS_MARKETING from './pages/Sms_Marketing'
import Best_Bulk_SMS_Provider_In_India from './pages/Best_Bulk_SMS_Provider_In_India';
import OTP_Service_Provider from './pages/OTP_Service_Provider.jsx';
import Top_ten_companies from './pages/Top_Ten_Telecom_Companies_In_Uae'
import TRA from './pages/Telecom_Regulatory_Authority.jsx'
import Top_10_Bulk_SMS_In_Uae from './pages/Top_10_Bulk_SMS_In_Uae.jsx'
import Bulk_Sms_UK from "./pages/Bulk_Sms_In_UK.jsx";
import Bulk_Sms_Canada from './pages/Bulk_Sms_In_Canada.jsx'
import Bulk_Sms_Australia from './pages/Bulk_Sms_In_Australia.jsx';
import Bulk_Sms_Malaysia from './pages/Bulk_SMS_Malaysia.jsx';
import Bulk_Sms_Singapore from './pages/Bulk_SMS_Singapore.jsx';
import Bulk_Sms_Brazil from "./pages/Bulk_SMS_In_Brazil.jsx";
import Bulk_SMS_Nigeria from "./pages/Bulk_SMS_In_Nigeria.jsx";
import BULK_SMS_MEXICO from "./pages/Mexico.jsx";
import BULK_SMS_FRANCE from "./pages/France.jsx";
import TWO_WAY_SMS from "./pages/TwoWay.jsx";
import Bulk_sms_Kuwait from "./pages/Kuwait.jsx";
import Bulk_sms_Bharain from "./pages/Bharain.jsx";
import Bulk_sms_Turkey from "./pages/Turkey.jsx";
import Bulk_sms_Egypt from "./pages/Egypt.jsx";
import Bulk_sms_Vietnam from "./pages/Vietnam.jsx";
import Bulk_sms_Phillipines from "./pages/Philippines.jsx";
import Bulk_sms_Belgium from "./pages/Belgium.jsx";
import Bulk_sms_Zambia from "./pages/Zambia.jsx";
import Bulk_sms_India from "./pages/Bulk_SMS_In_India.jsx"
import Otp_Sms_Provider from "./pages/Otp_Sms_Provider.jsx"

import Bloglogin from "./pages/Bloglogin.jsx"
import AdminManageUsers from "./pages/AdminManageUsers.jsx"
import AdminManageCategories from "./pages/AdminManageCategories.jsx"
import SingleBlog from "./pages/SingleBlog.jsx"






import How_to_Send_Bulk_Messages_Without_Being_Marked_as_Spam from "./pages/How_to_Send_Bulk_Messages_Without_Being_Marked_as_Spam";

import How_to_Send_Bulk_SMS_without_Getting_Spammed from "./pages/How_to_Send_Bulk_SMS_without_Getting_Spammed";

import How_to_use_bulk_sms_for_lead_generation from "./pages/How_to_use_bulk_sms_for_lead_generation";

import How_to_use_sms_marketing_to_boost_your_website_traffic from "./pages/How_to_use_sms_marketing_to_boost_your_website_traffic";

import What_is_Bulk_SMS_Service_How_Does_It_Help_Businesses from "./pages/What_is_Bulk_SMS_Service_How_Does_It_Help_Businesses";

import Refund_policy from "./pages/Refund_policy";

import Bulk_sms_provider_ahmedabad from "./pages/Bulk_sms_provider_ahmedabad";
import Bulk_sms_provider_bangalore from "./pages/Bulk_sms_provider_bangalore";
import Bulk_sms_provider_chennai from "./pages/Bulk_sms_provider_chennai";

import Bulk_sms_provider_delhi from "./pages/Bulk_sms_provider_delhi";

import Bulk_sms_provider_gaya from "./pages/Bulk_sms_provider_gaya";
import Bulks_sms_UAE from './pages/Bulk_SMS_UAE';
import Bulks_sms_SAUDI from './pages/BULK_SMS_SAUDI';
import Bulks_sms_QATAR from './pages/BULK_SMS_QATAR';
import Bulks_sms_OMAN from './pages/BULK_SMS_OMAN';
import Bulks_sms_ABUDHABI from './pages/BULK_SMS_ABUDHABI';
import Bulks_sms_DUBAI from './pages/BULK_SMS_DUBAI';
import Best_5_Bulk_SMS from "./pages/5_Best_Bulk_SMS";

import Bulk_sms_provider_heyderabad from "./pages/Bulk_sms_provider_heyderabad";

import Bulk_sms_provider_kolkata from "./pages/Bulk_sms_provider_kolkata";

import Bulk_sms_provider_pune from "./pages/Bulk_sms_provider_pune";

import Bulk_sms_provider_rajasthan from "./pages/Bulk_sms_provider_rajasthan";
import Bulk_sms_provider_surat from "./pages/Bulk_sms_provider_surat";
import Bulks_sms_provider_mumbai from "./pages/Bulks_sms_provider_mumbai";
import Impact_of_AI_on_SMS from './pages/Impact_of_AI_on_SMS';
import Future_of_Bulk_SMS from './pages/Future_of_Bulk_SMS';
import Top_4_bulk_sms_provider_in_Mumbai from "./pages/Top_4_Bulk_SMS_Provider_in_Mumbai";
import How_to_Choose_the_Best_Bulk_SMS_Provider from "./pages/How_to_Choose_the_Best_Bulk_SMS_Provider";
import How_to_send_sms_for_appointment_reminders from './pages/How_to_send_sms_for_appointment_reminders';
import How_to_send_SMS_for_emergency_alerts from './pages/How_to_send_sms_for_emergency_alerts';
import How_to_integrate_SMS_with_CRM from './pages/How_to_integrate_SMS_with_CRM';
import How_to_use_bulk_sms_for_political_campaign from './pages/How_to_use_bulk_sms_for_political_campaign';
import How_to_Use_SMS_for_Abandoned_Cart_Recovery from './pages/How_to_Use_SMS_for_Abandoned_Cart_Recovery';
import How_to_build_an_SMS_Subscriber_List from './pages/How_to_Build_an_SMS_Subscriber_List';
import Top_5_things_to_know from './pages/Top_5_Things_You_Need_to_Know_Before_Choosing_a_Bulk_SMS_Service_Provider';
import Insider_Guide_to_Select_Bulk_SMS from './pages/Insider_Guide_to_Select_Best_Bulk_SMS_Service_Provider'
import How_to_choose_service_in_india from './pages/How_to_Choose_the_Best_Bulk_SMS_Service_Provider_in_India'
import Feedback_Customer from './pages/How_to_use_sms_for_customer_feedback_and_surveys';
// import New_Pricing from './pages/Whatsapp_revised_pricing_plan'; 
import Sms_vs_email_Whatsapp from './pages/Sms_vs_email_Whatsapp'
import Ten_Industries from './pages/10_Industries_that_can_double';
import Send_Excel from './pages/How_to_send_bulk_sms_from_excel';
import Sms_and_Mms from './pages/Sms_and_Mms';
import Best_SMS_Marketing_Platforms from './pages/Best-SMS-Marketing-Platform-in-2026';
import BULK_SMS_GERMANY from './pages/Bulk-SMS-Germany';
import Vi_DLT from "./pages/Vi_DLT.jsx";
import Trai_Guide from "./pages/TRAI_Guide.jsx";

import Cookie from "./pages/Cookie";
import Login from './pages/Login';
import LoginBlog from './components/LoginBlog';
import SignUpBlog from './components/SignUpBlog';
import BlogEditor from "./Blog/BlogEditor";
import PostPage from './Blog/PostPage';
import BlogPostDetail from './Blog/BlogPostDetails';
import EditBlogPostForm from './Blog/EditBlogPostForm';
import BlogPostForm from './Blog/BlogPostForm';
import Bsnl_DLT from "./pages/Bsnl_DLT.jsx";
import Privacypolicyapp from "./pages/Privacypolicyapp";

import Bulk_SMS_vs_Whatsapp_Messages_Which_is_Better from "./pages/Bulk_SMS_vs_Whatsapp_Messages_Which_is_Better";
import Whatsapp_api_pricing from "./pages/Whatsapp_api_pricing";
import Whatsapp_business_api_provider_bangalore from "./pages/Whatsapp_business_api_provider_bangalore";
import Whatsapp_business_api_provider_chennai from "./pages/Whatsapp_business_api_provider_chennai";
import Whatsapp_business_api_provider_delhi from "./pages/Whatsapp_business_api_provider_delhi";
import Whatsapp_business_api_provider_hyderabad from "./pages/Whatsapp_business_api_provider_hyderabad";
import Whatsapp_business_api_provider_kolkata from "./pages/Whatsapp_business_api_provider_kolkata";
import Seo from "./pages/Seo";

import Smo from "./pages/Smo";

import Social_page_promotional from "./pages/Social_page_promotional";
import Social_media_profiling from "./pages/Social_media_profiling";


import Logo_designing from "./pages/Logo_designing";
import Promotional_TextmsgBlog from "./pages/Promotional_TextmsgBlog.jsx";
import Sms_Api from "./pages/Sms_Api.jsx";
import Sms_Gateway from "./pages/Sms_Gateway.jsx";
import Top5_Etisalat_Alt from "./pages/Top5_Etisalat_Alt.jsx";
import Sender_Id from "./pages/Sender_Id.jsx";
// import Registerpage from "./pages/Registerpage";
import Bulk_SMS_MarketingUAE from "./pages/Bulk_SMS_MarketingUAE.jsx";
import Sms_CampaignIdeas from "./pages/Sms_CampaignIdeas.jsx";
import Sms_Marketing_RulesUAE from "./pages/Sms_Marketing_RulesUAE.jsx";

// import LoginBlog from "./components/LoginBlog";
import Error from "./pages/Error";
import axios from "axios";
import Confetti from 'react-confetti'
// import PricingUpload from "./pages/Pricingupload";

import WhatsappPricing from "./pages/WhatsappPricing";
import { MdClose } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { GoAlertFill } from "react-icons/go";
import OfferPopup from "./components/Offerpopup";

// import BlogEditor from "./Blog/BlogEditor";
const GlobalElements = ({ showPopup, closePopup }) => {
  const location = useLocation();
  const hide = location.pathname.startsWith("/admin") || location.pathname.startsWith("/user") || location.pathname.startsWith("/editor") || location.pathname === "/login" || location.pathname === "/loginblog" || location.pathname === "/bloglogin";

  if (hide) return null;

  return (
    <>
      <Navbar />
      {showPopup && (
        <div className="w-full h-full flex justify-center items-center fixed z-50  backdrop-blur-md top-0 ">
          <div className="w-[90%] p-3 md:w-[40%] h-auto md:p-6 bg-white rounded-lg border-2 border-orange-500 relative ">
            <div className="w-4/5 mx-auto space-y-5">
              <div className="flex items-center gap-2"><GoAlertFill className="text-red-600 text-[2rem]" />      <h4 className="text-xl font-semibold  text-red-700" style={{ fontFamily: "'Poppins',sans-serif" }}>Important Notice</h4>
              </div>
              <div className="space-y-3">
                <p className="font-medium" style={{ fontFamily: "'Poppins',sans-serif" }}>We have received reports of third parties falsely claiming to represent *DIGINTRA* and charging fees for account creation.  </p>
                <p className="font-medium" style={{ fontFamily: "'Poppins',sans-serif" }}>Please be aware that *DIGINTRA does not charge any fees for account creation* to send messages globally. We do not authorize any third party to collect payments on our behalf.  </p>
                <p className="font-medium" style={{ fontFamily: "'Poppins',sans-serif" }}>If you encounter any such activity, please report it to us immediately.  </p>
                <p className="font-medium" style={{ fontFamily: "'Poppins',sans-serif" }}>*Stay Safe | Verify Before You Pay*  </p>
              </div>
              <p className="font-semibold " style={{ fontFamily: "'Poppins',sans-serif" }}>DIGINTRA Team</p>
            </div>
            <div className=" w-fit mx-auto px-5 py-3 rounded-lg my-7 bg-gradient-to-r from-green-700 to-orange-500 cursor-pointer hover:scale-105" onClick={closePopup}>
              <button className="text-white " style={{ fontFamily: "'Poppins',sans-serif" }} >I Acknowledge</button>
            </div>
          </div>
        </div>
      )}
      <OfferPopup />
    </>
  );
};

function App() {

  const [showPopup, setShowPopup] = useState(false);


  useEffect(() => {
    // Function to check user's IP address
    const checkUserIp = async () => {
      const storedIp = localStorage.getItem('userIp');
      if (!storedIp) {
        try {
          const response = await axios.get('https://api.ipify.org?format=json');
          const userIp = response.data.ip;

          localStorage.setItem('userIp', userIp);

          // Delay showing the popup by 6 seconds
          setTimeout(() => {
            setShowPopup(true);
            setTimeout(() => {
              setShowPopup(false);
            }, 10000); // 10 seconds delay to close

          }, 6000);  // 6 seconds delay
        } catch (error) {
          console.error('Error fetching IP address:', error);
        }
      }
    };

    // Call the function to check IP
    checkUserIp();

    // Event listener to clear localStorage on window reload
    const handleBeforeUnload = () => {
      localStorage.removeItem('userIp');
    };

    // Attach event listener
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };



  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      <Toaster />
      <GlobalElements showPopup={showPopup} closePopup={closePopup} />

      <Routes>
        {/* Admin Routes */}
        <Route
          path="/admin-dashboard"
          element={
            <AdminProtectedRoute>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/blogs"
          element={
            <AdminProtectedRoute>
              <AdminLayout>
                <AdminManageBlogs />
              </AdminLayout>
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminProtectedRoute>
              <AdminLayout>
                <AdminManageUsers />
              </AdminLayout>
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/categories"
          element={
            <AdminProtectedRoute>
              <AdminLayout>
                <AdminManageCategories />
              </AdminLayout>
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/blogs/create"
          element={
            <AdminProtectedRoute>
              <AdminLayout>
                <BlogPostForm />
              </AdminLayout>
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/blogs/edit/:postId"
          element={
            <AdminProtectedRoute>
              <AdminLayout>
                <EditBlogPostForm />
              </AdminLayout>
            </AdminProtectedRoute>
          }
        />

        {/* Dedicated Editor Routes */}
        <Route
          path="/editor-dashboard"
          element={
            <EditorProtectedRoute>
              <EditorLayout>
                <EditorDashboard />
              </EditorLayout>
            </EditorProtectedRoute>
          }
        />
        <Route
          path="/editor/blogs"
          element={
            <EditorProtectedRoute>
              <EditorLayout>
                <AdminManageBlogs />
              </EditorLayout>
            </EditorProtectedRoute>
          }
        />
        <Route
          path="/editor/categories"
          element={
            <EditorProtectedRoute>
              <EditorLayout>
                <AdminManageCategories />
              </EditorLayout>
            </EditorProtectedRoute>
          }
        />
        <Route
          path="/editor/blogs/create"
          element={
            <EditorProtectedRoute>
              <EditorLayout>
                <BlogPostForm />
              </EditorLayout>
            </EditorProtectedRoute>
          }
        />
        <Route
          path="/editor/blogs/edit/:postId"
          element={
            <EditorProtectedRoute>
              <EditorLayout>
                <EditBlogPostForm />
              </EditorLayout>
            </EditorProtectedRoute>
          }
        />

        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={< Home />} />


        {/* <Route path="/blogpanel" element={<Bloglogin/>}/> */}

        {/* <Route path="/register" element={<Registerpage/>}/> */}
        <Route path="/bloglogin" element={<Login />} />
        {/* <Route path="/pricingupload" element={<Pricingupload/>}/> */}
        <Route path="/home" element={<Home />} />
        {/* <Route path="/blog/" element={<Blog/>}/> */}
        <Route path="/blogs" element={<Blog2 />} />
        <Route path="/blog/compliance-guidelines-for-successful-sms-marketing" element={<Compliance_Guidelines_for_Successful_SMS_Marketing />} />
        <Route path="/partner" element={<Partnerwhatsapp />} />
        <Route path="/whatsapp-pricing" element={<WhatsappPricing />} />
        <Route path="/enterprise-messaging" element={<Enterprise_messaging />} />

        <Route path="/enterprise-messaging/blog" element={<Navigate to="/enterprise-messaging" replace />} />
        <Route path="/transactional-sms" element={<Transactionsl_sms />} />
        <Route path="/business-sms" element={<Business_sms />} />
        <Route path="/wholesale-messaging" element={<Wholesale_messaging />} />
        <Route path="/promotional-email" element={<Promotional_email />} />
        <Route path="/smtp-server" element={<Smtp_server />} />
        <Route path="/whatsapp-business-api" element={<Whatsapp_business_api />} />
        {/* <Route path="/bulk-sms-india" element={<Bulk_SMS/>}/> */}
        {/* <Route path="/bulk-sms-india" element={<Bulk_SMS_In_India/>}/> */}
        <Route path="/bulk-sms-germany" element={<BULK_SMS_GERMANY />} />
        <Route path="/bulk-sms-mexico" element={<BULK_SMS_MEXICO />} />
        <Route path="/bulk-sms-france" element={<BULK_SMS_FRANCE />} />
        <Route path="/bulk-sms-bahrain" element={<Bulk_sms_Bharain />} />
        <Route path="/bulk-sms-egypt" element={<Bulk_sms_Egypt />} />
        <Route path="/bulk-sms-turkey" element={<Bulk_sms_Turkey />} />
        <Route path="/bulk-sms-vietnam" element={<Bulk_sms_Vietnam />} />
        <Route path="/bulk-sms-phillipines" element={<Bulk_sms_Phillipines />} />
        <Route path="/bulk-sms-belgium" element={<Bulk_sms_Belgium />} />
        <Route path="/bulk-sms-zambia" element={<Bulk_sms_Zambia />} />
        <Route path="/bulk-sms-india" element={<Bulk_sms_India />} />




        <Route path="/smspricing" element={<Pricingapp />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/whatsapp-api-pricing" element={<Whatsapp_api_pricing />} />
        <Route path="/blog/the-top-10-advantages-of-sms-marketing-for-business" element={<The_top_10_advantages_of_sms_marketing_for_business />} />
        <Route path="/blog/budget-friendly-sms-marketing-tactics-for-effective-campaigns" element={<Budget_friendly_sms_marketing_tactics_for_effective_campaigns />} />
        <Route path="/blog/why-are-my-bulk-messages-not-being-delivered" element={<Why_are_my_bulk_messages_not_being_delivered />} />
        <Route path="/blog/bulk-sms-service-for-charities-trust-ngos-community-groups" element={<Bulk_sms_service_for_charities_trust_ngos_community_groups />} />
        <Route path="/blog/how-bulk-sms-can-be-used-in-the-education-sector" element={<How_bulk_sms_can_be_used_in_the_education_sector />} />
        <Route path="/blog/how-to-send-bulk-messages-without-being-marked-as-spam" element={<How_to_Send_Bulk_Messages_Without_Being_Marked_as_Spam />} />
        <Route path="/blog/how-to-send-bulk-sms-without-getting-spammed" element={<How_to_Send_Bulk_SMS_without_Getting_Spammed />} />
        <Route path="/blog/top-5-bulk-sms-provider-in-india" element={<Top_5_bulk_sms_provider_in_india />} />
        <Route path="/blog/sms-vs-email-marketing" element={<Sms_vs_email_marketing />} />
        <Route path="/blog/how-top-businesses-use-sms-marketing-to-build-customer-satisfaction" element={<How_Top_Business_use_sms_marketing />} />
        <Route path="/blog/what-is-bulk-sms-and-how-does-it-work" element={<What_is_Bulk_SMS />} />
        <Route path="/blog/top-5-benefits-of-bulk-sms-marketing-for-businesses" element={<Top_5_Benefits_of_Bulk_SMS_Marketing_for_Businesses />} />
        <Route path="/blog/bulk-sms-for-spa-and-salon" element={<Bulk_SMS_for_salon_and_spa />} />
        <Route path="/blog/bulk-sms-services-for-hospitals" element={<Bulk_SMS_for_Hospitals />} />
        <Route path="/bulk-sms-provider-in-dhanbad" element={<Connecting_Dhanbad />} />
        <Route path="/blog/bulk-sms-service-for-ecommerce" element={<Bulk_SMS_Service_for_Ecommerce />} />
        <Route path="/bulk-sms-provider-in-meerut" element={<Bulk_SMS_in_Meerut />} />
        <Route path="/bulk-sms-provider-in-kanpur" element={<Bulk_SMS_in_Kanpur />} />
        <Route path="/blog/how-to-write-effective-sms-marketing-meassages-that-convert" element={<How_to_write_effective_SMS />} />
        <Route path="/blog/bulk-sms-marketing-regulations" element={<Bulk_SMS_Marketing_Regulations />} />
        <Route path="/user-dashboard" element={<User_Dashboard />} />
        <Route path="/blog/latest-trend-in-bulk-sms-marketing-in-2025" element={<Latest_Trend_in_Bulk_SMS />} />
        <Route path="/blog/impact-of-ai-and-chatbots-on-bulk-sms-marketing" element={<Impact_of_AI_on_SMS />} />
        <Route path="/blog/future-of-bulk-SMS-what-to-expect-in-the-next-5-years" element={<Future_of_Bulk_SMS />} />
        <Route path="/blog/top-4-bulk-sms-provider-in-mumbai" element={<Top_4_bulk_sms_provider_in_Mumbai />} />
        <Route path="/blog/how-to-choose-the-best-bulk-sms-provider" element={<How_to_Choose_the_Best_Bulk_SMS_Provider />} />
        <Route path="/blog/how-to-run-automated-sms-campaigns" element={<How_to_Run_Automated_SMS_Campaigns />} />
        <Route path="/blog/what-is-dlt-registration-and-why-it-is-necessary-in-the-sms-industry" element={<What_is_DLT_Registration_and_why_it_is_necessary_in_the_SMS_Industry />} />
        <Route path="/blog/top-3-bulk-sms-service-provider-in-pune" element={<Top_3_Bulk_SMS_Service_Provider_in_Pune />} />
        <Route path="/blog/get-your-facebook-business-manager-account-verified-in-5-easy-steps" element={<Facebook_Manager_Account />} />
        <Route path="/blog/how-to-use-ai-for-sms-marketing-a-game-changer-for-modern-business" element={<How_to_use_AI_SMS />} />
        <Route path="/blog/how-to-send-personalized-sms-at-scale" element={<How_to_use_Personalized_SMS />} />
        <Route path="/blog/how-to-integrate-bulk-sms-api-with-your-website-or-app" element={<How_to_intergrate_bulk_sms_api />} />
        <Route path="/blog/how-to-send-sms-for-appointment-reminders" element={<How_to_send_sms_for_appointment_reminders />} />
        <Route path="/blog/how-to-send-sms-for-emergency-alerts" element={<How_to_send_SMS_for_emergency_alerts />} />
        <Route path="/blog/top-4-fast2sms-alternative-in-2025" element={<Top_4_fast2sms_alternative_in_2025 />} />
        <Route path="/blog/how-to-integrate-sms-with-crm" element={<How_to_integrate_SMS_with_CRM />} />
        <Route path="/blog/how-to-use-bulk-sms-for-political-campaigns" element={<How_to_use_bulk_sms_for_political_campaign />} />
        <Route path="/blog/how-to-use-sms-for-abandoned-cart-recovery" element={<How_to_Use_SMS_for_Abandoned_Cart_Recovery />} />
        <Route path="/blog/how-to-build-an-sms-subscriber-list" element={<How_to_build_an_SMS_Subscriber_List />} />
        <Route path="/blog/top-5-things-you-need-to-know-before-choosing-a-bulk-sms-service-provider" element={<Top_5_things_to_know />} />
        <Route path="/blog/insider-guide-to-select-best-bulk-sms-service-provider" element={<Insider_Guide_to_Select_Bulk_SMS />} />
        <Route path="/blog/how-to-choose-the-best-bulk-sms-service-provider-in-india" element={<How_to_choose_service_in_india />} />
        <Route path="/blog/complete-guide-on-how-to-contact-best-bulk-sms-service-provider" element={<Complete_guide_for_best_bulk_sms_provider />} />
        <Route path="/blog/top-3-benefits-of-bulk-sms-services-you-should-know-about" element={<Top_3_Benefits_of_Bulk_SMS_Services />} />
        <Route path="/blog/your-sms-campaigns-are-not-converting" element={<Your_SMS_Campaign_Arenot />} />
        <Route path="/blog/unlocking-the-power-of-bulk-sms-transform-your-communication-strategy-today" element={<Unlocking_a_Power_of_Bulk_SMS />} />
        <Route path="/blog/dlt-registration-for-sms-in-india-a-complete-2025-guide" element={<DLT_Registration />} />
        <Route path="/blog/how-to-use-sms-for-customer-feedback-and-surveys" element={<Feedback_Customer />} />
        {/* <Route path="/blog/whatsapp-business-api-revised-pricing-plan" element={<New_Pricing/>}/> */}
        <Route path="/blog/multimedia-messaging-service-a-comprehensive-guide-to-mms-defination-and-benefits" element={<Multimedia_Messaging_Services />} />
        <Route path="/blog/sms-vs-whatsapp-vs-email-marketing-which-is-best-for-your-business-in-2025" element={<Sms_vs_email_Whatsapp />} />
        <Route path="/blog/10-industries-that-can-double-their-conversions-with-bulk-sms-service" element={<Ten_Industries />} />
        <Route path="/blog/how-to-send-bulk-sms-from-excel-step-by-step-tutorial" element={<Send_Excel />} />
        <Route path="/blog/how-to-choose-between-sms-and-mms-for-effective-marketing-campaigns" element={<Sms_and_Mms />} />
        <Route path="/blog/best-bulk-sms-providers-in-india" element={<Best_Bulk_Sms_Providers_In_India />} />
        <Route path="/blog/sms-marketing" element={<SMS_MARKETING />} />
        <Route path="/blog/top-10-telecom-companies-in-uae" element={<Top_ten_companies />} />
        <Route path="/blog/telecom-regulatory-authority" element={<TRA />} />
        <Route path="/blog/top-10-bulk-sms-service-provider-in-uae" element={<Top_10_Bulk_SMS_In_Uae />} />
        <Route path="/blog/best-bulk-sms-service-providers-in-uae" element={<Best_5_Bulk_SMS />} />
        <Route path="/blog/sms-marketing-platforms" element={<Best_SMS_Marketing_Platforms />} />
        <Route path="/blog/bulk-sms-uae" element={<BULKSMSUAEBLOG />} />
        <Route path="/blog/bulk-sms-vs-whatsapp-messages-which-is-better" element={<Bulk_SMS_vs_Whatsapp_Messages_Which_is_Better />} />
        <Route path="/blog/rcs-messaging-the-future-of-business-messaging" element={<RCSMESSAGE />} />
        <Route path="/blog/dlt-registration-india-guide" element={<DLT_Registration_2026 />} />
        <Route path="/blog/jio-dlt-registration-guide" element={<Jio_DLT_Registration_Guide />} />
        <Route path="/blog/airtel-dlt-registration" element={<Airtel_DLT />} />
        <Route path="blog/bsnl-dlt-registration-guide" element={<Bsnl_DLT />} />
        <Route path="/blog/vi-dlt-registration-guide" element={< Vi_DLT />} />
        <Route path="/blog/trai" element={< Trai_Guide />} />
        <Route path="blog/promotional-text-message-examples" element={<Promotional_TextmsgBlog />} />
        <Route path="/blog/sms-api" element={<Sms_Api />} />
        <Route path="/blog/sms-gateway" element={<Sms_Gateway />} />
        <Route path="/blog/top-etisalat-alternative-for-bulk-sms-uae" element={<Top5_Etisalat_Alt />} />
        <Route path="/blog/sender-id" element={<Sender_Id />} />
        <Route path="/blog/bulk-sms-marketing-strategies-uae-businesses" element={<Bulk_SMS_MarketingUAE />} />
        <Route path="/blog/sms-campaign-ideas-for-small-businesses" element={<Sms_CampaignIdeas />} />
        <Route path="/blog/sms-marketing-rules-uae" element={<Sms_Marketing_RulesUAE />} />

        {/* Dynamic Blog Route */}
        <Route path="/blog/:slug" element={<SingleBlog />} />
        <Route path="/best-bulk-sms-service-provider-in-india" element={<Best_Bulk_SMS_Provider_In_India />} />
        <Route path="/otp-service-provider" element={<OTP_Service_Provider />} />



        <Route path="/blog/what-is-bulk-sms-service-how-does-it-help-businesses" element={<What_is_Bulk_SMS_Service_How_Does_It_Help_Businesses />} />
        <Route path="/blog/how-to-use-bulk-sms-for-lead-generation" element={<How_to_use_bulk_sms_for_lead_generation />} />
        <Route path="/blog/how-to-use-sms-marketing-to-boost-your-website-traffic" element={<How_to_use_sms_marketing_to_boost_your_website_traffic />} />
        <Route path="/voice-broadcast" element={<Voice_broadcast />} />
        <Route path="/terms&conditions" element={<Terms_conditons />} />
        <Route path="/about" element={<About />} />
        <Route path="/loginblog" element={<LoginBlog />} />
        <Route path="/signupblog" element={<SignUpBlog />} />
        <Route path="/blogeditor/:userId" element={<BlogEditor />} />
        <Route path="/privacy-policy" element={<Privacypolicyapp />} />
        <Route path="/refund-policy" element={<Refund_policy />} />
        <Route path="/bulk-sms-provider-in-ahmedabad" element={<Bulk_sms_provider_ahmedabad />} />
        <Route path="/bulk-sms-provider-in-bangalore" element={<Bulk_sms_provider_bangalore />} />
        <Route path="/bulk-sms-provider-in-chennai" element={<Bulk_sms_provider_chennai />} />
        <Route path="/bulk-sms-provider-in-delhi" element={<Bulk_sms_provider_delhi />} />
        <Route path="/bulk-sms-provider-in-gaya" element={<Bulk_sms_provider_gaya />} />
        <Route path="/bulk-sms-provider-in-hyderabad" element={<Bulk_sms_provider_heyderabad />} />
        <Route path="/bulk-sms-provider-in-kolkata" element={<Bulk_sms_provider_kolkata />} />
        <Route path="/bulk-sms-provider-in-pune" element={<Bulk_sms_provider_pune />} />
        <Route path="/bulk-sms-provider-in-rajasthan" element={<Bulk_sms_provider_rajasthan />} />
        <Route path="/bulk-sms-provider-in-surat" element={<Bulk_sms_provider_surat />} />
        <Route path="/bulk-sms-provider-in-mumbai" element={<Bulks_sms_provider_mumbai />} />
        <Route path="/bulk-sms-uae" element={<Bulks_sms_UAE />} />
        <Route path="/bulk-sms-saudi-arabia" element={<Bulks_sms_SAUDI />} />
        <Route path="/bulk-sms-qatar" element={< Bulks_sms_QATAR />} />
        <Route path="/bulk-sms-oman" element={< Bulks_sms_OMAN />} />
        <Route path="/bulk-sms-abudhabi" element={< Bulks_sms_ABUDHABI />} />
        <Route path="/bulk-sms-dubai" element={< Bulks_sms_DUBAI />} />
        <Route path="/bulk-sms-service-provider-in-patna" element={< Bulk_Sms_Patna />} />
        <Route path="/bulk-sms-provider-in-jaipur" element={< Bulk_Sms_Jaipur />} />
        <Route path="/bulk-sms-service-provider-in-noida" element={< Bulk_Sms_Noida />} />
        <Route path="/sms-marketing-in-dubai" element={< SMS_Marketing_in_Dubai />} />
        <Route path="/sms-gateway-api" element={< SMS_Gateway_API />} />
        <Route path="/sms-gateway-api" element={< SMS_Gateway_API />} />
        <Route path="/promotional-sms" element={< Promotional_SMS />} />
        <Route path="/bulk-sms-uk" element={<Bulk_Sms_UK />} />
        <Route path="/bulk-sms-canada" element={<Bulk_Sms_Canada />} />
        <Route path="/sms-broadcast-australia" element={<Bulk_Sms_Australia />} />
        <Route path="/bulk-sms-malaysia" element={<Bulk_Sms_Malaysia />} />
        <Route path="/bulk-sms-singapore" element={<Bulk_Sms_Singapore />} />
        <Route path="/bulk-sms-brazil" element={<Bulk_Sms_Brazil />} />
        <Route path="/bulk-sms-nigeria" element={<Bulk_SMS_Nigeria />} />
        <Route path="/two-way-sms" element={<TWO_WAY_SMS />} />
        <Route path="/bulk-sms-kuwait" element={<Bulk_sms_Kuwait />} />
        <Route path="/blog/a2p-sms-messaging-business-guide" element={<A2P_Sms_Messaging />} />
        <Route path="/blog/best-otp-sms-service-providers-in-uae" element={<Otp_Sms_Provider />} />
        <Route path="/blog/post/:slug" element={<SingleBlog />} />




        <Route path="/cookie" element={<Cookie />} />
        <Route path="/whatsapp-api-provider-bangalore" element={<Whatsapp_business_api_provider_bangalore />} />
        <Route path="/whatsapp-api-provider-chennai" element={<Whatsapp_business_api_provider_chennai />} />
        <Route path="/whatsapp-api-provider-delhi" element={<Whatsapp_business_api_provider_delhi />} />
        <Route path="/whatsapp-api-provider-hyderabad" element={<Whatsapp_business_api_provider_hyderabad />} />
        <Route path="/whatsapp-api-provider-kolkata" element={<Whatsapp_business_api_provider_kolkata />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/smo" element={<Smo />} />
        <Route path="/social-page-promotional" element={<Social_page_promotional />} />
        <Route path="/social-media-profiling" element={<Social_media_profiling />} />
        <Route path="/logo-designing" element={<Logo_designing />} />


        <Route path='/learning-hub/' element={<PostPage />} />
        {/* <Route exact path="/editor/:userId" element={<BlogEditor />} /> */}
        <Route path="/:category/:subCategory/:slug" element={<BlogPostDetail />} />
        {/* <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/signup" element={<SignupForm />} /> */}
        <Route path="/edit/:postId" element={<EditBlogPostForm />} />


        {/* error routes */}
        <Route path="*" element={<Error />} />


      </Routes>

    </BrowserRouter>
  );
}

export default App;
