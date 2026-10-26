/**
 * Placeholder brand. Rename the public site by editing `companyName` and
 * `contactEmail` here. Page copy reads these values; it does not repeat them.
 *
 * Claim boundaries:
 * - Barakat is the only named client, and the only demonstrated project.
 * - Supply-chain planning and route optimization are demonstrated experience.
 * - Geospatial engineering and logistics software are capabilities we develop.
 * - Ride-hailing and mobility are a target market, not a client engagement.
 * - Do not describe fleet dispatch, live tracking, capacity constraints,
 *   time windows, or driver assignment as delivered work.
 */

export const site = {
  companyName: "Northline",
  contactEmail: "hello@northline.example",
  proposition:
    "We engineer mobility and logistics platforms that optimize how people, vehicles, and goods move through complex urban networks.",
  description:
    "Software for businesses that plan transportation, coordinate deliveries, and manage distribution across urban networks.",
  nav: [
    { href: "/work/barakat", label: "Barakat" },
    { href: "/capabilities", label: "Capabilities" },
    { href: "/contact", label: "Contact" },
  ],
  images: {
    city: {
      src: "/images/city-network.jpg",
      alt: "Aerial view of a dense city and its road network at dusk",
      caption: "Atmosphere of an urban network. Not a client location.",
    },
    facility: {
      src: "/images/facility-dusk.jpg",
      alt: "Loading docks and palletized goods in a distribution warehouse at dusk",
      caption: "Distribution atmosphere. Not a photograph of a client facility.",
    },
    planning: {
      src: "/images/planning-table.jpg",
      alt: "A printed city map with one marked route, a ruler, and a notebook",
      caption: "A planning reference. Not a view of the Barakat application.",
    },
  },
  home: {
    eyebrow: "Mobility, logistics, and route optimization",
    title: "Mobility and Logistics Technology",
    subhead: "Software for Complex Transportation and Distribution Networks",
    intro:
      "We develop software for businesses that need to plan transportation, coordinate deliveries, and manage distribution operations.",
    capabilitiesLine:
      "Our capabilities include supply-chain planning, route optimization, geospatial data processing, and logistics software development.",
    specs: [
      { label: "Practice", value: "Route optimization" },
      { label: "Engagement", value: "Barakat, UAE" },
      { label: "Operating focus", value: "Urban distribution" },
    ],
    thread:
      "The connection is a single operating problem: how to move people, vehicles, and goods efficiently across a city.",
    pillars: [
      {
        index: "01",
        icon: "mobility",
        kicker: "Market",
        title: "Mobility platforms",
        body: "Technology for ride-hailing and on-demand transportation businesses. This is a market we are positioned to serve.",
      },
      {
        index: "02",
        icon: "logistics",
        kicker: "Demonstrated",
        title: "Intelligent logistics",
        body: "Supply-chain planning, delivery planning, and route optimization for operations that have to be coordinated before a vehicle moves.",
      },
      {
        index: "03",
        icon: "network",
        kicker: "Demonstrated",
        title: "Urban distribution optimization",
        body: "Planning how to serve geographically dispersed retailers across a dense urban network. This is the problem the Barakat project takes on.",
      },
    ],
    methodHeading: "How an engagement runs",
    method: [
      {
        index: "01",
        icon: "network",
        title: "Frame the operation",
        body: "Clarify the facilities, destinations, and planning decisions the business has to make.",
      },
      {
        index: "02",
        icon: "route",
        title: "Shape the plan",
        body: "Turn that operation into supply-chain planning and route-planning software.",
      },
      {
        index: "03",
        icon: "software",
        title: "Build the application",
        body: "Build the application the team uses to plan distribution.",
      },
    ],
    caseStudy: {
      eyebrow: "Completed client project",
      place: "UAE · Dubai",
      title: "Barakat",
      subtitle: "Supply-chain planning and route optimization",
      body: "We developed a supply-chain planning and route-optimization application for Barakat in the UAE. The application supports distribution planning from supply facilities to retail locations across Dubai.",
      href: "/work/barakat",
      cta: "Read the case study",
    },
    marketsHeading: "Our market focus",
    marketsLede:
      "We aim to serve businesses in these sectors, and we apply software engineering and optimization to the operational needs of each one.",
    markets: [
      { icon: "mobility", label: "Mobility and transportation" },
      { icon: "logistics", label: "Logistics and distribution" },
      { icon: "retail", label: "Retail supply chains" },
      { icon: "lastmile", label: "Last-mile delivery" },
      { icon: "food", label: "Food and fresh-product distribution" },
    ],
    close:
      "By combining software engineering with optimization-driven problem solving, we help businesses plan, coordinate, and execute transportation and distribution operations.",
  },
  barakat: {
    title: "Barakat",
    description:
      "A supply-chain planning and route-optimization application for Barakat, supporting distribution from supply facilities to retailers across Dubai.",
    eyebrow: "Completed client project · UAE",
    place: "Dubai",
    titleLine: "Supply-chain planning and route optimization",
    lede: "We developed a supply-chain planning and route-optimization application for Barakat in the UAE. The application supports distribution planning from supply facilities to retail locations across Dubai.",
    glimpseHeading: "Project glimpse",
    glimpseLede:
      "A planning screen for sequencing deliveries from a supply facility across Dubai. The districts and the route are an illustration of that problem, not a live tracker and not a measured result.",
    problemHeading: "The business problem",
    problem: [
      "Barakat's distribution operations involved supplying products from supply facilities to retailers across Dubai.",
      "The challenge was to plan deliveries across a dense network of geographically dispersed retail locations while coordinating delivery routes and operational requirements.",
      "Planning these deliveries by hand grows harder as the number of retail locations and vehicles grows.",
    ],
    solutionHeading: "The application",
    solution: [
      "The project addresses the operational complexity of servicing a dense network of retail destinations and planning efficient delivery routes.",
      "It demonstrates our ability to develop software for complex distribution operations.",
    ],
    supports: [
      {
        icon: "supply",
        title: "Supply-chain planning",
        body: "Coordinates the planning of product movement from supply facilities to retail destinations.",
      },
      {
        icon: "route",
        title: "Route optimization",
        body: "Supports efficient delivery sequences across multiple retailers.",
      },
      {
        icon: "geo",
        title: "Urban network planning",
        body: "Accounts for retail locations spread across a dense city, so routes are planned against the real geography of the network.",
      },
    ],
    diagramCaption:
      "Illustrative view of the distribution problem: facilities serving many retail locations across a city.",
    parallelHeading: "Where the same problems show up",
    parallelIntro:
      "Ride-hailing is a market we are positioned to serve. It is not a completed client engagement. A mobility platform has to place people and vehicles. A distribution platform has to place vehicles and goods. The concerns overlap. The systems are not the same, and this comparison is not a claim that one product was reused for the other.",
    parallelColumns: {
      topic: "Concern",
      mobility: "Typical mobility-platform need",
      barakat: "Barakat project",
    },
    parallels: [
      {
        topic: "Geospatial processing",
        mobility: "Passenger and driver locations",
        barakat: "Retailer and supply-facility locations",
      },
      {
        topic: "Routing",
        mobility: "Navigation and trip routes",
        barakat: "Multi-stop delivery routes",
      },
      {
        topic: "Optimization",
        mobility: "Assigning trip requests to available vehicles",
        barakat: "Planning delivery routes across destinations",
      },
      {
        topic: "Network analysis",
        mobility: "Urban mobility networks",
        barakat: "Dense retail distribution networks",
      },
      {
        topic: "Operational efficiency",
        mobility: "Pickup and journey planning",
        barakat: "Delivery routes and distribution planning",
      },
      {
        topic: "Scale",
        mobility: "Many trip requests across a city",
        barakat: "Many retail destinations across Dubai",
      },
    ],
  },
  capabilities: {
    title: "Capabilities",
    description:
      "Supply-chain planning, route optimization, geospatial data processing, and logistics software for transportation and distribution.",
    eyebrow: "What we develop",
    lede: "We develop software for businesses that need to plan transportation, coordinate deliveries, and manage distribution operations. Two of these capabilities are demonstrated on the Barakat project. The others are part of the software practice we bring to that kind of work.",
    items: [
      {
        icon: "supply",
        status: "Demonstrated project experience",
        title: "Supply-chain planning",
        body: "Develop software to support the planning of product distribution from supply facilities to retail locations.",
      },
      {
        icon: "route",
        status: "Demonstrated project experience",
        title: "Route optimization",
        body: "Develop software to support efficient route planning across multiple delivery locations.",
      },
      {
        icon: "geo",
        status: "Capability we develop",
        title: "Geospatial engineering",
        body: "Process geographic data to support route planning and distribution network analysis.",
      },
      {
        icon: "software",
        status: "Capability we develop",
        title: "Logistics software",
        body: "Build applications to support delivery planning and the coordination of distribution operations.",
      },
    ],
    linesHeading: "Service lines",
    linesLede:
      "These are directions for the practice, not a record that every listed activity has already been delivered.",
    lines: [
      {
        index: "01",
        icon: "mobility",
        kicker: "Target market",
        title: "Ride-hailing and mobility engineering",
        body: "A market we aim to serve. Ride-hailing and on-demand transportation businesses need software for locations, trip routes, and day-to-day operations. We are positioned to do that engineering. It is not a completed client engagement.",
      },
      {
        index: "02",
        icon: "lastmile",
        kicker: "Grounded in the Barakat work",
        title: "Last-mile and delivery planning",
        body: "Multi-stop routing and delivery planning for operations that move goods across many destinations. This line rests on the route and distribution planning completed for Barakat.",
      },
      {
        index: "03",
        icon: "supply",
        kicker: "Demonstrated with Barakat",
        title: "Supply-chain and distribution planning",
        body: "Distribution planning from supply facilities to the retail locations that need product, including how a dense urban network of destinations is planned and coordinated.",
      },
    ],
  },
  contact: {
    title: "Contact",
    description:
      "Start a conversation about transportation, delivery, and distribution software.",
    eyebrow: "Contact",
    heading: "Start a conversation",
    lede: "Tell us about a transportation, delivery, or distribution problem. The form opens an email draft to the address below. Nothing is stored on this site.",
    submitLabel: "Open email draft",
    fields: {
      name: "Name",
      company: "Company",
      email: "Email",
      message: "Message",
    },
  },
} as const;
