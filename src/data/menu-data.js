const menu_data = [
  {
    id: 1,
    // hasDropdown: false,
    title: "Home",
    link: "/",
    // submenus: [
    //   { title: 'Main Home', link: '/' },
    //   { title: 'Lawyer', link: '/home-lawyer' },
    //   { title: 'Freelancer', link: '/home-freelancer' },
    //   { title: 'Digital Agency', link: '/home-agency' },
    //   { title: 'Photographer', link: '/home-photographer' },
    //   { title: 'Startup', link: '/home-startup' },
    //   { title: 'Creative Agency', link: '/home-creative' },
    //   { title: 'Personal Portfolio', link: '/home-portfolio' },
    //   { title: 'Architecture', link: '/home-architecture' },
    //   { title: 'Vertical Slider', link: '/home-vertical' },
    //   { title: 'Politician', link: '/home-politician' },
    //   { title: 'Minimal Shop', link: '/home-shop' },
    //   { title: 'Swiper Slider', link: '/home-swiper' },
    // ],
  },
  {
    id: 2,
    title: "About Us",
    // megaMenu: false,
    link: "/about",
    // mega_menus: [
    //   {
    //     title: 'Widget 1', link: '#',
    //     submenus: [
    //       {title:'Accordion',link:'/elements-accordion'},
    //       {title:'Blog Posts',link:'/elements-blog-post'},
    //       {title:'Button',link:'/elements-button'},
    //       {title:'Call to Action',link:'/elements-cta'},
    //       {title:'Carousel',link:'/elements-carousel'},
    //       {title:'Clients Logo',link:'/elements-brand'},
    //     ]
    //   },
    //   {
    //     title: 'Widget 2', link: '#',
    //     submenus: [
    //       {title:'Contact Form',link:'/elements-form'},
    //       {title:'Gallery',link:'/elements-gallery'},
    //       {title:'Google Map',link:'/elements-map'},
    //       {title:'Heading',link:'/elements-heading'},
    //       {title:'Icon Box',link:'/elements-iconbox'},
    //       {title:'Instagram Feed',link:'/elements-instagram'},
    //     ]
    //   },
    //   {
    //     title: 'Widget 3', link: '#',
    //     submenus: [
    //       {title:'Parallax',link:'/elements-parallax'},
    //       {title:'Portfolio Video',link:'#'},
    //       {title:'Pricing Table',link:'/elements-pricing'},
    //       {title:'Progress Bar',link:'/elements-skill'},
    //       {title:'Process',link:'/elements-process'},
    //       {title:'Team Member',link:'/elements-team'},
    //     ]
    //   },
    //   {
    //     title: 'Widget 4', link: '#',
    //     submenus: [
    //       {title:'Tabs',link:'/elements-tab'},
    //       {title:'Shop Category',link:'/elements-shop'},
    //       {title:'Testimonial',link:'/elements-testimonial'},
    //       {title:'Social Icons',link:'/elements-social'},
    //       {title:'Subscribe Form',link:'/elements-subscribe'},
    //       {title:'Video',link:'/elements-video'},
    //     ]
    //   },
    // ],
  },
  {
    id: 3,
    hasDropdown: true,
    title: "Services",
    link: "/service-details",
    submenus: [
      // { title: 'Classic Style', link: '/portfolio' },
      { title: "Grid 3 Columns", link: "/portfolio-2" },
      // { title: 'Gallery Style', link: '/portfolio-gallery' },
      // { title: 'Masonry Full', link: '/portfolio-masonry' },
      // { title: 'Metro Style', link: '/portfolio-metro' },
      // { title: 'Slider Style', link: '/portfolio-slider' },
      // { title: 'Classic Details', link: '/portfolio-details' },
      // { title: 'List With Details', link: '/portfolio-details-list' },
      // { title: 'Slider with Details', link: '/portfolio-details-slider' },
      // { title: 'Video With Details', link: '/portfolio-details-video' },
    ],
  },
  {
    id: 4,
    // hasDropdown: true,
    title: "portfolio",
    link: "/portfolio-gallery",
    // submenus: [
    //   { title: 'Classic Style', link: '/portfolio' },
    //   { title: "Grid 3 Columns", link: "/portfolio-2" },
    //   { title: 'Gallery Style', link: '/portfolio-gallery' },
    //   { title: 'Masonry Full', link: '/portfolio-masonry' },
    //   { title: 'Metro Style', link: '/portfolio-metro' },
    //   { title: 'Slider Style', link: '/portfolio-slider' },
    //   { title: 'Classic Details', link: '/portfolio-details' },
    //   { title: 'List With Details', link: '/portfolio-details-list' },
    //   { title: 'Slider with Details', link: '/portfolio-details-slider' },
    //   { title: 'Video With Details', link: '/portfolio-details-video' },
    // ],
  },

  
  // {
  //   id: 4,
  //   hasDropdown: true,
  //   title: "Blog",
  //   link: "blog",
  //   submenus: [
  //     // { title: 'Blog Standard', link: '/blog' },
  //     { title: "Blog Grid", link: "/blog-grid" },
  //     { title: "Blog Grid Boxed", link: "/blog-grid-2" },
  //     { title: "Blog Grid Sidebar", link: "/blog-grid-sidebar" },
  //     { title: "Blog List Sidebar", link: "/blog-list-sidebar" },
  //     // { title: 'Blog Masonry', link: '/blog-masonry' },
  //     // { title: 'Blog Details', link: '/blog-details' },
  //     // { title: 'Blog Details 2', link: '/blog-details-2' },
  //   ],
  // },

  {
    id: 5,
    // hasDropdown: true,
    title: "Carreer",
    link: "about",
    // submenus: [
    //   { title: "About Us", link: "/about" },
    //   { title: "Service Details", link: "/service-details" },
    // ],
  },

  // {
  //   id: 6,
  //   title: "Pages",
  //   megaMenu: true,
  //   link: "#",
  //   pages: true,
  //   mega_menus: [
  //     {
  //       title: "Page Layout 1",
  //       link: "#",
  //       submenus: [
  //         { title: "About Us", link: "/about" },
  //         // {title:'About Me',link:'/about-me'},
  //         // {title:'Service Creative',link:'/services'},
  //         // {title:'Service Standard',link:'/services-2'},
  //         // {title:'Service Basic',link:'/services-3'},
  //         { title: "Service Details", link: "/service-details" },
  //         // {title:'Help Center',link:'/help'},
  //       ],
  //     },
  //     // {
  //     //   title: 'Page Layout 2', link: '#',
  //     //   submenus: [
  //     //     {title:'Team Classic',link:'/team'},
  //     //     {title:'Team Details',link:'/team-details'},
  //     //     {title:'Event Details',link:'/event-details'},
  //     //     {title:'Job List',link:'/job'},
  //     //     {title:'Job Details',link:'/job-details'},
  //     //     {title:'Pricing Table',link:'/pricing'},
  //     //     {title:'Coming soon',link:'/coming-soon'},
  //     //   ]
  //     // },
  //     // {
  //     //   title: 'Page Layout 3', link: '#',
  //     //   submenus: [
  //     //     {title:'Shop',link:'/shop'},
  //     //     {title:'Shop Right Sidebar',link:'/shop-right-sidebar'},
  //     //     {title:'Shop Details',link:'/product-details'},
  //     //     {title:'FAQs',link:'/faq'},
  //     //     {title:'Search Result',link:'/search'},
  //     //     {title:'Privacy & Policy',link:'/policy'},
  //     //     {title:'Terms & Conditions',link:'/terms'},
  //     //   ]
  //     // },
  //     // {
  //     //   title: 'Page Layout 4', link: '#',
  //     //   submenus: [
  //     //     {title:'Error 404',link:'/404'},
  //     //     {title:'Login',link:'/login'},
  //     //     {title:'Register',link:'/register'},
  //     //     {title:'Forgot Password',link:'/forgot'},
  //     //     {title:'My Cart',link:'/cart'},
  //     //     {title:'My Wishlist',link:'/wishlist'},
  //     //     {title:'Checkout',link:'/checkout'},
  //     //   ]
  //     // },
  //   ],
  // },
  {
    id: 6,
    hasDropdown: true,
    title: "Contact",
    link: "/contact",
    submenus: [
      { title: "Contact Agency", link: "/contact" },
      { title: "Contact: Classic", link: "/contact-2" },
    ],
  },
];

export default menu_data;
