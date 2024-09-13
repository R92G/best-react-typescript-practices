# React & TypeScript best practices

## Application Structure

The application is structured across three layers:

1. **Category Page**: Displays an overview of product categories.
2. **Products Page**: Shows a grid of products within a selected category.
3. **Product Detail Page**: Provides detailed information about a specific product, including pricing, availability, and more.

This separation of concerns ensures a clean and scalable architecture, making it easier to manage and extend the application.

## Implementation Details

### **React Application with TypeScript**

The entire application is built with **TypeScript**, providing strong type safety and improving code reliability. **Zod** was used for schema validation and type inference, ensuring that the API responses are correctly validated and typed throughout the application.

### **State Management**

State management is handled on two fronts:

- **Zustand**: Used for client-side state, managing features such as:
  - **Favorites**: Users can mark products as favorites, and these preferences are stored persistently.
  - **Filters**: Dynamic filters allow users to refine product results based on criteria like price, rating, and stock availability.
  - **Cart Functionality**: Users can add products to their cart, adjust quantities, and view the total price. The cart state is also persisted across sessions.
- **React Query**: Manages server-side state, including data fetching, caching, and error handling. The React Query setup includes reusable hooks for API interactions and handles various states such as loading, success, and error.

### **Lazy Loading**

To optimize performance, **lazy loading** was implemented for components, ensuring that code is split and only loaded when necessary, particularly for larger sections like the product detail page.

### **Modular Folder Structure**

The application follows a **modular folder structure**, where related components, hooks, and logic are grouped together by feature. This structure enhances maintainability and scalability, ensuring that future changes or additions can be made easily.

### **CSS and Styling**

I employed **Styled Components** to create reusable, SCSS-like styled components for the UI. This approach ensures that the components are modular and the styles are maintainable. The design is fully responsive and works across various devices and screen sizes.

### **Skeleton Loading**

Skeleton loaders were implemented to improve the user experience while data is being fetched. This was achieved by using React Suspense in the lazy loading of the page route.

### **No Prop Drilling**

The app avoids **prop drilling** by leveraging state management tools like Zustand and React Query. This ensures that data flows are clean and centralized, making the components easier to manage and reducing unnecessary prop passing.

### **Additional Features**

- **Favorites**: Built functionality to allow users to add and remove products from their favorites list.
- **Filters**: Implemented filters with `useMemo` for efficient filtering based on URL parameters and state, allowing for seamless navigation and refinement of product lists.
- **Cart**: Added cart functionality with options to add, remove, and adjust quantities of products, including displaying a persistent total price.
- **Dynamic URL Routing**: Implemented dynamic URL routing to support navigation between the category page, products page, and product detail page.
- **Browser Compatibility**: Ensured compatibility across major browsers, including Chrome, Edge, Safari, Firefox, and Opera.

### **Testing the Cart Functionality**

I implemented tests for the cart functionality using Vitest and React Testing Library. These tests verify that the addToCart functionality within the Zustand state management correctly updates the cart by adding products, ensuring that the cart state behaves as expected and the application logic works as intended.

## What's Next

Here are some planned improvements for the next iteration:

1. **Dynamic Filters**: Currently, the filters are hardcoded. The next step is to make these filters dynamic, allowing users to apply filters based on the data retrieved from the API.
2. **Group Products by Color**: Enhance the user experience by grouping products by color, providing users with a more organized and intuitive product display.
3. **Build a Checkout Screen**: Add a checkout screen where users can review their selected items, input payment details, and complete their purchases.
4. **Add more tests**: Add tests to verify the favorites, seach and filter functions work as intended.

---
