# React Native Application

I have tried my best to avoid using third-party libraries; however, I had to use them in certain places. This React Native application includes several features such as task management, post pagination, light/dark theme switching, and a form screen for user inputs. Below are the details of each functionality:

---

## Task Management Screen

The **Task Management Screen** provides the following functionality:

- Navigation to manage tasks efficiently.
- Use of AsyncStorage for storing and retrieving task data persistently.
- A Completed feature to mark tasks as completed.
- A Restore option to recover tasks that were previously deleted, allowing for task restoration or undoing deletions.

---

## Post List with Pagination

The **Post List with Pagination** provides:

- A screen to display a list of posts.
- Posts are loaded incrementally using pagination, ensuring optimal performance for large datasets.
- Each post has a dedicated screen, allowing users to view detailed information about the selected post.

---

## Light/Dark Theme

The application supports **Light/Dark Mode**:

- A toggle button on the home screen (positioned at the top-right) allows users to switch between light and dark themes.
- Themes are applied dynamically across all screens for a consistent experience.
- The theme is also set automatically based on the user's system preferences at the initial load.
- Additionally, the toggle button allows users to manually switch between themes, providing flexibility and customization.

---

## Form Screen

The **Form Screen** enables the following:

- Allows users to input their data, including fields for name and email.
- Users can also upload an image, which will be displayed alongside their input data.
- Data can be previewed in a modal that displays the entered information.
- After submitting the form, a success message is displayed in an alert. Clicking "OK" on the alert navigates the user back to the home screen.
- On the home screen, there is a modal available to show all the entered information for review.

---

### How to Run the Application

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   npm install
   npx react-native run-android
   ```
