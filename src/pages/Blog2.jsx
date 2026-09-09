
import React from 'react';
import { Link } from 'react-router-dom';
import waveSVG from "../assets/wave.svg";
import { motion } from "framer-motion";
import "./blog.css"
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'react-hot-toast';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axiosClient from '../Blog/AxiosClient';
import icons1 from "../assets/Blog1.jpg";
import icons2 from "../assets/sms-notification-msg24x7.jpg";
import icons3 from "../assets/businessman-holding-message-notifications-social-media_110893-1321-1024x482.png";
import icons4 from "../assets/why-messages-are-not-being-delivered-1024x381.jpg";
import icons5 from "../assets/NGOs-uses-DIGINTRA-Bulk-SMS-Services.jpg";
import icons6 from "../assets/SMS-uses-in-School.jpg";
import icons7 from "../assets/Lead-Generation-from-SMS-marketing.jpg"
import icons8 from "../assets/dgntra-seo-1024x354.jpg";
import icons9 from "../assets/How_to_Send_Bulk_Messages_Without_Being_Marked_as_Spam.jpeg";
import icons10 from "../assets/Bulk_SMS_vs_Whatsapp_Messages_Which is_Better.jpeg";
import icons11 from "../assets/What_is_Bulk_SMS_Service_How_Does_It_Help_Businesses.jpeg";
import icons12 from "../assets/Bulk_SMS_vs_Whatsapp_Messages_Which is_Better.jpeg";
import BULKSMS from '../assets/bulksms.jpg';
import SMSMARK from '../assets/smsvsmarketing.webp';
import SMSMARK2 from '../assets/SMSmarketing.jpg';
import BULKSMS2 from '../assets/WhatisBulkSMS.jpg';
import BULKSMS3 from '../assets/Bulksms2.jpg';
import BULKSMS4 from '../assets/bulksmssalonandapa.jpg';
import BULKHOSPITAL from '../assets/Bulkhospital.jpg';
import Dhanbad from '../assets/Dhanbad Bulk SMS.jpg';
import Meerut from '../assets/Meerut Bulk SMS.jpg';
import Kanpur from '../assets/Bulk SMS Kanpur.jpg';
import ecommerce from '../assets/bulkecommerce.jpg';
import smstips from '../assets/smstips.jpg';
import Footer from '../components/Footer';
import Latest from '../assets/bulksmstrend.jpg'
import BulkSMS from '../assets/bulksmsmarketing.jpg';
import AISMS from '../assets/impactaionsms.jpg';
import Future from '../assets/futureofbulksms.jpg';
import BULKSMS5 from '../assets/bulksmsmumbai.jpg';
import BEST from '../assets/bestbulksmsprovider.jpg';
import SMSCAM from '../assets/smscampaign.jpg';
import DLT from '../assets/dltregistration.jpg';
import PUNESMS from '../assets/punebulk.jpg';
import FACEBOOK from '../assets/facebook.jpg';
import SMSAI from '../assets/smsai.jpg';
import PERSONAL from '../assets/personalsms.jpg';
import BULKSMSAPI from '../assets/bulksmsapi.jpg';
import SMSREMINDERS from '../assets/SMSreminder.jpg'
import SMSALERTPIC from '../assets/smsalertpic.jpg';
import FAST2SMS from '../assets/fast2sms.jpg'
import INTEGRATE from '../assets/integrate.jpg';
import CAMPAIGN from '../assets/campaign.jpg';
import SMSABANDONED from '../assets/smsabndoned.jpg';
import SMSSUBSCRIBER from '../assets/smssubscriber.jpg';
import SERVICEPRO from '../assets/smsservice.jpg'
import INSIDER from '../assets/insider.webp';
import SERVICEIND from '../assets/serviceindia.webp'
import CompleteGuide from '../assets/completeguide.webp'
import BulkSMSBenefits from '../assets/bulksmsbenefits.webp';
import SMSCAMPAIGN from '../assets/bulksmsmarketing2.jpg';
import BULKSMSUNLOCK from '../assets/bulksmsunlock.jpg';
import DLTREGISTRATION from '../assets/dltregistration2.webp';
import CUSTOMERFEEDBACK from '../assets/feedback.webp';
import MULTIMEDIAMESSAGE from '../assets/multimediamessage.webp';
// import NEWPRICING from '../assets/Whatsappbusinessapi.png';
import SmsEmailWhatsapp from '../assets/smsemailwhatsapp.webp';
import TenIndustries from '../assets/tenindustries.jpg';
import SENDEXCEL from '../assets/sendthroughexcel.jpg';
import SMSMMS from '../assets/smsmms.jpg';
import BestBULK from '../assets/bestbulk10.jpg'
import SMSMAR from "../assets/sms_marketing.jpg";
import tentelecomcompanies from '../assets/ten_companies.jpg'
import TRA from '../assets/trauae.jpg'
import TRA2 from "../assets/top-ten-bulk-sms-service-provider-in-uae.jpg";
import Best_Bulk_SMS from "../assets/5_best_Bulk_SMS.jpg"
import Best_SMS from '../assets/best-sms-marketing.jpeg'
import BULKUAE from '../assets/UAE_Bulk_SMS_Service.jpeg'
import RICHMESSAGE from '../assets/RichCommunicationServices.jpeg'
import dltImage2 from "../assets/jio-dlt-registration.jpg";
import dltImage from "../assets/dlt2026.jpg";
import airteldlt from "../assets/airtel-dlt.png";
import bsnldlt from "../assets/bsnldlt.jpg";
import vidlt from "../assets/vidlt.jpg";
import trai from "../assets/trai.jpeg";
import smsmarketing from "../assets/Smsmarketing.jpeg";
import promotionaltextmsg from "../assets/promotional-text-msg.jpeg";
import sms from "../assets/sms-api.jpg";
import smsgateway from "../assets/sms-gateway.jpg";
import topetialt from "../assets/top5etisalternative.jpeg";
import senderid from "../assets/whatissenderid.jpeg";
import digintra_photo3 from "../assets/Digintra_photo3.jpeg";
import Sms_campaign from "../assets/Sms_campaign.jpeg";
import SmsMarketing_Rules from "../assets/SmsMarketing_Rules.jpeg";
import A2P_Sms_Messaging from "../assets/A2P_Sms.jpeg";
import Otp_Sms_Provider from "../assets/Otp_Sms_Provider.jpeg";
  const oldBlogData = [
    {
      image: icons1,
      title: "Compliance Guidelines for Successful SMS Marketing",
      link: "/blog/compliance-guidelines-for-successful-sms-marketing",
    },
    {
      image: icons2,
      title: "The Top 10 Advantages of SMS Marketing for Business",
      link: "/blog/the-top-10-advantages-of-sms-marketing-for-business",
    },
    {
      image: icons3,
      title: "Budget-Friendly SMS Marketing Tactics for Effective Campaigns",
      link: "/blog/budget-friendly-sms-marketing-tactics-for-effective-campaigns",
    },
    {
      image: icons4,
      title: "Why Are My Bulk Messages Not Being Delivered?",
      link: "/blog/why-are-my-bulk-messages-not-being-delivered",
    },
    {
      image: icons5,
      title: "Bulk SMS Service for Charities, NGOs & Community Groups",
      link: "/blog/bulk-sms-service-for-charities-trust-ngos-community-groups",
    },
    {
      image: icons6,
      title: "How Bulk SMS can be used in the Education sector?",
      link: "/blog/how-bulk-sms-can-be-used-in-the-education-sector",
    },
    {
      image: icons7,
      title: "How to use Bulk SMS for Lead Generation?",
      link: "/blog/how-to-use-bulk-sms-for-lead-generation",
    },
    {
      image: icons8,
      title: "How to use SMS marketing to boost your website traffic",
      link: "/blog/how-to-use-sms-marketing-to-boost-your-website-traffic",
    },
    {
      image: icons9,
      title: "How to Send Bulk Messages Without Being Marked as Spam",
      link: "/blog/how-to-send-bulk-messages-without-being-marked-as-spam",
    },
    {
      image: icons10,
      title: "Bulk SMS vs Whatsapp Messages: Which is Better?",
      link: "/blog/bulk-sms-vs-whatsapp-messages-which-is-better",
    },
    {
      image: icons11,
      title: "What is Bulk SMS Service? How Does It Help Businesses",
      link: "/blog/what-is-bulk-sms-service-how-does-it-help-businesses",
    },
    {
      image: icons12,
      title: "How to Send Bulk SMS without Getting Spammed",
      link: "/blog/how-to-send-bulk-sms-without-getting-spammed",
    },
    {
      image: BULKSMS,
      title: "Top 5 Bulk SMS Provider in India",
      link: "/blog/top-5-bulk-sms-provider-in-india",
    },
    {
      image: SMSMARK,
      title: "SMS v/s Email Marketing",
      link: "/blog/sms-vs-email-marketing",
    },
    {
      image: SMSMARK2,
      title: "How Top Businesses Use SMS Marketing to Build Customer Satisfaction",
      link: "/blog/how-top-businesses-use-sms-marketing-to-build-customer-satisfaction",
    },
    {
      image: BULKSMS2,
      title: "What is Bulk SMS and How Does It Work?",
      link: "/blog/what-is-bulk-sms-and-how-does-it-work",
    },
    {
      image: BULKSMS3,
      title: "Top 5 Benefits of Bulk SMS Marketing for Businesses",
      link: "/blog/top-5-benefits-of-bulk-sms-marketing-for-businesses",
    },
    {
      image: BULKSMS4,
      title: "Bulk SMS for Spa and Salon",
      link: "/blog/bulk-sms-for-spa-and-salon",
    },
    {
      image: BULKHOSPITAL,
      title: "Bulk SMS Services for Hospitals",
      link: "/blog/bulk-sms-services-for-hospitals",
    },
    {
      image: ecommerce,
      title: "Bulk SMS Service for Ecommerce",
      link: "/blog/bulk-sms-service-for-ecommerce",
    },
    {
      image: smstips,
      title: "How to Write Effective SMS Marketing Messages that Convert",
      link: "/blog/how-to-write-effective-sms-marketing-meassages-that-convert",
    },
    {
      image: BulkSMS,
      title: "Bulk SMS Marketing Regulations",
      link: "/blog/bulk-sms-marketing-regulations",
    },
    {
      image: Latest,
      title: "Latest Trends in Bulk SMS Marketing in 2025",
      link: "/blog/latest-trend-in-bulk-sms-marketing-in-2025",
    },
    {
      image: AISMS,
      title: "Impact of AI and Chatbots on Bulk SMS Marketing",
      link: "/blog/impact-of-ai-and-chatbots-on-bulk-sms-marketing",
    },
    {
      image: Future,
      title: "Future of Bulk SMS: What to Expect in the Next 5 Years",
      link: "/blog/future-of-bulk-SMS-what-to-expect-in-the-next-5-years",
    },
    {
      image: BULKSMS5,
      title: "Top 4 Bulk SMS Provider in Mumbai",
      link: "/blog/top-4-bulk-sms-provider-in-mumbai",
    },
    {
      image: BEST,
      title: "How to Choose the Best Bulk SMS Provider",
      link: "/blog/how-to-choose-the-best-bulk-sms-provider",
    },
    {
      image: SMSCAM,
      title: "How to Run Automated SMS Campaigns: A Step-by-Step Guide",
      link: "/blog/how-to-run-automated-sms-campaigns",
    },
    {
      image: DLT,
      title: "What is DLT Registration and Why it is Necessary in the SMS Industry",
      link: "/blog/what-is-dlt-registration-and-why-it-is-necessary-in-the-sms-industry",
    },
    {
      image: PUNESMS,
      title: "Top 3 Bulk SMS Service Provider in Pune",
      link: "/blog/top-3-bulk-sms-service-provider-in-pune",
    },
    {
      image: FACEBOOK,
      title: "Get your Facebook Business Manager Account verified in 5 easy steps",
      link: "/blog/get-your-facebook-business-manager-account-verified-in-5-easy-steps",
    },
    {
      image: SMSAI,
      title: "How to Use AI for SMS Marketing: A Game-Changer for Modern Businesses",
      link: "/blog/how-to-use-ai-for-sms-marketing-a-game-changer-for-modern-business",
    },
    {
      image: PERSONAL,
      title: "How to Send Personalized SMS at Scale",
      link: "/blog/how-to-send-personalized-sms-at-scale",
    },
    {
      image: BULKSMSAPI,
      title: "How to Integrate Bulk SMS API with Your Website or App",
      link: "/blog/how-to-integrate-bulk-sms-api-with-your-website-or-app",
    },
    {
      image: SMSREMINDERS,
      title: "How to Send SMS for Appointment Reminders",
      link: "/blog/how-to-send-sms-for-appointment-reminders",
    },
    {
      image: SMSALERTPIC,
      title: "How to Send SMS for Emergency Alerts",
      link: "/blog/how-to-send-sms-for-emergency-alerts",
    },
    {
      image: FAST2SMS,
      title: "Top 4 Fast2SMS Alternatives in 2025",
      link: "/blog/top-4-fast2sms-alternative-in-2025",
    },
    {
      image: INTEGRATE,
      title: "How to Integrate SMS with CRM",
      link: "/blog/how-to-integrate-sms-with-crm",
    },
    {
      image: CAMPAIGN,
      title: "How to Use Bulk SMS for Political Campaigns",
      link: "/blog/how-to-use-bulk-sms-for-political-campaigns",
    },
    {
      image: SMSABANDONED,
      title: "How to Use SMS for Abandoned Cart Recovery",
      link: "/blog/how-to-use-sms-for-abandoned-cart-recovery",
    },
    {
      image: SMSSUBSCRIBER,
      title: "How to Build an SMS Subscriber List",
      link: "/blog/how-to-build-an-sms-subscriber-list",
    },
    {
      image: SERVICEPRO,
      title: "Top 5 Things You Need to Know Before Choosing a Bulk SMS Service Provider",
      link: "/blog/top-5-things-you-need-to-know-before-choosing-a-bulk-sms-service-provider",
    },
    {
      image: INSIDER,
      title: "Insider Guide to Select Best Bulk SMS Service Provider",
      link: "/blog/insider-guide-to-select-best-bulk-sms-service-provider",
    },
    {
      image: SERVICEIND,
      title: "How to Choose the Best Bulk SMS Service Provider in India",
      link: "/blog/how-to-choose-the-best-bulk-sms-service-provider-in-india",
    },
    {
      image: CompleteGuide,
      title: "Complete Guide on How to Contact Best Bulk SMS Service Provider",
      link: "/blog/complete-guide-on-how-to-contact-best-bulk-sms-service-provider",
    },
    {
      image: BulkSMSBenefits,
      title: "Top 3 Benefits of Bulk SMS Services You Should Know About",
      link: "/blog/top-3-benefits-of-bulk-sms-services-you-should-know-about",
    },
    {
      image: SMSCAMPAIGN,
      title: "Your SMS Campaigns Aren’t Converting?",
      link: "/blog/your-sms-campaigns-are-not-converting",
    },
    {
      image: BULKSMSUNLOCK,
      title: "Unlocking the Power of Bulk SMS: Transform Your Communication Strategy Today",
      link: "/blog/unlocking-the-power-of-bulk-sms-transform-your-communication-strategy-today",
    },
    {
      image: DLTREGISTRATION,
      title: "DLT Registration for SMS in India: A Complete 2025 Guide",
      link: "/blog/dlt-registration-for-sms-in-india-a-complete-2025-guide",
    },
    {
      image: CUSTOMERFEEDBACK,
      title: "How to Use SMS for Customer Feedback and Surveys",
      link: "/blog/how-to-use-sms-for-customer-feedback-and-surveys",
    },
    {
      image: MULTIMEDIAMESSAGE,
      title: "Multimedia Messaging Service: A Comprehensive Guide to MMS Definition and Benefits",
      link: "/blog/multimedia-messaging-service-a-comprehensive-guide-to-mms-defination-and-benefits",
    },
    {
      image: SmsEmailWhatsapp,
      title: "SMS vs WhatsApp vs Email Marketing: Which is Best for Your Business in 2025?",
      link: "/blog/sms-vs-whatsapp-vs-email-marketing-which-is-best-for-your-business-in-2025",
    },
    {
      image: TenIndustries,
      title: "10 Industries That Can Double Their Conversions with Bulk SMS Service",
      link: "/blog/10-industries-that-can-double-their-conversions-with-bulk-sms-service",
    },
    {
      image: SENDEXCEL,
      title: "How to Send Bulk SMS from Excel: Step-by-Step Tutorial",
      link: "/blog/how-to-send-bulk-sms-from-excel-step-by-step-tutorial",
    },
    {
      image: SMSMMS,
      title: "How to Choose Between SMS and MMS for Effective Marketing Campaigns",
      link: "/blog/how-to-choose-between-sms-and-mms-for-effective-marketing-campaigns",
    },
    {
      image: BestBULK,
      title: "10 Best Bulk SMS Providers in India 2025",
      link: "/blog/best-bulk-sms-providers-in-india",
    },
    {
      image: SMSMAR,
      title: "How to Choose Between SMS and MMS for Effective Marketing Campaigns",
      link: "/blog/sms-marketing",
    },
    {
      image: tentelecomcompanies,
      title: "Top 10 Telecom Companies in UAE (2025 List and Picks)",
      link: "/blog/top-10-telecom-companies-in-uae",
    },
    {
      image: TRA,
      title: "Telecom Regulatory Authority UAE: A Complete Guide",
      link: "/blog/telecom-regulatory-authority",
    },
    {
      image: TRA2,
      title: "Top 10 Bulk SMS Service Provider in UAE (2025 Review)",
      link: "/blog/top-10-bulk-sms-service-provider-in-uae",
    },
    {
      image: Best_Bulk_SMS,
      title: "5 Best Bulk SMS Service Providers in UAE – Features, Pricing",
      link: "/blog/best-bulk-sms-service-providers-in-uae",
    },
    {
      image: Best_SMS,
      title: "10 Best SMS Marketing Platforms in 2026: A Complete Guide for Businesses",
      link: "/blog/sms-marketing-platforms",
    },
    {
      image: BULKUAE,
      title: "Bulk SMS UAE: The Ultimate Guide for UAE Business Owners to Boost Growth & Customer Engagement",
      link: "/blog/bulk-sms-uae",
    },
    {
      image: RICHMESSAGE,
      title: "RCS Messaging: The Future of Business Communication in 2026",
      link: "/blog/rcs-messaging-the-future-of-business-messaging",
    },
    {
      image: dltImage,
      title: "DLT Registration in India 2026 – Process, Charges, Documents & Benefits Guide",
      link: "/blog/dlt-registration-india-guide",
    },
    {
      image: dltImage2,
      title: "Jio DLT Registration Guide | Step-by-Step Process",
      link: "/blog/jio-dlt-registration-guide",
    },
    {
      image: airteldlt,
      title: "Airtel DLT Registration 2026: Step-by-Step Complete Guide",
      link: "/blog/airtel-dlt-registration",
    },
    {
      image: bsnldlt,
      title: "BSNL DLT Registration: Ultimate Step-by-Step Guide for Businesses",
      link: "/blog/bsnl-dlt-registration-guide",
    },
    {
      image: vidlt,
      title: "Vi DLT Registration Guide 2026 | Complete Process, Documents & Template Approval",
      link: "/blog/vi-dlt-registration-guide"
    },
    {
      image: trai,
      title: "TRAI Guide 2026: Full Form, Complaints & SMS Rules",
      link: "/blog/trai"
    },
    {
      image: promotionaltextmsg,
      title: "50 Promotional Text Message Examples to Boost Conversions in 2026",
      link: "/blog/promotional-text-message-examples"
    },
    {
      image: sms,
      title: "SMS API: Complete Guide to Integrating Text Messaging into Your Applications",
      link: "/blog/sms-api"
    },
    {
      image: smsgateway,
      title: "SMS Gateway: The Complete Guide to Fast, Reliable Business Messaging",
      link: "/blog/sms-gateway"
    },
    {
      image: topetialt,
      title: "Top 5 Etisalat Alternatives for Bulk SMS in UAE (2026 Guide)",
      link: "/blog/top-etisalat-alternative-for-bulk-sms-uae"
    },

    {
      image: senderid,
      title: "What is a Sender ID? Complete Guide to SMS Sender ID for Businesses",
      link: "/blog/sender-id"
    },

    {
      image: digintra_photo3,
      title: "Bulk SMS Marketing Strategies for UAE Businesses: A Complete Guide to Higher Engagement and Better ROI ",
      link: "/blog/bulk-sms-marketing-strategies-uae-businesses"
    },

    {
      image: Sms_campaign,
      title: "SMS Campaign Ideas for Small Businesses",
      link: "/blog/sms-campaign-ideas-for-small-businesses"
    },
    {
      image: SmsMarketing_Rules,
      title: "SMS Marketing Rules in UAE (2026 Guide)",
      link: "/blog/sms-marketing-rules-uae"
    },

    {
      image: A2P_Sms_Messaging,
      title: "A2P SMS Messaging and How to Use It for Business",
      link: "/blog/a2p-sms-messaging-business-guide"
    },
    {
      image: Otp_Sms_Provider,
      title: "5 Best OTP SMS Service Providers in UAE",
      link: "/blog/best-otp-sms-service-providers-in-uae"
    },




  ];
const MainPage = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [limit, setLimit] = useState(9);

  useEffect(() => {
    fetchBlogs();
  }, [currentPage, limit]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axiosClient.get(`/public/blogs?page=${currentPage}&limit=${limit}`);
      if (response.data && response.data.success && response.data.blogs && response.data.blogs.length > 0) {
        setBlogData(response.data.blogs);
        setTotalPages(response.data.totalPages || 1);
        setTotalBlogs(response.data.total || response.data.blogs.length);
      } else {
        // Safe fallback if database has no published blogs yet
        const start = (currentPage - 1) * limit;
        setBlogData(oldBlogData.slice(start, start + limit));
        setTotalPages(Math.ceil(oldBlogData.length / limit));
        setTotalBlogs(oldBlogData.length);
      }
    } catch (error) {
      console.warn("Backend dynamic blogs fetch fallback to local cache:", error);
      const start = (currentPage - 1) * limit;
      setBlogData(oldBlogData.slice(start, start + limit));
      setTotalPages(Math.ceil(oldBlogData.length / limit));
      setTotalBlogs(oldBlogData.length);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const element = document.getElementById('allblog');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const startEntry = totalBlogs === 0 ? 0 : (currentPage - 1) * limit + 1;
  const endEntry = Math.min(currentPage * limit, totalBlogs);

  if (loading && blogData.length === 0) {
    return <div className="text-center py-20 text-2xl">Loading Blogs...</div>;
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DIGINTRA® – A great source of information for any marketers or business owners who are interested in learning more about the world of mobile messaging.</title>
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://www.digintra.com/blogs" />
        <meta name='description' content='DIGINTRA is a fast-growing SMS platform, offering secure A2P messaging solutions for all. Empower your communication with instant, reliable delivery.' />
      </Helmet>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-lime-100 ">

        {/* Soft Green Glow Effects */}
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-80 h-80 bg-green-300 rounded-full blur-3xl opacity-30"
        />

        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-300 rounded-full blur-3xl opacity-30"
        />

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="relative z-10 max-w-4xl text-center px-6 pb-32 mt-32"
        >

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-800 "
          >
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              TechTalk:
            </span>{" "}
            Navigating the Digital Frontier
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-600"
          >
            "Exploring the latest trends, innovations, and insights in the world of technology."
          </motion.p>

          {/* Button */}
          <motion.a
            href="#allblog"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            className="mt-10 inline-block px-8 py-4 rounded-xl text-lg font-semibold 
          bg-gradient-to-r from-green-500 to-emerald-600 text-white active:scale-90
          hover:shadow-xl hover:shadow-green-300/50
          transition-all duration-300"
          >
            Explore now
          </motion.a>
        </motion.div>

        {/* Bottom Wave SVG */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-0 left-0 w-full overflow-hidden leading-none"
        >
          <svg
            className="relative block w-full h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L60,218.7C120,213,240,203,360,197.3C480,192,600,192,720,202.7C840,213,960,235,1080,224C1200,213,1320,171,1380,149.3L1440,128V320H0Z"
            ></path>
          </svg>
        </motion.div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white mb-20">

        {/* Heading */}
        <div id='allblog' className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">
            All Blogs
          </h2>

          {/* Beautiful Gradient HR */}
          <div className="flex justify-center mt-4">
            <div className="h-1 w-28 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 rounded-full"></div>
          </div>
        </div>

        {/* Top Control Bar: Total Count & Per Page Quick Selector */}
        <div className="max-w-6xl mx-auto px-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-3.5 sm:p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-sm">
          <div className="flex items-center gap-2.5 text-sm text-slate-600">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
            <span>
              Showing <strong className="font-bold text-slate-800">{startEntry}</strong> to{' '}
              <strong className="font-bold text-slate-800">{endEntry}</strong> of{' '}
              <strong className="font-bold text-slate-800">{totalBlogs}</strong> blogs
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Per page:</span>
            <select
              value={limit}
              onChange={(e) => {
                setLimit(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-slate-300 hover:border-blue-500 focus:border-blue-500 rounded-xl px-3 py-1.5 text-sm font-bold text-slate-800 bg-slate-50 hover:bg-white focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all cursor-pointer shadow-sm"
            >
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={12}>12</option>
              <option value={15}>15</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="max-w-6xl mx-auto px-4 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog, index) => {
            const blogImg = blog.featuredImage || blog.image || icons1;
            const blogLink = blog.slug ? `/blog/${blog.slug}` : (blog.link || '#');
            return (
              <div
                key={blog._id || index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group flex flex-col justify-between"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={blogImg}
                    alt={blog.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                    onError={(e) => { e.target.src = icons1; }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {blog.title}
                  </h3>

                  <Link
                    to={blogLink}
                    className="mt-5 inline-block text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2.5 px-5 rounded-lg font-medium 
        hover:from-blue-600 hover:to-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination & Limit Filter Footer */}
        {totalBlogs > 0 && (
          <div className="max-w-6xl mx-auto px-4 mt-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 sm:p-5 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50">
              
              {/* Left Side: Showing info & Limit dropdown */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-600">
                <span>
                  Showing <strong className="font-bold text-slate-800">{startEntry}</strong> to{' '}
                  <strong className="font-bold text-slate-800">{endEntry}</strong> of{' '}
                  <strong className="font-bold text-slate-800">{totalBlogs}</strong> blogs
                </span>

                <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Per page:</span>
                  <select
                    value={limit}
                    onChange={(e) => {
                      setLimit(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="border border-slate-300 hover:border-blue-500 focus:border-blue-500 rounded-xl px-3 py-1.5 text-sm font-bold text-slate-800 bg-slate-50 hover:bg-white focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all cursor-pointer shadow-sm"
                  >
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={12}>12</option>
                    <option value={15}>15</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                  </select>
                </div>
              </div>

              {/* Right Side: Modern Eye-Catchy Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* PREVIOUS BUTTON */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous Page"
                    className="group relative flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-x-0 bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 text-slate-700 hover:text-blue-600 border border-slate-200 hover:border-blue-300 hover:shadow-md hover:-translate-x-0.5 active:translate-x-0"
                  >
                    <ChevronLeft
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-x-1 text-blue-600"
                    />
                    <span className="tracking-wide">Previous</span>
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1 px-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter(page => page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1))
                      .map((page, index, arr) => {
                        const showEllipsis = index > 0 && page - arr[index - 1] > 1;
                        const isActive = currentPage === page;
                        return (
                          <React.Fragment key={page}>
                            {showEllipsis && (
                              <span className="px-1 text-slate-400 font-bold tracking-widest text-xs">•••</span>
                            )}
                            <button
                              onClick={() => handlePageChange(page)}
                              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 shadow-sm ${
                                isActive
                                  ? 'bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 text-white shadow-lg shadow-blue-500/35 scale-105 ring-2 ring-blue-400/30'
                                  : 'bg-white border border-slate-200/80 text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 hover:border-blue-300 hover:scale-105'
                              }`}
                            >
                              {page}
                            </button>
                          </React.Fragment>
                        );
                      })}
                  </div>

                  {/* NEXT BUTTON */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next Page"
                    className="group relative flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 shadow-md shadow-blue-500/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none disabled:hover:translate-x-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white hover:shadow-lg hover:shadow-blue-500/30 hover:translate-x-0.5 active:translate-x-0"
                  >
                    <span className="tracking-wide">Next</span>
                    <ChevronRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 text-white"
                    />
                  </button>
                </div>
              )}

            </div>
          </div>
        )}
      </section>
      <Footer />
    </>

  )
}

export default MainPage