# Responsive Navigation Menu - Assignment Submission

## Project Overview  
This project implements a responsive navigation menu for a React web application using Material UI (MUI). It features a top AppBar with navigation links, a dropdown menu for grouped items (e.g., Services), and a dark/light theme toggle. The design emphasizes responsiveness, accessibility, and modularity.

---

## Live Demo / GitHub  
Upload your project to GitHub and include the link here:  
**GitHub Repository:** [https://github.com/alanrmoreira/webdev-assignment1](https://github.com/alanrmoreira/webdev-assignment1)

---

## Design Choices  
- **Material UI (MUI):** Chosen for its built-in responsiveness, accessibility features, and cohesive design system.  
- **React Router:** Used for client-side navigation without page reloads.  
- **CSS Modules / Global Styles:** A custom `style.css` file was used to handle specific overrides and visual consistency.  
- **Theme Toggle:** Supports light and dark modes for accessibility and user preference.  
- **Dropdown Menu:** Services are grouped in a dropdown for cleaner desktop UI and expandable items in mobile view.

---

## Implementation Approach  
- Created modular components: `Navbar.tsx`, `Dropdown.tsx`  
- Used `react-router-dom` for routing between pages  
- Styled navigation items via MUI `sx` prop and `style.css`  
- Applied conditional rendering for mobile vs. desktop views using MUI breakpoints  
- Introduced a custom `ThemeProviderWrapper.tsx` to manage light/dark themes using React Context

---

## Functionality  
- Fully responsive AppBar  
- Dropdown menu for grouped navigation links  
- Light/Dark theme toggle button  
- Navigation links update URL using React Router without full reloads  
- Avatar placeholder with user menu (mock functionality)

---

## How to Run Locally  

### 1. Clone the repository  
```bash
git clone https://github.com/alanrmoreira/webdev-assignment1
cd webdev-assignment1
```

### 2. Install dependencies  
```bash
npm install
```

### 3. Start the development server  
```bash
npm run dev
```

### 4. View in browser  
Navigate to: `http://localhost:5173`

---

## Testing Instructions  
- Verify navigation works between all pages (e.g., Overview, Contact, Development, Consulting)  
- Resize the window to test responsive behavior  
- Toggle between light/dark themes and confirm persistence if implemented

---

## User Experience Considerations  
- **Responsiveness:** Layout adjusts for desktop/tablet/mobile using MUI breakpoints  
- **Accessibility:** MUI provides ARIA attributes and keyboard navigation support out-of-the-box  
- **Theme Preference:** Users can switch between light and dark themes easily  
- **Clarity:** Grouped navigation via dropdown avoids clutter

---

## Design Patterns / Frameworks  
- **Component-based Architecture:** Promotes reusability and separation of concerns  
- **React Context:** Used for global theme control  
- **Hooks:** Used `useState`, `useContext` for state management  
- **React Router:** SPA-style routing with semantic URLs

---

## References  
- [Material UI Documentation](https://mui.com/)  

---