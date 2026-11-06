"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft, ChevronRight, Maximize2, X, Star, Compass, Target,
  Cpu, Trophy, Layers, ChevronDown, Zap, Shield, BarChart3,
  MessageSquare, QrCode, Camera, TrendingUp, LineChart, Smartphone,
  Brain, ClipboardList, RefreshCw, PieChart, Monitor, Users, Tag,
  History, Database, Radio, ScanLine, Lock, Weight, Bell, Battery, Wrench,
} from "lucide-react";
import { projectsStyles as styles } from "@/styles/themeStyles";

// ─── Project Data ─────────────────────────────────────────────────────────────

const projectsData = [
  {
    id: "intern-ticketing",
    title: "IT Support Ticketing & Inventory System",
    category: "Full-Stack & AI Automation",
    overview:
      "Imagine an office where every broken computer, jammed printer, or network issue is simply reported through WhatsApp, exactly as employees already do, and it automatically becomes a structured ticket in a dashboard without filling out any form.\n\nThat is what we built for PT Dtech Inovasi Indonesia. The system does not just replace messy spreadsheets and scattered chats. It also brings in an AI chatbot that independently assesses the severity of each problem: if the issue is minor, the bot guides the employee through self-troubleshooting steps. If it is serious, an urgent ticket immediately appears at the top of the dashboard with a distinct visual marker.\n\nBeyond ticketing, every hardware asset in the company, from laptops to network switches, now has its own QR code. Scan, update the status, and the device history is saved automatically in a centralized system.",
    starFeatures: [
      {
        icon: "MessageSquare",
        title: "AI-Powered WhatsApp Triage Bot",
        teaser: "DeepSeek AI + N8N — from chat message to structured ticket",
        detail:
          "The system integrates N8N Workflow Automation as a message broker that processes every incoming WhatsApp message into a DeepSeek AI analysis queue. The AI model performs intent classification and severity scoring. If the problem is detected as minor, the bot responds with guided troubleshooting steps. If severity is high, a JSON payload containing the issue metadata, timestamp, and employee ID is automatically sent to the Laravel REST API to create an urgent ticket, flagged with a red priority indicator and sorted to the top of the queue based on severity index.",
        tags: ["DeepSeek AI", "N8N Automation", "WhatsApp API", "Laravel REST API"],
      },
      {
        icon: "QrCode",
        title: "QR Code Asset Lifecycle Tracking",
        teaser: "Scan, update, and trace — every asset fully accounted for",
        detail:
          "Every hardware asset is configured with a unique QR code encoded with its corresponding PostgreSQL record UUID. IT staff can scan the QR using the mobile-responsive React.js interface to update asset status in real time, covering states such as Active, On Loan, Under Repair, Damaged, or Missing. Each status change is logged in an audit table with a foreign key to the responsible technician_id, so the full device history is permanently stored and displayed as a per-asset timeline on the inventory detail page.",
        tags: ["QR Code", "PostgreSQL", "React.js", "Audit Log"],
      },
      {
        icon: "BarChart3",
        title: "Real-Time Technician KPI Dashboard",
        teaser: "Live monitoring of tickets, technicians, and asset conditions",
        detail:
          "The analytics dashboard is built with React.js components that consume data from Laravel aggregation endpoints. It calculates key metrics including open and closed ticket counts per technician, mean time to respond (MTTR), and breakdown by issue category. Asset inventory data is displayed in a filtered table view by status category, allowing management to monitor the full state of IT hardware without any manual physical inspection.",
        tags: ["React.js", "Laravel Analytics API", "PostgreSQL Aggregation"],
      },
      {
        icon: "Shield",
        title: "Stateless JWT & Google OAuth Security",
        teaser: "Token-based authentication across all integrated services",
        detail:
          "Cross-service authentication is implemented using JSON Web Tokens signed with the HS256 algorithm. Every request to a protected endpoint is validated through Laravel middleware that decodes and verifies the token signature. For frictionless onboarding, the system also supports Google OAuth 2.0 as a login alternative, pulling user identity from the Google API and mapping it to an internal user record automatically, eliminating the need for manual registration for new employees.",
        tags: ["JWT HS256", "Google OAuth 2.0", "Laravel Middleware", "API Security"],
      },
    ],
    starMethod: {
      situation:
        "PT Dtech Inovasi Indonesia was managing all technical incident reports through unstructured personal WhatsApp messages. There was no ticket tracking system, no history of issue resolution, and company hardware assets were managed entirely by hand with no centralized database.",
      task:
        "Collaborate in a two-person team to design and build an enterprise-grade IT ticketing and inventory system without forcing employees to change their existing communication habits on WhatsApp.",
      action:
        "Built a responsive frontend with React.js and a REST API backend using Laravel 12 with PostgreSQL. Integrated DeepSeek AI through N8N Workflow Automation to parse WhatsApp messages into structured tickets automatically. Implemented QR Code scanning for inventory auditing and applied JWT and Google OAuth for cross-service authentication.",
      result:
        "All company hardware assets were successfully digitalized into a centralized inventory system. Technical issue reports that previously went missing are now automatically captured through WhatsApp. Management gained real-time visibility into technician performance and asset conditions through the analytics dashboard.",
    },
    tags: ["React.js", "Laravel 12", "JWT / OAuth", "N8N Automation", "DeepSeek AI", "QR Code", "PostgreSQL"],
    images: [
      { src: "/projects/INTERN 1.png", alt: "Real-Time Analytics Dashboard" },
      { src: "/projects/INTERN 2.png", alt: "Ticket Queue Management Interface" },
      { src: "/projects/INTERN 3.png", alt: "Detailed Ticket Information Modal" },
      { src: "/projects/INTERN 4.png", alt: "Ticket Execution & Asset Assignment Modal" },
      { src: "/projects/INTERN 5.png", alt: "Comprehensive Ticket Reporting Module" },
      { src: "/projects/INTERN 6.png", alt: "Per-Technician Performance Report" },
      { src: "/projects/INTERN 7.png", alt: "Asset Inventory & QR Management Interface" },
      { src: "/projects/INTERN 8.png", alt: "Inventory Movement & Audit Log Report" },
    ],
    screenshotSpotlights: [
      {
        title: "Real-Time Analytics Dashboard",
        what: "Displays live ticket metrics through dynamic chart components: ticket trend line graphs, status distribution pie charts, technician performance bar charts, geographic traffic heatmaps, and an integrated calendar view for scheduled maintenance tracking.",
        how: "Built with React.js chart library consuming Laravel REST API aggregation endpoints. Data is polled via Axios HTTP client, processing PostgreSQL aggregate queries that calculate ticket volume, resolution rates, and technician workload distribution in real time."
      },
      {
        title: "Ticket Queue Management Interface",
        what: "Lists all incoming support tickets in a sortable table. Tickets flagged as urgent by the AI triage system are automatically prioritized to the top with distinct red background styling and a severity badge indicator.",
        how: "Implements server-side pagination and filtering through Laravel Eloquent queries. Urgent classification is determined by the DeepSeek AI severity score stored in the tickets.priority_level column, with CSS conditional rendering applied via React className logic based on priority threshold."
      },
      {
        title: "Detailed Ticket Information Modal",
        what: "Opens when a ticket row is clicked, presenting comprehensive ticket metadata: reporter identity, issue description, timestamps, resolution notes, and a log of hardware assets deployed during troubleshooting.",
        how: "Modal state managed through React useState hook. Data fetched asynchronously from Laravel API endpoint /api/tickets/{id}, returning a JSON payload with joined relations to users, assets, and activity_logs tables via Eloquent eager loading to minimize query overhead."
      },
      {
        title: "Ticket Execution & Asset Assignment Modal",
        what: "Triggered when a technician initiates work on a ticket. Auto-populates the assigned technician field from the authenticated session, allows reassignment if needed, and enables selection of hardware assets required for the job. Assets can be selected via dropdown search or QR code scanner.",
        how: "Authenticated user data retrieved from Laravel Sanctum session. Asset dropdown populated from PostgreSQL inventory table filtered by status = 'Available'. QR scanner built with HTML5 getUserMedia API, decoding QR payload into asset UUID and triggering an auto-fill via React ref callback."
      },
      {
        title: "Comprehensive Ticket Reporting Module",
        what: "Aggregates all ticket records across status categories: pending, in progress, resolved, and closed. Offers multi-dimensional filtering by date range, technician, priority level, and issue category. Exports filtered data to Excel (.xlsx) or PDF for management reporting.",
        how: "Filter state managed via React useReducer for complex query logic. Export triggered via Laravel controller methods using PhpSpreadsheet library for Excel generation and TCPDF for PDF rendering, streaming file responses with appropriate MIME headers."
      },
      {
        title: "Per-Technician Performance Report",
        what: "Isolates ticket activity for a selected technician, displaying only tickets assigned to or resolved by that individual. Includes KPI metrics such as total tickets handled, average resolution time, and completion rate. Data exportable to Excel and PDF.",
        how: "Technician selection drives a filtered Eloquent query with WHERE technician_id = ? clause. Metrics calculated via PostgreSQL aggregate functions (COUNT, AVG) on timestamps stored in ticket lifecycle events. Export pipeline identical to the all-tickets report."
      },
      {
        title: "Asset Inventory & QR Management Interface",
        what: "Displays the complete hardware asset registry, categorized by operational status: Available, On Loan, Under Repair, Damaged, Missing. Technicians can scan an asset's QR code to instantly pull up its record, view full device history, and update its status with contextual metadata such as borrower identity or repair notes.",
        how: "Asset records stored in PostgreSQL with indexed status column for fast filtering. QR scanner decodes the asset UUID embedded in the QR payload, triggering a GET request to /api/assets/{uuid}. Status updates POST to the API, creating an audit_log entry with foreign key to the technician and timestamped state transition."
      },
      {
        title: "Inventory Movement & Audit Log Report",
        what: "Tracks every asset status change recorded in the system: loans, returns, repairs, damage reports, and losses. Pre-filtered tabs organize entries by status category for streamlined reporting. Full audit trail exportable to Excel and PDF.",
        how: "Audit log implemented as a PostgreSQL audit_logs table with foreign keys to assets and users. Each status transition writes an immutable log entry. React interface fetches paginated logs via Laravel API, with tabs driving status-filtered queries. Export logic reuses the PhpSpreadsheet and TCPDF pipeline."
      }
    ],
  },
  {
    id: "pangan-predict",
    title: "PanganPredict: Commodity Price Detection & Forecasting",
    category: "AI Computer Vision & Time-Series",
    overview:
      "Chili prices suddenly spike before Eid. Shallot prices crash during harvest season. These patterns repeat themselves, but almost no one can predict them in advance, especially ordinary people or small market traders.\n\nPanganPredict was built to change that. Just point a camera at any commodity you want to check: shallots, chili, rice, or other staples. Within seconds, the app identifies the item, displays the current price, and projects its movement for the next 7 days.\n\nBehind that simplicity sits an AI model trained specifically on 9 years of Central Java price history, long enough to recognize seasonal patterns, long-term trends, and market anomalies. The results are presented through interactive charts readable by both a household shopper and an economic analyst.",
    starFeatures: [
      {
        icon: "Camera",
        title: "Real-Time Commodity Image Classification",
        teaser: "Computer Vision CNN model with accuracy above 95 percent",
        detail:
          "The Computer Vision model was developed using a Convolutional Neural Network (CNN) architecture trained on a dataset of market staple commodity images. Inference runs through a FastAPI endpoint that exposes the model as a REST API. Images captured from the mobile camera go through a preprocessing pipeline covering resize, normalization, and augmentation before the model returns a class label and confidence score. Validation accuracy on the test set exceeded 95 percent under standard lighting conditions.",
        tags: ["CNN", "FastAPI", "Python", "Image Preprocessing"],
      },
      {
        icon: "TrendingUp",
        title: "9-Year Time-Series Forecasting Engine",
        teaser: "Nine years of price data powering 7-day ahead predictions",
        detail:
          "The price forecasting model is built on time-series algorithms trained on historical commodity price data from Central Java covering the past 9 years. The dataset captures seasonality patterns, long-term trends, and market volatility effects. The model outputs daily price predictions for the next 7 days along with confidence intervals, delivered to the frontend as a JSON time-series array consumed by the chart components.",
        tags: ["Time-Series ML", "Python", "Forecasting Algorithm", "FastAPI"],
      },
      {
        icon: "LineChart",
        title: "Interactive Price Volatility Charts",
        teaser: "Dynamic trend visualization readable by all audiences",
        detail:
          "Forecast data is rendered as interactive line charts on the client side using a data visualization library. Each chart displays actual historical prices, today's price, and the 7-day projection on a single canvas, complete with dynamic hover tooltips, color-coded trend indicators for upward and downward movements, and axis labels formatted in Indonesian Rupiah. Chart layout is optimized for readability across both small mobile screens and wide desktop displays.",
        tags: ["React Native", "Data Visualization", "Chart Library", "Responsive UI"],
      },
      {
        icon: "Smartphone",
        title: "Cross-Platform Web & Mobile Access",
        teaser: "React Native and React Web sharing one FastAPI backend",
        detail:
          "The application is built as a cross-platform ecosystem using React Native for the mobile client and React Web for the browser version. Both share a single FastAPI (Python) backend that serves the commodity detection endpoint and the price forecast endpoint. This architecture makes it straightforward to add new platforms in the future without modifying backend logic, as any new client simply consumes the same API.",
        tags: ["React Native", "React Web", "Python FastAPI", "REST API"],
      },
    ],
    starMethod: {
      situation:
        "Essential food commodity prices in Central Java frequently spike without warning, making it difficult for ordinary households and small traders who depend on these goods to anticipate market changes in time.",
      task:
        "Build an AI-powered cross-platform application (web and mobile) that can automatically identify staple food commodities from photos, display current prices, and project price movement for the next 7 days.",
      action:
        "Trained a CNN-based Computer Vision model for commodity image classification and developed time-series forecasting algorithms using 9 years of historical price data from Central Java. Built a React Native and React Web interface connected to a Python FastAPI backend serving both inference and forecast endpoints.",
      result:
        "Achieved commodity classification accuracy above 95 percent and delivered accurate daily price projections. All complex forecasting output is presented through interactive charts accessible to a wide range of users.",
    },
    tags: ["Computer Vision (AI)", "Time-Series Forecasting", "React Native / Web", "Python / FastAPI", "Machine Learning"],
    images: [
      { src: "/projects/PANGANPREDICT 2.png", alt: "PanganPredict Garlic Detection & Price Forecast App" },
      { src: "/projects/PANGANPREDICT 1.png", alt: "Price Analysis & Forecast Trend Dashboard" },
    ],
  },
  {
    id: "pbl-mmpi",
    title: "Online MMPI-2 Psychology Test Platform",
    category: "Web Application & Healthcare",
    overview:
      "MMPI-2 is one of the most comprehensive clinical psychology instruments in the world, and also one of the most exhausting: 567 questions answered one by one. When taken on paper or through a rigid digital system, many test-takers burn out before finishing.\n\nThis project started from a single question: how do you make 567 questions feel more human?\n\nAs the Frontend Developer on this PBL team, I designed an interface that minimizes visual pressure: a clean layout, clearly visible progress, and automatic saving so test-takers do not have to worry about losing progress mid-session. The result is not just a test platform but a genuinely more comfortable and structured experience, both for participants and for the psychologists reading the results.",
    starFeatures: [
      {
        icon: "ClipboardList",
        title: "Distraction-Free 567-Item Test Flow",
        teaser: "Ergonomic UI designed to reduce cognitive fatigue",
        detail:
          "The test interface is built on minimalist UI principles: one question per view, a percentage-based progress indicator always visible on screen, and smooth inter-question transitions using CSS animations. Answer buttons (Yes, No, Cannot Say) are optimized for comfortable tap targets on mobile devices, reducing the chance of mis-tapping on question 400 when concentration starts to drop. Typography is selected with line-height and font size that prioritize long-duration readability.",
        tags: ["Laravel Blade", "Tailwind CSS", "Responsive UI", "UX Design"],
      },
      {
        icon: "RefreshCw",
        title: "Auto-Save & Session Recovery",
        teaser: "Answers saved continuously, progress never lost",
        detail:
          "Every answer change is saved asynchronously to the database via AJAX requests to a Laravel endpoint, without any page reload. If the connection drops or the browser is accidentally closed, the participant can resume from their last answered question when reopening the platform. Session state is managed through a combination of PHP Session and records in the answer_sessions table that stores a progress_index per user.",
        tags: ["Laravel", "PHP Session", "AJAX Auto-Save", "PostgreSQL"],
      },
      {
        icon: "PieChart",
        title: "Automated Personality Profile Visualization",
        teaser: "Automatic clinical scoring and instant profile chart generation",
        detail:
          "After all 567 items are answered, the system automatically runs the MMPI-2 scoring algorithm based on clinical answer keys implemented in the Laravel backend. Scores on each clinical scale (Hypochondriasis, Depression, Hysteria, etc.) are calculated and normalized to T-scores, then displayed as a multi-scale personality profile chart that the evaluating psychologist can read immediately without any manual computation.",
        tags: ["Laravel Scoring Engine", "PHP", "Clinical T-Score", "Chart Visualization"],
      },
      {
        icon: "Monitor",
        title: "Multi-Device Responsive Interface",
        teaser: "Tailwind CSS mobile-first layout across all screen sizes",
        detail:
          "All interface components are built using Tailwind CSS with a mobile-first responsive design approach. The test interface layout, progress navigation, and profile results page are tested and optimized across breakpoints at mobile (360px), tablet (768px), and desktop (1280px and above). No features are locked to a specific platform, so participants can start on a smartphone and continue on a laptop without any loss of experience consistency.",
        tags: ["Tailwind CSS", "Bootstrap", "Mobile-First", "Responsive Design"],
      },
    ],
    starMethod: {
      situation:
        "The MMPI-2 clinical psychology instrument consists of 567 lengthy questions. When administered on paper or through inflexible digital systems, participants frequently feel overwhelmed, fatigued, and at risk of providing inaccurate responses.",
      task:
        "Serve as the Frontend Developer in a Project-Based Learning (PBL) team to build a psychometric web platform that is comfortable, cognitively light, and accessible from any device.",
      action:
        "Designed and implemented a component-based interface using Laravel Blade and Tailwind CSS featuring a step-by-step visual progress indicator, asynchronous auto-save via AJAX, and an automated personality profile chart component that generates results immediately after the test is completed.",
      result:
        "The process of completing 567 questions became more structured and far less confusing for participants. Psychologists can read clinical scoring results instantly through an automatically generated multi-scale profile chart without any manual calculation.",
    },
    tags: ["Laravel", "PHP", "Responsive UI", "Tailwind / Bootstrap", "Assessment System"],
    images: [
      { src: "/projects/PBL 1.png", alt: "Online MMPI-2 Psychology Test Portal Homepage" },
      { src: "/projects/PBL 2.png", alt: "Online Psychology Test Question Interface" },
    ],
  },
  {
    id: "odoo-erp",
    title: "Enterprise Odoo ERP System: Homework Screen Printing",
    category: "Enterprise System & CRM",
    overview:
      "A screen printing business like Homework receives dozens of custom orders every day, each with its own specifications: fabric type, number of colors, printing technique, quantity, and design. When all of that is managed through chat messages and spreadsheets, miscommunication is inevitable.\n\nI contributed to this digitalization project with a specific focus on building the CRM module within the Odoo platform. The module I developed serves as the bridge between the sales team and production: from recording new customer prospects and managing client interaction history, to a pricing pipeline customized for the complexity of screen printing orders.",
    starFeatures: [
      {
        icon: "Users",
        title: "Custom Screen Printing CRM Pipeline",
        teaser: "Odoo CRM module from prospect to confirmed order",
        detail:
          "The CRM module was developed as a custom Odoo module in Python, extending the base crm.lead model. The customer pipeline is configured across multiple stages: Prospect, Negotiation, Quotation Sent, Awaiting Design Approval, and Order Confirmed. Each stage transition can be triggered manually by a sales rep or automatically based on the last recorded activity, providing clear visibility into the current status of every deal in the pipeline.",
        tags: ["Odoo CRM", "Python Module", "crm.lead", "Pipeline Automation"],
      },
      {
        icon: "Tag",
        title: "Dynamic Order Pricing Configurator",
        teaser: "Automatic screen printing cost calculation per order specification",
        detail:
          "The pricing calculation system is configured in Odoo using a combination of pricelists and product variants. Pricing variables include fabric type (cotton, polyester, CVC), number of print colors, printing technique (screen printing, DTF, DTG), and order volume. This logic is implemented as a computed field in the Python model, so cost estimates are generated automatically as soon as a sales rep fills in the order specifications, eliminating manual calculation errors.",
        tags: ["Odoo Pricelists", "Python Computed Field", "Product Variants", "PostgreSQL"],
      },
      {
        icon: "History",
        title: "Centralized Client Interaction Log",
        teaser: "Full client communication history in one place, no information gaps",
        detail:
          "All client communication history, including emails, meeting notes, and design approval logs, is recorded in the Odoo chatter directly linked to each CRM customer record. Every activity is timestamped and associated with the user who performed it, so anyone on the sales team can read the complete context of any client account without having to ask colleagues for background information.",
        tags: ["Odoo Chatter", "Activity Log", "Audit Trail", "CRM Integration"],
      },
      {
        icon: "Database",
        title: "PostgreSQL Relational Data Architecture",
        teaser: "Reliable relational database schema for enterprise-scale operations",
        detail:
          "The Odoo backend uses PostgreSQL as its relational database management system. The CRM data schema developed leverages many2one and one2many relationships across the crm.lead, res.partner (client data), sale.order, and product.template tables, ensuring data integrity and referential consistency across all modules. Query performance is optimized through indexes on frequently filtered columns such as partner_id and stage_id.",
        tags: ["PostgreSQL", "Odoo ORM", "Relational Schema", "Database Indexing"],
      },
    ],
    starMethod: {
      situation:
        "Homework Screen Printing faced operational challenges because customer data, custom order statuses, and client interaction histories were scattered across spreadsheets and instant messaging apps, causing data duplication, staff miscommunication, and manual pricing errors.",
      task:
        "Contribute to an Odoo ERP implementation project for Homework Screen Printing, specifically taking ownership of the system architecture design and CRM module development tailored to the screen printing industry workflow.",
      action:
        "Developed a custom Odoo module in Python extending the native CRM model. Configured a multi-stage customer pipeline, built a dynamic pricing calculation system based on order specifications, and leveraged PostgreSQL relational structures to maintain data integrity across all modules.",
      result:
        "Customer data and client interaction histories are now centralized in a single system. Order pricing that was previously error-prone is now auto-generated from specifications, and the order confirmation workflow became faster and more transparent for both the sales and production teams.",
    },
    tags: ["Odoo ERP", "Python", "CRM Module", "PostgreSQL Database", "Business Process Optimization"],
    images: [
      { src: "/projects/ODOO 1.png", alt: "Landing Page & Web Portal for Homework Screen Printing" },
      { src: "/projects/ODOO 2.png", alt: "Odoo Product Catalog & Order Configuration" },
    ],
  },
  {
    id: "smart-parking",
    title: "AIoT Smart Parking System (Automatic License Plate Recognition)",
    category: "Artificial Intelligence of Things (AIoT)",
    overview:
      "A conventional parking gate needs three things: an attendant, a paper ticket, and time. All three can be eliminated. That is the premise behind this smart parking system.\n\nWhen a vehicle approaches, an ultrasonic sensor detects its presence and immediately triggers an ESP32-CAM module to capture a photo. The license plate image is sent to a server for processing: OpenCV prepares the image, PyTesseract reads the plate characters, and the result is matched against a Firebase Cloud database. If it matches, a servo motor opens the gate within seconds. No buttons, no tickets, no attendant.\n\nThis project demonstrates that combining simple IoT sensors with a cloud-based image processing pipeline can produce a fully functional automation system in the real world.",
    starFeatures: [
      {
        icon: "ScanLine",
        title: "High-Accuracy License Plate OCR",
        teaser: "OpenCV and PyTesseract with up to 100 percent accuracy in optimal conditions",
        detail:
          "The license plate recognition pipeline runs in multiple stages: the ESP32-CAM captures a high-resolution image frame, which is then sent to a VPS via HTTP POST. On the server, OpenCV performs a series of preprocessing steps including grayscale conversion, Gaussian blur, adaptive thresholding, and morphological operations to isolate the plate region. PyTesseract then extracts characters using the Tesseract OCR engine configured with a Page Segmentation Mode (PSM) optimized for Indonesian license plate formats. Recognition accuracy reaches 100 percent under optimal lighting and camera angle conditions.",
        tags: ["OpenCV", "PyTesseract OCR", "Image Preprocessing", "VPS Python"],
      },
      {
        icon: "Radio",
        title: "Ultrasonic Trigger & Servo Gate Control",
        teaser: "HC-SR04 detection to servo actuation in seconds",
        detail:
          "An HC-SR04 ultrasonic sensor is mounted at the parking entry and configured to send a trigger signal to the ESP32 when an object is detected within 1.5 meters. The ESP32 processes this signal and commands the ESP32-CAM module to capture a photo. After the plate verification result is received from the VPS via HTTP response, the ESP32 sends a PWM signal to the servo motor that moves the gate to the open position. The entire sequence completes within a few seconds.",
        tags: ["ESP32", "HC-SR04 Ultrasonic", "Servo Motor PWM", "Embedded C"],
      },
      {
        icon: "Zap",
        title: "Real-Time Firebase Cloud Validation",
        teaser: "Instant plate matching and access logging via Firebase",
        detail:
          "The extracted plate text from OCR is sent to Firebase Realtime Database for matching against the registered vehicle list. The query runs in real time using the Firebase REST API. If the plate string matches a record under the /vehicles/{plateNumber} node, the server returns an HTTP 200 response with the vehicle data. Each entry transaction is also recorded as a new entry under /access_logs with a timestamp, automatically building a vehicle access history.",
        tags: ["Firebase Realtime DB", "Firebase REST API", "Cloud Validation", "Access Logging"],
      },
      {
        icon: "Lock",
        title: "Fully Autonomous Touchless Entry",
        teaser: "Zero manual intervention, system operates independently around the clock",
        detail:
          "The entire pipeline from vehicle detection to gate opening runs fully automatically without any human intervention. No button needs to be pressed, no ticket needs to be taken or returned, and no gate attendant is required. The system is capable of operating 24/7 autonomously, requiring only an internet connection for communication with Firebase Cloud and the OCR processing VPS.",
        tags: ["ESP32 Automation", "IoT Pipeline", "24/7 Operation", "Zero Operator"],
      },
    ],
    starMethod: {
      situation:
        "Conventional parking facilities frequently create long queues at entry gates, depend on the presence of a manual attendant, and are vulnerable to the risk of lost paper tickets, all resulting in high operational costs and a poor user experience.",
      task:
        "Develop an AIoT-based smart parking gate prototype that can automatically detect vehicles, read license plate characters through computer vision, validate them against a cloud database, and open the gate without human intervention.",
      action:
        "Integrated an HC-SR04 ultrasonic sensor and ESP32-CAM module as the edge image capture device. Built an OCR processing pipeline on a VPS using OpenCV and PyTesseract. Configured Firebase Realtime Database as the validation and access logging backend, with a servo motor as the gate actuator.",
      result:
        "The system achieved license plate recognition accuracy up to 100 percent under optimal lighting, opened the gate automatically within seconds of successful validation, and demonstrated the technical viability of eliminating a manual parking gate attendant.",
    },
    tags: ["ESP32-CAM", "PyTesseract OCR", "OpenCV", "Firebase Cloud DB", "Servo Motor", "Ultrasonic Sensor"],
    images: [
      { src: "/projects/IOT PARKING 1.png", alt: "Smart IoT Parking Hardware Circuit Schematic ESP32 & Display" },
      { src: "/projects/IOT PARKING 2.png", alt: "Automatic Vehicle License Plate OCR Testing" },
    ],
  },
  {
    id: "smart-garbage",
    title: "Smart IoT-Based Trash Cart with Load Cell",
    category: "Embedded System & Hardware",
    overview:
      "A trash cart used beyond its weight capacity will break down faster: bent axles, cracked frames, and components wearing out well ahead of schedule. The problem is that waste collection workers have almost no way of knowing when a cart is overloaded until the damage is already done.\n\nThis project addresses that by keeping the solution as simple as possible: install four weight sensors on the cart, connect them to an Arduino Nano, and add an alarm. When the total load exceeds the safe limit, a warning light turns on and a buzzer sounds. Workers know immediately without having to guess.\n\nSimple in concept, but the impact is real: carts last longer, workers stay safer, and waste collection becomes more measurable and controlled.",
    starFeatures: [
      {
        icon: "Weight",
        title: "Quad Load Cell Weight Telemetry",
        teaser: "Four load cells plus HX711 ADC for continuous load monitoring",
        detail:
          "Four load cell sensors are distributed symmetrically at the cart's load-bearing points to measure weight distribution evenly. Analog signals from all four load cells are combined through the HX711 module, a dedicated 24-bit ADC designed for weighing applications, before the digital data is sent to the Arduino Nano via SPI interface. Sensor calibration is performed using measured reference weights to ensure consistent reading accuracy.",
        tags: ["Load Cell", "HX711 ADC", "Arduino Nano", "SPI Interface"],
      },
      {
        icon: "Bell",
        title: "Dual-Mode Overload Alert System",
        teaser: "LED indicator and buzzer triggered automatically at the weight limit",
        detail:
          "The alert system is configured in two modes based on load level: when weight approaches 80 percent of maximum capacity, a yellow LED activates as an early warning. When the safe limit is exceeded, a red LED turns on simultaneously with a piezoelectric buzzer controlled via PWM signal from the Arduino, producing an alarm tone loud enough to be heard in outdoor environments. Threshold logic is implemented as comparator conditions within the Arduino sketch.",
        tags: ["Arduino PWM", "LED Indicator", "Piezoelectric Buzzer", "Threshold Logic"],
      },
      {
        icon: "Battery",
        title: "Low-Power Arduino Nano Architecture",
        teaser: "Compact microcontroller optimized for reliable field operation",
        detail:
          "Arduino Nano was selected as the main microcontroller for its compact form factor and low operating power consumption, making it suitable for outdoor devices with limited power sources. The Arduino sketch is optimized to avoid unnecessary polling loops by using an interrupt-driven approach for sensor readings, reducing computational overhead and overall current draw.",
        tags: ["Arduino Nano", "Low-Power Design", "Interrupt-Driven", "Embedded C"],
      },
      {
        icon: "Wrench",
        title: "Ruggedized Protective Control Enclosure",
        teaser: "Protected electronics housing built for field conditions",
        detail:
          "All electronic components including the Arduino Nano, HX711 module, cable terminals, and indicator system are housed in an ABS plastic enclosure protected from dust exposure and water splashes. The enclosure design accounts for easy maintenance access through a removable cover while providing protection against mechanical shocks common during cart operation on uneven terrain.",
        tags: ["Hardware Prototyping", "ABS Enclosure", "Electronics Protection", "Field Design"],
      },
    ],
    starMethod: {
      situation:
        "Conventional trash carts in residential areas frequently suffer structural damage to wheel axles and frames due to undetected overloading. Waste collection workers have no measurable way to know the safe load limit while operating in the field.",
      task:
        "Collaborate in a two-person team to design and assemble a smart IoT-based trash cart prototype equipped with a load detection system and an automatic overload alert mechanism.",
      action:
        "Assembled an electronic circuit using an Arduino Nano microcontroller connected to four load cell sensors through an HX711 24-bit ADC amplifier module. Implemented multi-level load threshold logic in the Arduino sketch to control LED indicators and a piezoelectric buzzer as an audio-visual alert system, all packaged inside a ruggedized control enclosure mounted on the cart.",
      result:
        "The system successfully prevented overloading incidents throughout the testing phase, provided real-time and accurate load readings to field workers, and demonstrated that a simple IoT hardware solution can meaningfully extend equipment operational lifespan and improve worker safety.",
    },
    tags: ["Arduino Nano", "Load Cell Sensors", "Buzzer Alarm", "Indicator Lights", "Hardware Prototyping"],
    images: [
      { src: "/projects/SMART GARBAGE 1.png", alt: "Physical Prototype of Smart Trash Cart with Control Panel" },
      { src: "/projects/SMART GARBAGE 2.png", alt: "Load Cell Weight Sensor Installation & Load Testing" },
    ],
  },
];

// ─── Icon Map ─────────────────────────────────────────────────────────────────

const ICON_MAP = {
  MessageSquare, QrCode, BarChart3, Shield, Camera, TrendingUp, LineChart,
  Smartphone, ClipboardList, RefreshCw, PieChart, Monitor, Users, Tag,
  History, Database, ScanLine, Radio, Zap, Lock, Weight, Bell, Battery, Wrench,
  Star, Brain,
};

function FeatureIcon({ name, size = 14, className }) {
  const Icon = ICON_MAP[name] || Star;
  return <Icon size={size} className={className} />;
}

// ─── Star Feature Accordion Item ─────────────────────────────────────────────

function StarFeatureItem({ feat, isOpen, onToggle }) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className={[
          styles.starFeatureBtn,
          isOpen ? styles.starFeatureBtnActive : styles.starFeatureBtnDefault,
        ].join(" ")}
      >
        <div className={[
          styles.starFeatureIconWrapper,
          isOpen ? styles.starFeatureIconActive : styles.starFeatureIconDefault,
        ].join(" ")}>
          <FeatureIcon name={feat.icon} size={14} />
        </div>
        <div className={styles.starFeatureContent}>
          <span className={[
            styles.starFeatureTitle,
            isOpen ? styles.starFeatureTitleActive : styles.starFeatureTitleDefault,
          ].join(" ")}>
            {feat.title}
          </span>
          <span className={styles.starFeatureTeaser}>{feat.teaser}</span>
        </div>
        <ChevronDown
          size={14}
          className={`text-zinc-500 shrink-0 transition-transform duration-250 ${isOpen ? "rotate-180 text-orange-400" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="detail"
            initial={{ opacity: 0, height: 0, y: -6 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className={styles.starFeatureDetail}>
              <div className={styles.starFeatureDetailInner}>
                <p className={styles.starFeatureDetailText}>{feat.detail}</p>
                {feat.tags?.length > 0 && (
                  <div className={styles.starFeatureDetailStack}>
                    {feat.tags.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index, onOpen }) {
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev - 1 + project.images.length) % project.images.length);
  };
  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev + 1) % project.images.length);
  };

  const currentImg = project.images[activeImgIdx];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } }}
      style={{ transform: "translateZ(0)" }}
      className={styles.card}
      onClick={() => onOpen(project, activeImgIdx)}
      title="Click to view project details"
    >
      <div className={styles.imageContainer}>
        <span className={styles.categoryBadge}>{project.category}</span>
        <div className={styles.imageWrapper}>
          <Image
            src={currentImg.src}
            alt={currentImg.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
            priority={project.id === "intern-ticketing"}
          />
        </div>
        {project.images.length > 1 && (
          <>
            <button type="button" onClick={handlePrev} className={styles.carouselBtnPrev} aria-label="Previous image">
              <ChevronLeft size={18} />
            </button>
            <button type="button" onClick={handleNext} className={styles.carouselBtnNext} aria-label="Next image">
              <ChevronRight size={18} />
            </button>
            <div className={styles.dotsContainer}>
              {project.images.map((_, idx) => (
                <span key={idx} className={idx === activeImgIdx ? styles.dotActive : styles.dotInactive} />
              ))}
            </div>
          </>
        )}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p className={styles.cardDescription}>{project.overview}</p>
          {project.starFeatures?.length > 0 && (
            <div className={styles.cardFeaturesList}>
              {project.starFeatures.slice(0, 2).map((feat, fIdx) => (
                <div key={fIdx} className={styles.cardFeatureItem}>
                  <Star size={11} className={styles.cardFeatureIcon} />
                  <p className={styles.cardFeatureText}>
                    <span className={styles.cardFeatureTitle}>{feat.title}:</span>
                    {" "}{feat.teaser}
                  </p>
                </div>
              ))}
            </div>
          )}
          <div className={styles.tagContainer}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className={styles.cardFooter}>
          <span>Slide {activeImgIdx + 1} of {project.images.length}</span>
          <span className={styles.linkButton}>
            <Maximize2 size={13} />
            View Details
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── STAR Steps config ────────────────────────────────────────────────────────

const STAR_STEPS = [
  { key: "situation", letter: "S", badgeClass: "starMethodBadgeSituation", label: "Situation", subtitle: "Background & Problem",       Icon: Compass, iconClass: "text-blue-400" },
  { key: "task",      letter: "T", badgeClass: "starMethodBadgeTask",      label: "Task",      subtitle: "Objectives & Mission",        Icon: Target,  iconClass: "text-amber-400" },
  { key: "action",    letter: "A", badgeClass: "starMethodBadgeAction",    label: "Action",    subtitle: "Engineering & Architecture",   Icon: Cpu,     iconClass: "text-orange-400" },
  { key: "result",    letter: "R", badgeClass: "starMethodBadgeResult",    label: "Result",    subtitle: "Impact & Metrics",             Icon: Trophy,  iconClass: "text-emerald-400" },
];

// ─── Screenshot Spotlight Card ────────────────────────────────────────────────

function SpotlightCard({ spotlight, screenshotIndex, totalScreenshots }) {
  if (!spotlight) return null;

  return (
    <div className="mb-6 rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent p-5 backdrop-blur-sm">
      <div className="flex items-start gap-3 mb-3">
        <div className="shrink-0 w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
          <Zap size={16} className="text-orange-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] uppercase tracking-wider text-orange-400/80 font-mono font-semibold mb-0.5">
            Documentation Spotlight — {screenshotIndex + 1}/{totalScreenshots}
          </p>
          <h4 className="text-sm font-semibold text-white leading-snug">
            {spotlight.title}
          </h4>
        </div>
      </div>

      <div className="space-y-3 text-[13px] leading-relaxed">
        <div>
          <p className="text-orange-400/90 font-medium mb-1 flex items-center gap-1.5">
            <Brain size={12} className="shrink-0" />
            What it shows:
          </p>
          <p className="text-zinc-300/90 pl-5">
            {spotlight.what}
          </p>
        </div>

        <div>
          <p className="text-blue-400/90 font-medium mb-1 flex items-center gap-1.5">
            <Cpu size={12} className="shrink-0" />
            How it works:
          </p>
          <p className="text-zinc-300/90 pl-5">
            {spotlight.how}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Screenshot Switcher ──────────────────────────────────────────────────────

function ScreenshotSwitcher({ images, activeIdx, onSelect }) {
  if (images.length <= 1) return null;
  return (
    <div className="mb-5">
      <p className={styles.modalSectionLabel}>Documentation</p>
      <div className="flex gap-3 overflow-x-auto pb-1">
        {images.map((img, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelect(idx)}
              className={[
                "relative shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 focus:outline-none",
                isActive
                  ? "border-orange-500 shadow-lg shadow-orange-500/20 scale-100 opacity-100"
                  : "border-white/10 opacity-50 hover:opacity-80 hover:border-white/25 hover:scale-[1.02]",
              ].join(" ")}
              style={{ width: 112, height: 72 }}
              aria-label={img.alt}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="112px"
                className="object-cover"
              />
              {isActive && (
                <span className="absolute inset-0 bg-orange-500/10 rounded-xl pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Projects Section ────────────────────────────────────────────────────

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImgIdx, setModalImgIdx] = useState(0);
  const [openFeatureIdx, setOpenFeatureIdx] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const scrollRef = useRef(null);

  const openProjectModal = useCallback((project, imgIndex = 0) => {
    setIsClosing(false);
    setSelectedProject(project);
    setModalImgIdx(imgIndex);
    setOpenFeatureIdx(null);
  }, []);

  const closeProjectModal = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
    }, 200);
  }, [isClosing]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [selectedProject]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") closeProjectModal(); };
    if (selectedProject) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedProject, closeProjectModal]);

  const toggleFeature = (idx) => {
    setOpenFeatureIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.sectionLabel}>What I&apos;ve Built</p>
          <h2 className={styles.heading}>Projects Portfolio</h2>
          <div className={styles.headingAccent} />
          <p className={styles.subtitle}>
            Collection of real projects covering enterprise web development, artificial intelligence (AI), and integrated IoT hardware prototypes.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={openProjectModal}
            />
          ))}
        </div>
      </div>

      {/* ── Modal ──────────────────────────────────────────────────────── */}
      {selectedProject && (
        <div
          className={isClosing ? styles.modalOverlayExit : styles.modalOverlay}
          onClick={closeProjectModal}
        >
          <div
            className={isClosing ? styles.modalContentExit : styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              className={styles.modalClose}
              onClick={closeProjectModal}
              aria-label="Close project detail"
            >
              <X size={18} />
            </button>

            {/* Scrollable area */}
            <div
              ref={scrollRef}
              className={styles.modalScrollArea}
            >
              {/* Hero image with smooth transition */}
              <div className={styles.modalImageWrapper}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedProject.images[modalImgIdx]?.src}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                  >
                    <Image
                      src={selectedProject.images[modalImgIdx]?.src || selectedProject.images[0].src}
                      alt={selectedProject.images[modalImgIdx]?.alt || selectedProject.title}
                      width={1200}
                      height={800}
                      className={styles.modalImage}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Body */}
              <div className={styles.modalBody}>
                <div className={styles.modalHeader}>
                  <span className={styles.modalCategory}>{selectedProject.category}</span>
                </div>
                <h3 className={styles.modalTitle}>{selectedProject.title}</h3>

                {/* Screenshot thumbnail switcher */}
                <ScreenshotSwitcher
                  images={selectedProject.images}
                  activeIdx={modalImgIdx}
                  onSelect={setModalImgIdx}
                />

                {/* Screenshot Spotlight Card */}
                {selectedProject.screenshotSpotlights && selectedProject.screenshotSpotlights[modalImgIdx] && (
                  <SpotlightCard
                    spotlight={selectedProject.screenshotSpotlights[modalImgIdx]}
                    screenshotIndex={modalImgIdx}
                    totalScreenshots={selectedProject.images.length}
                  />
                )}

                {/* S.T.A.R. Case Study */}
                {selectedProject.starMethod && (
                  <div className="mb-8">
                    <h4 className="text-xs uppercase tracking-wider text-orange-400/80 font-mono font-semibold mb-4 flex items-center gap-2">
                      <Target size={13} />
                      S.T.A.R. Case Study
                    </h4>
                    <div className={styles.starMethodSection}>
                      {STAR_STEPS.map(({ key, letter, badgeClass, label, subtitle, Icon, iconClass }) => (
                        <div key={key} className={styles.starMethodCard}>
                          <div className={styles.starMethodHeader}>
                            <span className={`${styles.starMethodBadge} ${styles[badgeClass]}`}>{letter}</span>
                            <Icon size={14} className={iconClass} />
                            <div className={styles.starMethodHeaderText}>
                              <span className={styles.starMethodLabel}>{subtitle}</span>
                              <span className={styles.starMethodTitle}>{label}</span>
                            </div>
                          </div>
                          <div className={styles.starMethodBody}>
                            <p className={styles.starMethodText}>{selectedProject.starMethod[key]}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Star Features */}
                {selectedProject.starFeatures?.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-xs uppercase tracking-wider text-orange-400/80 font-mono font-semibold mb-2 flex items-center gap-2">
                      <Star size={13} />
                      Star Features
                    </h4>
                    <p className="text-xs text-zinc-500 font-mono mb-4">
                      Click each feature to expand the full technical breakdown.
                    </p>
                    <div className="space-y-2.5">
                      {selectedProject.starFeatures.map((feat, idx) => (
                        <StarFeatureItem
                          key={idx}
                          feat={feat}
                          isOpen={openFeatureIdx === idx}
                          onToggle={() => toggleFeature(idx)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Overview */}
                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-wider text-orange-400/80 font-mono font-semibold mb-4 flex items-center gap-2">
                    <Layers size={13} />
                    Overview
                  </h4>
                  <div className={styles.overviewSection}>
                    <p className={styles.overviewText}>{selectedProject.overview}</p>
                  </div>
                </div>

                {/* Technologies & Tools */}
                <div>
                  <p className={styles.modalTechLabel}>
                    <Cpu size={13} />
                    Technologies &amp; Tools
                  </p>
                  <div className={styles.tagContainer}>
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
