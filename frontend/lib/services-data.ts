// Icon names are now stored as strings and mapped to components in client components

export interface ServiceData {
    slug: string;
    title: string;
    shortDescription: string;
    icon: string; // Icon name for this service
    hero: {
        description: string;
        gradient: string;
        iconColor: string;
    };
    overview: {
        title: string;
        subtitle: string;
        description: string[];
        highlights: string[];
        stats?: { label: string; value: string }[];
    };
    features: {
        title: string;
        subtitle: string;
        description: string;
        items: {
            title: string;
            description: string;
            icon: string;
            color: string;
        }[];
    };
    process: {
        title: string;
        subtitle: string;
        description: string;
        steps: {
            number: string;
            title: string;
            description: string;
            icon: string;
        }[];
    };
    useCases: {
        title: string;
        subtitle: string;
        description: string;
        items: {
            title: string;
            description: string;
            icon: string;
            industry: string;
            result: string;
        }[];
    };
    techStack: {
        title: string;
        subtitle: string;
        description: string;
        technologies: {
            name: string;
            category: string;
            logo?: string;
        }[];
    };
    benefits: {
        title: string;
        subtitle: string;
        description: string;
        items: {
            title: string;
            description: string;
            icon: string;
            metric: string;
        }[];
    };
    faq: {
        title: string;
        subtitle: string;
        items: {
            question: string;
            answer: string;
        }[];
    };
    cta: {
        title: string;
        description: string;
        variant?: "default" | "gradient" | "minimal";
    };
    relatedServices: string[];
}

export const servicesData: Record<string, ServiceData> = {
    "ai-integration": {
        slug: "ai-integration",
        title: "AI & ML Solutions",
        shortDescription: "Intelligent automation powered by cutting-edge AI and machine learning.",
        icon: "Brain",
        hero: {
            description: "Transform your business with cutting-edge AI and machine learning solutions.",
            gradient: "bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600",
            iconColor: "bg-gradient-to-br from-purple-500 to-violet-600"
        },
        overview: {
            title: "Intelligent Automation & Machine Learning",
            subtitle: "AI-Powered Solutions",
            description: [
                "Artificial intelligence isn't just a buzzword—it's a transformative technology that can automate decision-making, extract insights from data, and deliver intelligent experiences to your users.",
                "Our AI and ML services help you leverage the latest advancements in large language models (LLMs), predictive analytics, natural language processing, and computer vision to solve real business problems.",
                "Whether you're looking to automate customer support, analyze documents, predict trends, or build recommendation systems, we design and implement AI solutions tailored to your specific needs."
            ],
            highlights: [
                "LLM integration (GPT-4, Claude, Gemini)",
                "Predictive analytics and forecasting",
                "Natural language processing (NLP)",
                "Computer vision and image recognition",
                "Recommendation systems",
                "Intelligent automation and decision-making"
            ],
            stats: [
                { label: "Accuracy Rate", value: "95%+" },
                { label: "Processing Speed", value: "10x" },
                { label: "Cost Reduction", value: "50%" },
                { label: "Time Saved", value: "70%" }
            ]
        },
        features: {
            title: "AI Capabilities",
            subtitle: "What We Build",
            description: "From conversational AI to predictive models, we build intelligent systems that learn and adapt.",
            items: [
                {
                    title: "LLM Integration",
                    description: "Integrate GPT-4, Claude, or custom language models for conversational AI, content generation, and intelligent assistants.",
                    icon: "Brain",
                    color: "bg-gradient-to-br from-purple-500 to-violet-600"
                },
                {
                    title: "Predictive Analytics",
                    description: "Build machine learning models that forecast trends, predict outcomes, and optimize decision-making.",
                    icon: "BarChart",
                    color: "bg-gradient-to-br from-blue-500 to-cyan-600"
                },
                {
                    title: "Natural Language Processing",
                    description: "Extract insights from text, automate document processing, and build intelligent search systems.",
                    icon: "FileText",
                    color: "bg-gradient-to-br from-teal-500 to-emerald-600"
                },
                {
                    title: "Computer Vision",
                    description: "Analyze images and videos for object detection, facial recognition, and visual quality control.",
                    icon: "Search",
                    color: "bg-gradient-to-br from-pink-500 to-rose-600"
                },
                {
                    title: "Recommendation Systems",
                    description: "Personalize user experiences with AI-powered recommendations based on behavior and preferences.",
                    icon: "Target",
                    color: "bg-gradient-to-br from-orange-500 to-amber-600"
                },
                {
                    title: "Intelligent Automation",
                    description: "Automate complex workflows with AI that can understand context, make decisions, and learn from feedback.",
                    icon: "Settings",
                    color: "bg-gradient-to-br from-indigo-500 to-purple-600"
                }
            ]
        },
        process: {
            title: "Our AI Development Process",
            subtitle: "How We Work",
            description: "A systematic approach to building AI solutions that deliver measurable results.",
            steps: [
                {
                    number: "01",
                    title: "Discovery & Use Case Definition",
                    description: "Understand your business problem, define success metrics, and identify the right AI approach.",
                    icon: "Search"
                },
                {
                    number: "02",
                    title: "Data Preparation",
                    description: "Collect, clean, and prepare training data. Ensure data quality and address bias.",
                    icon: "Database"
                },
                {
                    number: "03",
                    title: "Model Development",
                    description: "Build, train, and fine-tune AI models using state-of-the-art techniques and frameworks.",
                    icon: "Settings"
                },
                {
                    number: "04",
                    title: "Integration & Deployment",
                    description: "Integrate AI models into your applications with APIs, monitoring, and version control.",
                    icon: "Rocket"
                },
                {
                    number: "05",
                    title: "Monitoring & Improvement",
                    description: "Track model performance, retrain with new data, and continuously improve accuracy.",
                    icon: "BarChart"
                }
            ]
        },
        useCases: {
            title: "AI in Action",
            subtitle: "Use Cases",
            description: "Real-world examples of how AI transforms businesses.",
            items: [
                {
                    title: "Customer Support Automation",
                    description: "Built an AI chatbot using GPT-4 that handles 80% of customer inquiries, reducing support costs and improving response times.",
                    icon: "Users",
                    industry: "E-commerce",
                    result: "80% automation, 50% cost reduction"
                },
                {
                    title: "Document Processing",
                    description: "Automated invoice processing using NLP and OCR, extracting data from thousands of documents daily.",
                    icon: "FileText",
                    industry: "Finance",
                    result: "10x faster processing, 95% accuracy"
                },
                {
                    title: "Predictive Maintenance",
                    description: "Built ML models to predict equipment failures, reducing downtime and maintenance costs.",
                    icon: "Settings",
                    industry: "Manufacturing",
                    result: "30% less downtime, $500K saved"
                },
                {
                    title: "Content Generation",
                    description: "Automated marketing content creation using LLMs, generating personalized emails and product descriptions.",
                    icon: "Lightbulb",
                    industry: "Marketing",
                    result: "5x content output, consistent quality"
                }
            ]
        },
        techStack: {
            title: "AI Technologies & Frameworks",
            subtitle: "Our Toolkit",
            description: "Industry-leading AI tools and frameworks for building intelligent systems.",
            technologies: [
                { name: "OpenAI GPT-4", category: "LLMs" },
                { name: "Anthropic Claude", category: "LLMs" },
                { name: "Google Gemini", category: "LLMs" },
                { name: "LangChain", category: "LLM Frameworks" },
                { name: "TensorFlow", category: "ML Frameworks" },
                { name: "PyTorch", category: "ML Frameworks" },
                { name: "Scikit-learn", category: "ML Libraries" },
                { name: "Hugging Face", category: "Model Hub" },
                { name: "Python", category: "Languages" },
                { name: "FastAPI", category: "APIs" }
            ]
        },
        benefits: {
            title: "Why Choose Our AI Services",
            subtitle: "The Impact",
            description: "Measurable business outcomes from intelligent automation.",
            items: [
                {
                    title: "Time Savings",
                    description: "Automate repetitive tasks and free up your team for high-value work.",
                    icon: "Clock",
                    metric: "70%"
                },
                {
                    title: "Cost Reduction",
                    description: "Reduce operational costs through intelligent automation and optimization.",
                    icon: "DollarSign",
                    metric: "50%"
                },
                {
                    title: "Accuracy",
                    description: "Achieve superhuman accuracy in tasks like data extraction and classification.",
                    icon: "CheckCircle",
                    metric: "95%+"
                },
                {
                    title: "Scalability",
                    description: "Handle 10x more volume without proportional cost increases.",
                    icon: "TrendingUp",
                    metric: "10x"
                }
            ]
        },
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "AI & ML Solutions",
            items: [
                {
                    question: "How do I know if AI is right for my business?",
                    answer: "AI is a good fit if you have repetitive tasks, large amounts of data, or need to make predictions. We start with a discovery phase to identify high-impact use cases."
                },
                {
                    question: "Do I need a lot of data to use AI?",
                    answer: "It depends. Some AI solutions like LLMs work with minimal data, while custom ML models may require thousands of examples. We can assess your data and recommend the best approach."
                },
                {
                    question: "How long does it take to build an AI solution?",
                    answer: "Simple integrations can be done in weeks, while custom ML models may take 2-3 months. We provide realistic timelines after understanding your requirements."
                },
                {
                    question: "Can you integrate AI into our existing systems?",
                    answer: "Absolutely. We specialize in integrating AI into existing workflows via APIs, webhooks, or direct database connections."
                },
                {
                    question: "What happens if the AI makes mistakes?",
                    answer: "We implement monitoring, human-in-the-loop workflows, and confidence thresholds to catch errors. AI models are continuously improved based on feedback."
                }
            ]
        },
        cta: {
            title: "Ready to Harness the Power of AI?",
            description: "Let's explore how AI can transform your business. Schedule a free consultation to discuss your use case.",
            variant: "gradient"
        },
        relatedServices: ["automation", "development", "consulting"]
    },
    "automation": {
        slug: "automation",
        title: "Custom Automation",
        shortDescription: "Bespoke automation tools to eliminate manual bottlenecks and scale effortlessly.",
        icon: "Bot",
        hero: {
            description: "Eliminate repetitive tasks with bespoke automation solutions.",
            gradient: "bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600",
            iconColor: "bg-gradient-to-br from-blue-500 to-cyan-600"
        },
        overview: {
            title: "Workflow & Process Automation",
            subtitle: "Work Smarter, Not Harder",
            description: [
                "Manual, repetitive tasks drain productivity and introduce errors. Custom automation eliminates these bottlenecks, allowing your team to focus on high-value work.",
                "We build bespoke automation solutions tailored to your specific workflows—from simple scripts to complex orchestration systems that coordinate multiple tools and teams.",
                "Whether it's automating data entry, generating reports, syncing systems, or orchestrating complex workflows, we design automation that saves time, reduces errors, and scales effortlessly."
            ],
            highlights: [
                "Workflow orchestration and task automation",
                "API integrations between systems",
                "Data pipeline automation (ETL)",
                "Scheduled jobs and cron tasks",
                "Custom scripts and tools",
                "Process optimization and efficiency"
            ],
            stats: [
                { label: "Time Saved", value: "80%" },
                { label: "Error Reduction", value: "90%" },
                { label: "ROI Timeline", value: "3 months" },
                { label: "Processes Automated", value: "500+" }
            ]
        },
        features: {
            title: "Automation Capabilities",
            subtitle: "What We Automate",
            description: "From simple scripts to complex orchestration, we automate any repetitive process.",
            items: [
                {
                    title: "Workflow Orchestration",
                    description: "Design and implement complex multi-step workflows that coordinate tasks across systems and teams.",
                    icon: "GitBranch",
                    color: "bg-gradient-to-br from-blue-500 to-cyan-600"
                },
                {
                    title: "API Integration",
                    description: "Connect disparate systems with robust API integrations, middleware, and data synchronization.",
                    icon: "Zap",
                    color: "bg-gradient-to-br from-teal-500 to-emerald-600"
                },
                {
                    title: "Data Pipeline Automation",
                    description: "Automate data extraction, transformation, and loading (ETL) for analytics and reporting.",
                    icon: "Database",
                    color: "bg-gradient-to-br from-purple-500 to-violet-600"
                },
                {
                    title: "Scheduled Tasks",
                    description: "Set up cron jobs, scheduled reports, and recurring tasks that run automatically.",
                    icon: "Clock",
                    color: "bg-gradient-to-br from-orange-500 to-amber-600"
                },
                {
                    title: "Custom Scripts",
                    description: "Build bespoke scripts in Python, Node.js, or Bash to automate unique business processes.",
                    icon: "Code",
                    color: "bg-gradient-to-br from-pink-500 to-rose-600"
                },
                {
                    title: "Process Optimization",
                    description: "Analyze and optimize existing workflows to eliminate waste and improve efficiency.",
                    icon: "Target",
                    color: "bg-gradient-to-br from-indigo-500 to-purple-600"
                }
            ]
        },
        process: {
            title: "Our Automation Process",
            subtitle: "How We Work",
            description: "A systematic approach to identifying and automating manual processes.",
            steps: [
                {
                    number: "01",
                    title: "Process Audit",
                    description: "Map current workflows, identify bottlenecks, and quantify time spent on manual tasks.",
                    icon: "Search"
                },
                {
                    number: "02",
                    title: "Automation Design",
                    description: "Design automation solutions with error handling, monitoring, and scalability in mind.",
                    icon: "Lightbulb"
                },
                {
                    number: "03",
                    title: "Build & Test",
                    description: "Develop automation scripts and workflows, test thoroughly with real data.",
                    icon: "Settings"
                },
                {
                    number: "04",
                    title: "Deploy & Monitor",
                    description: "Deploy automation with monitoring, alerts, and logging for reliability.",
                    icon: "Rocket"
                },
                {
                    number: "05",
                    title: "Optimize & Scale",
                    description: "Continuously improve automation based on usage patterns and feedback.",
                    icon: "TrendingUp"
                }
            ]
        },
        useCases: {
            title: "Automation Success Stories",
            subtitle: "Use Cases",
            description: "Real examples of how automation transforms operations.",
            items: [
                {
                    title: "Report Generation",
                    description: "Automated weekly sales reports that previously took 4 hours of manual work, now generated in minutes.",
                    icon: "FileText",
                    industry: "Retail",
                    result: "4 hours → 5 minutes, 100% accuracy"
                },
                {
                    title: "Data Synchronization",
                    description: "Built real-time sync between CRM and accounting system, eliminating manual data entry.",
                    icon: "Database",
                    industry: "Professional Services",
                    result: "Zero manual entry, real-time sync"
                },
                {
                    title: "Onboarding Automation",
                    description: "Automated employee onboarding workflow with account creation, access provisioning, and welcome emails.",
                    icon: "Users",
                    industry: "Tech Startup",
                    result: "2 days → 2 hours, consistent process"
                },
                {
                    title: "Inventory Management",
                    description: "Automated inventory tracking and reordering based on sales velocity and stock levels.",
                    icon: "ShoppingCart",
                    industry: "E-commerce",
                    result: "90% less stockouts, optimized inventory"
                }
            ]
        },
        techStack: {
            title: "Automation Technologies",
            subtitle: "Our Toolkit",
            description: "Powerful tools for building reliable, scalable automation.",
            technologies: [
                { name: "Python", category: "Languages" },
                { name: "Node.js", category: "Languages" },
                { name: "Bash", category: "Scripting" },
                { name: "Apache Airflow", category: "Orchestration" },
                { name: "n8n", category: "Workflow Automation" },
                { name: "Zapier", category: "No-Code Integration" },
                { name: "Make", category: "Workflow Automation" },
                { name: "Cron", category: "Scheduling" },
                { name: "Docker", category: "Containerization" },
                { name: "AWS Lambda", category: "Serverless" }
            ]
        },
        benefits: {
            title: "Benefits of Automation",
            subtitle: "The Impact",
            description: "Measurable improvements in efficiency and accuracy.",
            items: [
                {
                    title: "Time Savings",
                    description: "Reclaim hours every week by automating repetitive tasks.",
                    icon: "Clock",
                    metric: "80%"
                },
                {
                    title: "Error Reduction",
                    description: "Eliminate human error in data entry and manual processes.",
                    icon: "CheckCircle",
                    metric: "90%"
                },
                {
                    title: "Cost Efficiency",
                    description: "Reduce operational costs with automation that scales without adding headcount.",
                    icon: "DollarSign",
                    metric: "60%"
                },
                {
                    title: "Fast ROI",
                    description: "Most automation projects pay for themselves within 3 months.",
                    icon: "TrendingUp",
                    metric: "3 mo"
                }
            ]
        },
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "Custom Automation",
            items: [
                {
                    question: "What processes can be automated?",
                    answer: "Almost any repetitive, rule-based process can be automated. Common examples include data entry, report generation, file processing, email workflows, and system integrations."
                },
                {
                    question: "How long does it take to build automation?",
                    answer: "Simple scripts can be built in days, while complex workflow orchestration may take weeks. We provide estimates after understanding your specific requirements."
                },
                {
                    question: "What if my process changes?",
                    answer: "We build flexible automation that's easy to modify. We also provide documentation and can train your team to make minor adjustments."
                },
                {
                    question: "Can you automate processes across different tools?",
                    answer: "Yes! We specialize in connecting disparate systems through APIs, webhooks, and custom integrations."
                },
                {
                    question: "How do you ensure automation reliability?",
                    answer: "We implement error handling, monitoring, alerts, and logging. If something fails, you're notified immediately with details on what went wrong."
                }
            ]
        },
        cta: {
            title: "Ready to Automate Your Workflows?",
            description: "Let's identify your biggest time sinks and build automation that saves hours every week. Get a free automation assessment.",
            variant: "gradient"
        },
        relatedServices: ["ai-integration", "development", "optimization"]
    },
    "debugging": {
        slug: "debugging",
        title: "Technical Debugging",
        shortDescription: "Expert debugging services to solve your most challenging technical problems.",
        icon: "Wrench",
        hero: {
            description: "Solve your most challenging technical problems with expert debugging services. From production crashes to performance bottlenecks, we find root causes and deliver permanent fixes.",
            gradient: "bg-gradient-to-br from-teal-600 via-emerald-600 to-green-600",
            iconColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
        },
        overview: {
            title: "Expert Problem Solving",
            subtitle: "Debug Anything",
            description: [
                "Production bugs, mysterious crashes, performance issues—technical problems can bring development to a halt and cost thousands in lost revenue.",
                "Our debugging services help you identify root causes quickly, implement permanent fixes, and prevent issues from recurring.",
                "Whether it's a memory leak, race condition, API integration failure, or performance bottleneck, we have the expertise to solve it."
            ],
            highlights: [
                "Production bug fixes and crash analysis",
                "Performance debugging and optimization",
                "Memory leaks and resource issues",
                "API integration debugging",
                "Database query optimization",
                "Security vulnerability fixes"
            ],
            stats: [
                { label: "Avg Resolution Time", value: "24hrs" },
                { label: "Success Rate", value: "98%" },
                { label: "Bugs Fixed", value: "1000+" },
                { label: "Uptime Improved", value: "99.9%" }
            ]
        },
        features: {
            title: "Debugging Capabilities",
            subtitle: "What We Debug",
            description: "From frontend to backend, we debug every layer of your stack.",
            items: [
                {
                    title: "Production Crashes",
                    description: "Analyze crash logs, reproduce issues, and implement fixes for production failures.",
                    icon: "Target",
                    color: "bg-gradient-to-br from-red-500 to-rose-600"
                },
                {
                    title: "Performance Issues",
                    description: "Identify bottlenecks, optimize slow queries, and improve application speed.",
                    icon: "Zap",
                    color: "bg-gradient-to-br from-yellow-500 to-orange-600"
                },
                {
                    title: "Memory Leaks",
                    description: "Find and fix memory leaks that cause crashes and performance degradation.",
                    icon: "Database",
                    color: "bg-gradient-to-br from-purple-500 to-violet-600"
                },
                {
                    title: "Integration Failures",
                    description: "Debug API integrations, third-party services, and data synchronization issues.",
                    icon: "GitBranch",
                    color: "bg-gradient-to-br from-blue-500 to-cyan-600"
                },
                {
                    title: "Security Vulnerabilities",
                    description: "Identify and patch security holes, SQL injection, XSS, and other vulnerabilities.",
                    icon: "Shield",
                    color: "bg-gradient-to-br from-green-500 to-emerald-600"
                },
                {
                    title: "Data Corruption",
                    description: "Recover corrupted data, fix database inconsistencies, and prevent data loss.",
                    icon: "FileText",
                    color: "bg-gradient-to-br from-pink-500 to-rose-600"
                }
            ]
        },
        process: {
            title: "Our Debugging Process",
            subtitle: "How We Work",
            description: "A systematic approach to finding and fixing bugs permanently.",
            steps: [
                {
                    number: "01",
                    title: "Reproduce & Analyze",
                    description: "Reproduce the issue, gather logs, and analyze the failure conditions.",
                    icon: "Search"
                },
                {
                    number: "02",
                    title: "Root Cause Analysis",
                    description: "Use debugging tools and techniques to identify the underlying cause.",
                    icon: "Target"
                },
                {
                    number: "03",
                    title: "Fix & Test",
                    description: "Implement the fix, write tests to prevent regression, and verify the solution.",
                    icon: "Wrench"
                },
                {
                    number: "04",
                    title: "Deploy & Monitor",
                    description: "Deploy the fix to production and monitor to ensure the issue is resolved.",
                    icon: "Rocket"
                },
                {
                    number: "05",
                    title: "Document & Prevent",
                    description: "Document the issue and implement safeguards to prevent similar problems.",
                    icon: "FileText"
                }
            ]
        },
        useCases: {
            title: "Debugging Success Stories",
            subtitle: "Use Cases",
            description: "Real examples of critical bugs we've solved.",
            items: [
                {
                    title: "Production Crash Fix",
                    description: "Identified and fixed a race condition causing random crashes in a high-traffic e-commerce site.",
                    icon: "Target",
                    industry: "E-commerce",
                    result: "Zero crashes, 99.99% uptime"
                },
                {
                    title: "Performance Optimization",
                    description: "Debugged slow API responses, optimized database queries, reduced response time from 5s to 200ms.",
                    icon: "Zap",
                    industry: "SaaS",
                    result: "25x faster, improved UX"
                },
                {
                    title: "Memory Leak Resolution",
                    description: "Found and fixed memory leak in Node.js service that was causing daily restarts.",
                    icon: "Database",
                    industry: "Fintech",
                    result: "Stable memory, no restarts"
                },
                {
                    title: "Security Vulnerability Patch",
                    description: "Identified SQL injection vulnerability and implemented parameterized queries.",
                    icon: "Shield",
                    industry: "Healthcare",
                    result: "Security audit passed"
                }
            ]
        },
        techStack: {
            title: "Debugging Tools & Technologies",
            subtitle: "Our Toolkit",
            description: "Professional debugging tools for every stack.",
            technologies: [
                { name: "Chrome DevTools", category: "Frontend" },
                { name: "VS Code Debugger", category: "IDE" },
                { name: "Node.js Inspector", category: "Backend" },
                { name: "Python pdb", category: "Backend" },
                { name: "Sentry", category: "Error Tracking" },
                { name: "New Relic", category: "APM" },
                { name: "DataDog", category: "Monitoring" },
                { name: "Postman", category: "API Testing" },
                { name: "SQL Profiler", category: "Database" },
                { name: "Wireshark", category: "Network" }
            ]
        },
        benefits: {
            title: "Benefits of Expert Debugging",
            subtitle: "The Impact",
            description: "Fast resolution of critical issues.",
            items: [
                {
                    title: "Fast Resolution",
                    description: "Get critical bugs fixed in hours, not days or weeks.",
                    icon: "Clock",
                    metric: "24hrs"
                },
                {
                    title: "Permanent Fixes",
                    description: "Root cause analysis ensures bugs don't come back.",
                    icon: "CheckCircle",
                    metric: "98%"
                },
                {
                    title: "Knowledge Transfer",
                    description: "Learn debugging techniques and prevent future issues.",
                    icon: "Lightbulb",
                    metric: "100%"
                },
                {
                    title: "Uptime Improvement",
                    description: "Reduce downtime and improve system reliability.",
                    icon: "TrendingUp",
                    metric: "99.9%"
                }
            ]
        },
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "Technical Debugging",
            items: [
                {
                    question: "How quickly can you fix a production bug?",
                    answer: "Most critical bugs are resolved within 24 hours. We prioritize production issues and can often provide a hotfix within hours."
                },
                {
                    question: "What if you can't reproduce the bug?",
                    answer: "We use advanced debugging techniques including log analysis, error tracking tools, and systematic testing to identify issues even when they're hard to reproduce."
                },
                {
                    question: "Do you provide documentation of the fix?",
                    answer: "Yes, we document the root cause, the fix implemented, and recommendations to prevent similar issues in the future."
                },
                {
                    question: "Can you debug legacy code?",
                    answer: "Absolutely. We have experience debugging codebases of all ages and technologies, even undocumented legacy systems."
                },
                {
                    question: "What's included in your debugging service?",
                    answer: "Issue reproduction, root cause analysis, fix implementation, testing, deployment support, and documentation."
                }
            ]
        },
        cta: {
            title: "Need Help Fixing a Critical Bug?",
            description: "Don't let bugs slow you down. Get expert debugging help and resolve issues fast.",
            variant: "gradient"
        },
        relatedServices: ["development", "optimization", "consulting"]
    },
    "consulting": {
        slug: "consulting",
        title: "End-to-End Guidance",
        shortDescription: "Strategic technical guidance from architecture to deployment.",
        icon: "Compass",
        hero: {
            description: "Navigate complex technical decisions with confidence. From architecture design to technology selection, we provide strategic guidance that sets your projects up for success.",
            gradient: "bg-gradient-to-br from-pink-600 via-rose-600 to-red-600",
            iconColor: "bg-gradient-to-br from-pink-500 to-rose-600"
        },
        overview: {
            title: "Strategic Technical Guidance",
            subtitle: "Expert Consulting",
            description: [
                "Building software is full of critical decisions—choosing the right architecture, selecting technologies, planning scalability, and managing technical debt.",
                "Our consulting services provide expert guidance to help you make informed decisions, avoid costly mistakes, and build systems that scale.",
                "Whether you're starting a new project, modernizing legacy systems, or scaling an existing platform, we provide the strategic insight you need."
            ],
            highlights: [
                "Architecture design and review",
                "Technology stack selection",
                "Scalability and performance planning",
                "Security and compliance guidance",
                "Technical debt assessment",
                "Team training and mentorship"
            ],
            stats: [
                { label: "Projects Guided", value: "200+" },
                { label: "Client Satisfaction", value: "98%" },
                { label: "Cost Savings", value: "40%" },
                { label: "Time to Market", value: "-30%" }
            ]
        },
        features: {
            title: "Consulting Services",
            subtitle: "How We Help",
            description: "Comprehensive technical guidance across all aspects of software development.",
            items: [
                {
                    title: "Architecture Design",
                    description: "Design scalable, maintainable architectures that support your business goals.",
                    icon: "GitBranch",
                    color: "bg-gradient-to-br from-blue-500 to-cyan-600"
                },
                {
                    title: "Technology Selection",
                    description: "Choose the right tools, frameworks, and platforms for your specific needs.",
                    icon: "Settings",
                    color: "bg-gradient-to-br from-purple-500 to-violet-600"
                },
                {
                    title: "Scalability Planning",
                    description: "Plan for growth with architectures that scale efficiently and cost-effectively.",
                    icon: "TrendingUp",
                    color: "bg-gradient-to-br from-green-500 to-emerald-600"
                },
                {
                    title: "Security Review",
                    description: "Identify vulnerabilities and implement security best practices.",
                    icon: "Shield",
                    color: "bg-gradient-to-br from-red-500 to-rose-600"
                },
                {
                    title: "Code Review",
                    description: "Review code quality, identify issues, and provide actionable recommendations.",
                    icon: "FileText",
                    color: "bg-gradient-to-br from-orange-500 to-amber-600"
                },
                {
                    title: "Team Mentorship",
                    description: "Train and mentor your team on best practices and modern development techniques.",
                    icon: "Users",
                    color: "bg-gradient-to-br from-pink-500 to-rose-600"
                }
            ]
        },
        process: {
            title: "Our Consulting Process",
            subtitle: "How We Work",
            description: "A structured approach to understanding your needs and delivering actionable guidance.",
            steps: [
                {
                    number: "01",
                    title: "Discovery & Assessment",
                    description: "Understand your business goals, technical challenges, and current state.",
                    icon: "Search"
                },
                {
                    number: "02",
                    title: "Analysis & Recommendations",
                    description: "Analyze your systems, identify opportunities, and develop recommendations.",
                    icon: "Lightbulb"
                },
                {
                    number: "03",
                    title: "Strategy Development",
                    description: "Create a detailed technical strategy and roadmap for implementation.",
                    icon: "FileText"
                },
                {
                    number: "04",
                    title: "Implementation Support",
                    description: "Provide ongoing guidance and support during implementation.",
                    icon: "Users"
                },
                {
                    number: "05",
                    title: "Review & Optimize",
                    description: "Review progress, optimize approach, and ensure success.",
                    icon: "Target"
                }
            ]
        },
        useCases: {
            title: "Consulting Success Stories",
            subtitle: "Use Cases",
            description: "Real examples of how strategic guidance transformed projects.",
            items: [
                {
                    title: "Microservices Migration",
                    description: "Guided a monolith-to-microservices migration for a SaaS company, reducing deployment time by 70%.",
                    icon: "GitBranch",
                    industry: "SaaS",
                    result: "70% faster deployments"
                },
                {
                    title: "Cloud Architecture",
                    description: "Designed AWS architecture for a fintech startup, achieving 99.99% uptime and 50% cost reduction.",
                    icon: "Cloud",
                    industry: "Fintech",
                    result: "99.99% uptime, 50% savings"
                },
                {
                    title: "Security Audit",
                    description: "Conducted comprehensive security review, identified 15 vulnerabilities, and guided remediation.",
                    icon: "Shield",
                    industry: "Healthcare",
                    result: "SOC 2 compliance achieved"
                },
                {
                    title: "Tech Stack Modernization",
                    description: "Helped e-commerce company migrate from legacy PHP to modern React/Node.js stack.",
                    icon: "Code",
                    industry: "E-commerce",
                    result: "3x faster, modern stack"
                }
            ]
        },
        techStack: {
            title: "Technologies We Consult On",
            subtitle: "Our Expertise",
            description: "Deep expertise across modern technology stacks.",
            technologies: [
                { name: "AWS", category: "Cloud" },
                { name: "Azure", category: "Cloud" },
                { name: "Google Cloud", category: "Cloud" },
                { name: "Kubernetes", category: "Infrastructure" },
                { name: "Docker", category: "Containers" },
                { name: "React", category: "Frontend" },
                { name: "Node.js", category: "Backend" },
                { name: "Python", category: "Backend" },
                { name: "PostgreSQL", category: "Database" },
                { name: "MongoDB", category: "Database" }
            ]
        },
        benefits: {
            title: "Benefits of Expert Consulting",
            subtitle: "The Impact",
            description: "Make better decisions with expert guidance.",
            items: [
                {
                    title: "Avoid Mistakes",
                    description: "Prevent costly architectural and technology mistakes.",
                    icon: "Shield",
                    metric: "40%"
                },
                {
                    title: "Faster Delivery",
                    description: "Reduce time to market with proven strategies.",
                    icon: "Rocket",
                    metric: "30%"
                },
                {
                    title: "Better Quality",
                    description: "Build more maintainable, scalable systems.",
                    icon: "CheckCircle",
                    metric: "95%"
                },
                {
                    title: "Team Growth",
                    description: "Upskill your team with expert mentorship.",
                    icon: "Users",
                    metric: "100%"
                }
            ]
        },
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "End-to-End Guidance",
            items: [
                {
                    question: "How does consulting differ from development?",
                    answer: "Consulting focuses on strategy, architecture, and guidance. We help you make informed decisions but don't necessarily write all the code. We can also provide implementation support."
                },
                {
                    question: "What deliverables do you provide?",
                    answer: "Typical deliverables include architecture diagrams, technical specifications, technology recommendations, roadmaps, and documentation."
                },
                {
                    question: "Can you review our existing architecture?",
                    answer: "Yes, we provide comprehensive architecture reviews with detailed recommendations for improvement."
                },
                {
                    question: "Do you offer ongoing consulting?",
                    answer: "Absolutely. Many clients engage us for ongoing advisory services, monthly check-ins, or on-demand guidance."
                },
                {
                    question: "What if we need help implementing your recommendations?",
                    answer: "We offer implementation support and can work alongside your team or handle development ourselves."
                }
            ]
        },
        cta: {
            title: "Need Strategic Technical Guidance?",
            description: "Make better technical decisions with expert consulting. Schedule a free consultation to discuss your project.",
            variant: "gradient"
        },
        relatedServices: ["development", "debugging", "optimization"]
    },
    "development": {
        slug: "development",
        title: "Web & App Development",
        shortDescription: "Modern, scalable applications built with clean code and exceptional UX.",
        icon: "Code",
        hero: {
            description: "Build modern, scalable applications that users love. From enterprise web platforms to mobile apps, we deliver production-ready software with clean code and exceptional UX.",
            gradient: "bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600",
            iconColor: "bg-gradient-to-br from-orange-500 to-amber-600"
        },
        overview: {
            title: "Full-Stack Development",
            subtitle: "Build Anything",
            description: [
                "Whether you need a web application, mobile app, or complex enterprise platform, we build software that scales and delights users.",
                "Our development services cover the entire stack—from beautiful, responsive frontends to robust, scalable backends and everything in between.",
                "We use modern frameworks, follow best practices, and deliver production-ready code with comprehensive testing and documentation."
            ],
            highlights: [
                "Web applications (React, Next.js, Vue)",
                "Mobile apps (React Native, Flutter)",
                "Backend APIs (Node.js, Python, Go)",
                "Database design and optimization",
                "Cloud deployment and DevOps",
                "Testing and quality assurance"
            ],
            stats: [
                { label: "Apps Built", value: "300+" },
                { label: "Code Quality", value: "A+" },
                { label: "Client Retention", value: "95%" },
                { label: "On-Time Delivery", value: "98%" }
            ]
        },
        features: {
            title: "Development Services",
            subtitle: "What We Build",
            description: "Full-stack development across web, mobile, and cloud platforms.",
            items: [
                {
                    title: "Web Applications",
                    description: "Build responsive, performant web apps with React, Next.js, or Vue.",
                    icon: "Globe",
                    color: "bg-gradient-to-br from-blue-500 to-cyan-600"
                },
                {
                    title: "Mobile Apps",
                    description: "Native-quality mobile apps for iOS and Android with React Native or Flutter.",
                    icon: "Smartphone",
                    color: "bg-gradient-to-br from-purple-500 to-violet-600"
                },
                {
                    title: "Backend APIs",
                    description: "Scalable REST and GraphQL APIs with Node.js, Python, or Go.",
                    icon: "Server",
                    color: "bg-gradient-to-br from-green-500 to-emerald-600"
                },
                {
                    title: "E-commerce Platforms",
                    description: "Custom e-commerce solutions with payment processing and inventory management.",
                    icon: "ShoppingCart",
                    color: "bg-gradient-to-br from-orange-500 to-amber-600"
                },
                {
                    title: "Database Design",
                    description: "Efficient database schemas with PostgreSQL, MongoDB, or MySQL.",
                    icon: "Database",
                    color: "bg-gradient-to-br from-red-500 to-rose-600"
                },
                {
                    title: "Cloud Deployment",
                    description: "Deploy to AWS, Azure, or Google Cloud with CI/CD pipelines.",
                    icon: "Cloud",
                    color: "bg-gradient-to-br from-pink-500 to-rose-600"
                }
            ]
        },
        process: {
            title: "Our Development Process",
            subtitle: "How We Work",
            description: "Agile development with continuous feedback and iteration.",
            steps: [
                {
                    number: "01",
                    title: "Requirements & Design",
                    description: "Gather requirements, create wireframes, and design the user experience.",
                    icon: "Lightbulb"
                },
                {
                    number: "02",
                    title: "Development Sprints",
                    description: "Build features in 2-week sprints with regular demos and feedback.",
                    icon: "Code"
                },
                {
                    number: "03",
                    title: "Testing & QA",
                    description: "Comprehensive testing including unit, integration, and end-to-end tests.",
                    icon: "CheckCircle"
                },
                {
                    number: "04",
                    title: "Deployment",
                    description: "Deploy to production with CI/CD pipelines and monitoring.",
                    icon: "Rocket"
                },
                {
                    number: "05",
                    title: "Support & Iteration",
                    description: "Ongoing support, bug fixes, and feature enhancements.",
                    icon: "Users"
                }
            ]
        },
        useCases: {
            title: "Development Success Stories",
            subtitle: "Use Cases",
            description: "Real applications we've built for clients.",
            items: [
                {
                    title: "SaaS Platform",
                    description: "Built a multi-tenant SaaS platform with React, Node.js, and PostgreSQL serving 10,000+ users.",
                    icon: "Globe",
                    industry: "SaaS",
                    result: "10K+ users, 99.9% uptime"
                },
                {
                    title: "Mobile App",
                    description: "Developed React Native app for food delivery with real-time tracking and payments.",
                    icon: "Smartphone",
                    industry: "Food Tech",
                    result: "50K downloads, 4.8★ rating"
                },
                {
                    title: "E-commerce Site",
                    description: "Built custom e-commerce platform with Stripe integration and inventory management.",
                    icon: "ShoppingCart",
                    industry: "Retail",
                    result: "$2M+ in sales"
                },
                {
                    title: "Enterprise Dashboard",
                    description: "Created analytics dashboard with real-time data visualization for Fortune 500 company.",
                    icon: "BarChart",
                    industry: "Enterprise",
                    result: "Used by 500+ employees"
                }
            ]
        },
        techStack: {
            title: "Development Technologies",
            subtitle: "Our Stack",
            description: "Modern frameworks and tools for building great software.",
            technologies: [
                { name: "React", category: "Frontend" },
                { name: "Next.js", category: "Frontend" },
                { name: "Vue.js", category: "Frontend" },
                { name: "React Native", category: "Mobile" },
                { name: "Flutter", category: "Mobile" },
                { name: "Node.js", category: "Backend" },
                { name: "Python", category: "Backend" },
                { name: "PostgreSQL", category: "Database" },
                { name: "MongoDB", category: "Database" },
                { name: "AWS", category: "Cloud" }
            ]
        },
        benefits: {
            title: "Why Choose Our Development Services",
            subtitle: "The Impact",
            description: "Quality software delivered on time and on budget.",
            items: [
                {
                    title: "Clean Code",
                    description: "Maintainable, well-documented code that's easy to extend.",
                    icon: "Code",
                    metric: "A+"
                },
                {
                    title: "On-Time Delivery",
                    description: "Predictable delivery with agile sprints and regular updates.",
                    icon: "Clock",
                    metric: "98%"
                },
                {
                    title: "Scalable Architecture",
                    description: "Build for today, scale for tomorrow.",
                    icon: "TrendingUp",
                    metric: "10x"
                },
                {
                    title: "User-Focused",
                    description: "Beautiful UX that users love.",
                    icon: "Users",
                    metric: "4.8★"
                }
            ]
        },
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "Web & App Development",
            items: [
                {
                    question: "How long does it take to build an app?",
                    answer: "It depends on complexity. Simple apps can be built in 4-6 weeks, while complex platforms may take 3-6 months. We provide detailed timelines after understanding your requirements."
                },
                {
                    question: "Do you provide design services?",
                    answer: "Yes, we offer UI/UX design as part of our development services, including wireframes, mockups, and user testing."
                },
                {
                    question: "Can you work with our existing codebase?",
                    answer: "Absolutely. We frequently work with existing codebases, adding features, fixing bugs, and modernizing legacy systems."
                },
                {
                    question: "What's your development process?",
                    answer: "We use agile methodology with 2-week sprints, regular demos, and continuous feedback to ensure we're building exactly what you need."
                },
                {
                    question: "Do you provide ongoing support?",
                    answer: "Yes, we offer maintenance and support packages to keep your application running smoothly and add new features over time."
                }
            ]
        },
        cta: {
            title: "Ready to Build Your Application?",
            description: "Let's bring your idea to life. Schedule a free consultation to discuss your project.",
            variant: "gradient"
        },
        relatedServices: ["ai-integration", "consulting", "optimization"]
    },
    "optimization": {
        slug: "optimization",
        title: "System Optimization",
        shortDescription: "Transform slow systems into high-performance platforms.",
        icon: "TrendingUp",
        hero: {
            description: "Transform slow, expensive, or unreliable systems into high-performance platforms. We optimize every layer—from code to infrastructure—for speed, security, and cost efficiency.",
            gradient: "bg-gradient-to-br from-lime-600 via-green-600 to-emerald-600",
            iconColor: "bg-gradient-to-br from-lime-500 to-green-600"
        },
        overview: {
            title: "Performance & Cost Optimization",
            subtitle: "Make It Faster",
            description: [
                "Slow applications frustrate users and cost money. Performance issues, high cloud bills, and inefficient systems drain resources and hurt your bottom line.",
                "Our optimization services identify bottlenecks, eliminate waste, and transform sluggish systems into high-performance platforms.",
                "Whether it's slow page loads, expensive database queries, or runaway cloud costs, we make your systems faster, cheaper, and more reliable."
            ],
            highlights: [
                "Performance optimization and speed improvements",
                "Database query optimization",
                "Cloud cost reduction",
                "Code refactoring and cleanup",
                "Infrastructure optimization",
                "Caching and CDN implementation"
            ],
            stats: [
                { label: "Speed Improvement", value: "10x" },
                { label: "Cost Reduction", value: "60%" },
                { label: "Uptime", value: "99.9%" },
                { label: "User Satisfaction", value: "+40%" }
            ]
        },
        features: {
            title: "Optimization Services",
            subtitle: "What We Optimize",
            description: "Comprehensive optimization across all layers of your stack.",
            items: [
                {
                    title: "Performance Tuning",
                    description: "Optimize code, reduce load times, and improve application responsiveness.",
                    icon: "Zap",
                    color: "bg-gradient-to-br from-yellow-500 to-orange-600"
                },
                {
                    title: "Database Optimization",
                    description: "Optimize queries, add indexes, and improve database performance.",
                    icon: "Database",
                    color: "bg-gradient-to-br from-blue-500 to-cyan-600"
                },
                {
                    title: "Cloud Cost Reduction",
                    description: "Right-size resources, implement auto-scaling, and reduce cloud bills.",
                    icon: "Cloud",
                    color: "bg-gradient-to-br from-purple-500 to-violet-600"
                },
                {
                    title: "Caching Strategy",
                    description: "Implement Redis, CDN, and application-level caching for faster responses.",
                    icon: "Rocket",
                    color: "bg-gradient-to-br from-green-500 to-emerald-600"
                },
                {
                    title: "Code Refactoring",
                    description: "Clean up technical debt, improve code quality, and reduce complexity.",
                    icon: "Code",
                    color: "bg-gradient-to-br from-pink-500 to-rose-600"
                },
                {
                    title: "Security Hardening",
                    description: "Implement security best practices and reduce attack surface.",
                    icon: "Shield",
                    color: "bg-gradient-to-br from-red-500 to-rose-600"
                }
            ]
        },
        process: {
            title: "Our Optimization Process",
            subtitle: "How We Work",
            description: "Data-driven optimization with measurable results.",
            steps: [
                {
                    number: "01",
                    title: "Performance Audit",
                    description: "Measure current performance, identify bottlenecks, and set improvement goals.",
                    icon: "Search"
                },
                {
                    number: "02",
                    title: "Analysis & Planning",
                    description: "Analyze root causes and create optimization plan with expected impact.",
                    icon: "Lightbulb"
                },
                {
                    number: "03",
                    title: "Implementation",
                    description: "Implement optimizations incrementally with continuous testing.",
                    icon: "Settings"
                },
                {
                    number: "04",
                    title: "Measurement",
                    description: "Measure improvements, validate results, and iterate as needed.",
                    icon: "BarChart"
                },
                {
                    number: "05",
                    title: "Monitoring",
                    description: "Set up monitoring and alerts to maintain performance over time.",
                    icon: "Gauge"
                }
            ]
        },
        useCases: {
            title: "Optimization Success Stories",
            subtitle: "Use Cases",
            description: "Real examples of dramatic performance improvements.",
            items: [
                {
                    title: "Page Load Optimization",
                    description: "Reduced page load time from 8s to 800ms through code splitting, lazy loading, and CDN.",
                    icon: "Zap",
                    industry: "E-commerce",
                    result: "10x faster, +25% conversion"
                },
                {
                    title: "Database Query Optimization",
                    description: "Optimized slow queries, added indexes, reduced API response time from 5s to 200ms.",
                    icon: "Database",
                    industry: "SaaS",
                    result: "25x faster queries"
                },
                {
                    title: "Cloud Cost Reduction",
                    description: "Right-sized AWS resources, implemented auto-scaling, reduced monthly bill from $10K to $4K.",
                    icon: "Cloud",
                    industry: "Startup",
                    result: "60% cost savings"
                },
                {
                    title: "API Performance",
                    description: "Implemented Redis caching, reduced database load by 80%, improved API throughput 5x.",
                    icon: "Rocket",
                    industry: "Fintech",
                    result: "5x throughput, 80% less load"
                }
            ]
        },
        techStack: {
            title: "Optimization Tools & Technologies",
            subtitle: "Our Toolkit",
            description: "Professional tools for performance analysis and optimization.",
            technologies: [
                { name: "Lighthouse", category: "Performance" },
                { name: "New Relic", category: "APM" },
                { name: "DataDog", category: "Monitoring" },
                { name: "Redis", category: "Caching" },
                { name: "CloudFlare", category: "CDN" },
                { name: "AWS CloudWatch", category: "Monitoring" },
                { name: "PostgreSQL", category: "Database" },
                { name: "Webpack", category: "Build Tools" },
                { name: "Docker", category: "Containers" },
                { name: "Kubernetes", category: "Orchestration" }
            ]
        },
        benefits: {
            title: "Benefits of Optimization",
            subtitle: "The Impact",
            description: "Faster, cheaper, more reliable systems.",
            items: [
                {
                    title: "Speed Boost",
                    description: "10x faster load times and better user experience.",
                    icon: "Zap",
                    metric: "10x"
                },
                {
                    title: "Cost Savings",
                    description: "Reduce cloud and infrastructure costs by 60%.",
                    icon: "DollarSign",
                    metric: "60%"
                },
                {
                    title: "Reliability",
                    description: "Improve uptime and reduce errors.",
                    icon: "Shield",
                    metric: "99.9%"
                },
                {
                    title: "User Satisfaction",
                    description: "Faster apps lead to happier users.",
                    icon: "Users",
                    metric: "+40%"
                }
            ]
        },
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "System Optimization",
            items: [
                {
                    question: "How much faster can you make my application?",
                    answer: "It depends on current state, but we typically achieve 5-10x improvements in load times and API response times through systematic optimization."
                },
                {
                    question: "Will optimization break existing functionality?",
                    answer: "No. We optimize incrementally with comprehensive testing to ensure functionality remains intact while performance improves."
                },
                {
                    question: "How do you measure optimization success?",
                    answer: "We use metrics like page load time, API response time, database query performance, cloud costs, and user satisfaction scores."
                },
                {
                    question: "Can you reduce our cloud costs?",
                    answer: "Yes. We analyze resource usage, right-size instances, implement auto-scaling, and optimize architecture to reduce costs by 40-60% on average."
                },
                {
                    question: "Do optimizations last over time?",
                    answer: "Yes, when combined with monitoring and best practices. We also provide guidance on maintaining performance as your application grows."
                }
            ]
        },
        cta: {
            title: "Ready to Optimize Your Systems?",
            description: "Make your application faster and cheaper. Get a free performance audit and optimization plan.",
            variant: "gradient"
        },
        relatedServices: ["debugging", "development", "consulting"]
    }
};

export function getServiceData(slug: string): ServiceData | undefined {
    return servicesData[slug];
}

export function getRelatedServices(slug: string): ServiceData[] {
    const service = servicesData[slug];
    if (!service) return [];

    return service.relatedServices
        .map(relatedSlug => servicesData[relatedSlug])
        .filter(Boolean) as ServiceData[];
}

export function getAllServices(): ServiceData[] {
    return Object.values(servicesData);
}
