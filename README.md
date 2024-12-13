# React Native Application

This React Native application includes several features such as task management, post pagination, light/dark theme switching, and a form screen for user inputs. Below are the details of each functionality:

---

## Task Management Screen

The **Task Management Screen** provides the following functionality:
- Navigation to manage tasks efficiently.
- A button allows you to seamlessly transition to this page to handle all task-related operations.

---

## Post List with Pagination

The **Post List with Pagination** provides:
- A screen to display a list of posts.
- Posts are loaded incrementally using pagination, ensuring optimal performance for large datasets.
- Navigate to this page through a button on the home screen.

---

## Light/Dark Theme

The application supports **Light/Dark Mode**:
- A toggle button on the home screen (positioned at the top-right) allows users to switch between light and dark themes.
- Themes are applied dynamically across all screens for a consistent experience.

---

## Form Screen

The **Form Screen** enables the following:
- Allows users to input their data, including fields for name and email.
- Users can also upload an image, which will be displayed alongside their input data.
- Data can be previewed in a modal that displays the entered information.

---

### How to Run the Application

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   npm install
   npx react-native run-android
   ```